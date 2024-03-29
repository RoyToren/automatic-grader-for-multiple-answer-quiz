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


app = Flask(__name__, static_folder='./build', static_url_path='/')
tasks = {}
results = {}
detector = DigitAlgorithm()

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
        answer = detection_algorithm(img)
        checker_results['detected_answers'].append({
            'question': key + 1,
            'answer' : answer})
        if(answer == answers[key+1]):
            checker_results['total_correct'] = checker_results['total_correct'] + 1
            answer = 1
        else:
            checker_results['total_wrong'] = checker_results['total_wrong'] + 1
            answer = 0
            
        checker_results['answers'].append({
            'question': key + 1,
            'answer' : answer})
        
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
    
    questions_images = extract_questions_from_image(cv_image,questions_count)
    checker_results = {'questions_count': questions_count,
        'answers' : [],
        'total_correct': 0,
        'total_wrong': 0,
        'detected_answers' : [],
        }
    new_task_id  = random.randint(0, 10000000)
    task = threading.Thread(target=do_work, kwargs={'questions_images': questions_images, 'checker_results' : checker_results, 'answers' : answers, 'results' : results, 'task_id' : new_task_id})
    task.start()
    tasks[new_task_id] = task
    results[new_task_id] = None
    return jsonify({'task_id': new_task_id, 'total_tasks': len(tasks)})


def process_image(raw_image):
    img = Image.open(raw_image)
    img_array = np.array(img)
    greyscale_img = img_array
    cv_image = cv2.cvtColor(img_as_ubyte(greyscale_img), cv2.COLOR_BGR2GRAY)
    return cv_image

def extract_questions_from_image(image,questions_count):
    '''
    This function should get as input the grayscale 'image' and any additional
    parameters you need, and return 'edge_map': a binary image (same shape as 'image')
    with a value of 1 in each detected edge pixel and a value of zero otherwise.
    '''
    edge_map = cv2.Canny(image, 200,600)
    lines = cv2.HoughLinesP( edge_map,rho=7,theta=np.pi/180,threshold=600,minLineLength = 100, maxLineGap = 1)
    # Compute lines
    if lines is not None:
        lines = np.sort(lines, axis=0)
        x1, x2, y1, y2 = [], [], [], []
        for line in lines:
            points = line[0]
            x1.append(int(points[0]))
            y1.append(int(points[1]))
            x2.append(int(points[2]))
            y2.append(int(points[3]))
        questions_images = []
        starty = 0
        for i in range(len(y1)):
            if(image[starty:int(y1[i])].size > 100000):
                questions_images.append(image[starty:int(y1[i])])
            starty = int(y1[i])
        return questions_images
    return [image]

def detection_algorithm(image):
  # initialize our model:
  image = cv2.resize(image,(800,200))
  return detector.predict(image)