import time
from flask import Flask, render_template, request,jsonify
from skimage.util import invert
from skimage import img_as_bool, io, color, morphology, img_as_ubyte
from PIL import Image
from io import BytesIO
import os
import numpy as np
import cv2
import base64

#prod
app = Flask(__name__, static_folder='./build', static_url_path='/')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# @app.route('/api/time')
# def get_current_time():
#     return {'time': time.time()}

@app.route('/api/checkTest', methods=['POST'])
def check_test():
    questions_count = 0
    answers = {}
    for field_name in request.form:
        if field_name == 'questions_count':
            questions_count = int(request.form[field_name])
        else:
            answers[int(field_name)] = int(request.form[field_name])
    cv_image = process_image(request.files['images'])
    edge_detector(cv_image)
    checker_results = {
        'questions_count': 6,#questions_count,
        'answers' : [
            {'question': 1,
             'answer' : 0},
            {'question': 2,
             'answer' : 1},
            {'question': 4,
             'answer' :  0},
            {'question': 5,
             'answer' :  0},
            {'question': 6,
             'answer' :  0}
        ],
        'total_correct': 1,
        'total_wrong': 5
    }
    return jsonify(checker_results)

def process_image(raw_image):
    #read image file string data
    # filestr = request.files['tests'].stream.read()
    
    img = Image.open(raw_image).convert('RGB')
    #convert string data to numpy array
    img_array = np.array(img)
    # convert numpy array to image
    greyscale_img = invert(img_as_bool(color.rgb2gray(img_array)))
    cv_image = img_as_ubyte(greyscale_img)
    return cv_image

def edge_detector(image):
    '''
    This function should get as input the grayscale 'image' and any additional
    parameters you need, and return 'edge_map': a binary image (same shape as 'image')
    with a value of 1 in each detected edge pixel and a value of zero otherwise.
    '''
    edge_map = cv2.Canny(image, 200,600) # Replace with edge detection code
    lines = cv2.HoughLines(edge_map,rho=1,theta=np.pi/180,threshold=600,)
    # Compute lines as before
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
    print(y1[0])