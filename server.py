import time
from flask import Flask, render_template, request,jsonify
from skimage.util import invert
from skimage import img_as_bool, io, color, morphology, img_as_ubyte
from PIL import Image
from io import BytesIO
from algorithm import DigitAlgorithm
import os
import threading
import numpy as np
import cv2
import base64
import random


#prod
app = Flask(__name__, static_folder='./build', static_url_path='/')
tasks = {}
results = {}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/api/returnResults/<int:task_id>')
def get_results(task_id):
    if tasks[task_id].is_alive():
        return jsonify({'status': 'running'})
    try:
        tasks[task_id].join()
        return jsonify({'status': 'finished', 'result': results[task_id]})
    except RuntimeError:
        return jsonify({'status': 'not started'})


def do_work(questions_images, checker_results ,answers,results, task_id):
    for key, img in enumerate(questions_images):
        answer = batel_algo(img)
        if(answer == answers[key+1]):
            checker_results['total_correct'] = checker_results['total_correct'] + 1
            answer = 1
        else:
            checker_results['total_wrong'] = checker_results['total_wrong'] + 1
            answer = 0
            
        checker_results['answers'].append({
            'question': key + 1,
            'answer' : answer})
        
    # checker_results = {
    #     'questions_count': 6,#questions_count,
    #     'answers' : [
    #         {'question': 1,
    #          'answer' : 0},
    #         {'question': 2,
    #          'answer' : 1},
    #         {'question': 4,
    #          'answer' :  0},
    #         {'question': 5,
    #          'answer' :  0},
    #         {'question': 6,
    #          'answer' :  0}
    #     ],
    #     'total_correct': 1,
    #     'total_wrong': 5
    # }
    results[task_id] = checker_results
        
@app.route('/api/checkTest', methods=['POST'])
def start_task(): 
    questions_count = 0
    answers = {}
    for field_name in request.form:
        if field_name == 'questions_count':
            questions_count = int(request.form[field_name])
        else:
            answers[int(field_name)] = int(request.form[field_name])
    cv_image = process_image(request.files['images'])
    
    questions_images = extract_questions_from_image(cv_image)
    checker_results = {'questions_count': questions_count,
        'answers' : [],
        'total_correct': 0,
        'total_wrong': 0
        }
    new_task_id  = random.randint(0, 10000000)
    task = threading.Thread(target=do_work, kwargs={'questions_images': questions_images, 'checker_results' : checker_results, 'answers' : answers, 'results' : results, 'task_id' : new_task_id})
    task.start()
    tasks[new_task_id] = task
    results[new_task_id] = None
    return jsonify({'task_id': new_task_id, 'total_tasks': len(tasks)})


# def check_test(questions_images, checker_results ,answers): 
    


# def check_test():
#     questions_count = 0
#     answers = {}
#     for field_name in request.form:
#         if field_name == 'questions_count':
#             questions_count = int(request.form[field_name])
#         else:
#             answers[int(field_name)] = int(request.form[field_name])
#     cv_image = process_image(request.files['images'])
    
#     questions_images = extract_questions_from_image(cv_image)
#     checker_results = {'questions_count': questions_count,
#         'answers' : [],
#         'total_correct': 0,
#         'total_wrong': 0
#         }
#     for key, img in enumerate(questions_images):
#         answer = batel_algo(img)
#         if(answer == answers[key+1]):
#             checker_results['total_correct'] = checker_results['total_correct'] + 1
#             answer = 1
#         else:
#             checker_results['total_wrong'] = checker_results['total_wrong'] + 1
#             answer = 0
            
#         checker_results['answers'].append({
#             'question': key + 1,
#             'answer' : answer})
        
#     # checker_results = {
#     #     'questions_count': 6,#questions_count,
#     #     'answers' : [
#     #         {'question': 1,
#     #          'answer' : 0},
#     #         {'question': 2,
#     #          'answer' : 1},
#     #         {'question': 4,
#     #          'answer' :  0},
#     #         {'question': 5,
#     #          'answer' :  0},
#     #         {'question': 6,
#     #          'answer' :  0}
#     #     ],
#     #     'total_correct': 1,
#     #     'total_wrong': 5
#     # }
#     return jsonify(checker_results)

def process_image(raw_image):
    img = Image.open(raw_image).convert('RGB')
    #convert string data to numpy array
    img_array = np.array(img)
    # convert numpy array to image
    greyscale_img = img_as_bool(color.rgb2gray(img_array))
    cv_image = img_as_ubyte(greyscale_img)
    return cv_image

def extract_questions_from_image(image):
    '''
    This function should get as input the grayscale 'image' and any additional
    parameters you need, and return 'edge_map': a binary image (same shape as 'image')
    with a value of 1 in each detected edge pixel and a value of zero otherwise.
    '''
    edge_map = cv2.Canny(image, 200,600)
    lines = cv2.HoughLines(edge_map,rho=1,theta=np.pi/180,threshold=800,)
    # Compute lines
    if lines is not None:
        x1, x2, y1, y2 = [], [], [], []
        for line in lines:
            rho,theta = line[0]
            a = np.cos(theta)
            b = np.sin(theta)
            x0 = a*rho
            y0 = b*rho
            x1.append(int(x0 + 1000 * (-b)))
            y1.append(int(y0 + 1000 * (a)))
            x2.append(int(x0 - 1000 * (-b)))
            y2.append(int(y0 - 1000 * (a)))
            
        questions_images = []
        starty = 0
        for i in range(len(y1)):
            questions_images.append(image[starty:int(y1[i])])
            starty = int(y1[i])
        return questions_images
    return [image]

def batel_algo(image):
  # initialize our model:
  detector = DigitAlgorithm("pickle_model.pkl","scaler.pkl")
  return detector.predict_result(image)