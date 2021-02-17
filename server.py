import time
from flask import Flask, render_template, request
from skimage.util import invert
from skimage import img_as_bool, io, color, morphology, img_as_ubyte
from PIL import Image
from io import BytesIO
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

@app.route('/api/getimage', methods=['POST'])
def get_image():
    #read image file string data
    # filestr = request.files['tests'].stream.read()
    img = Image.open(request.files['tests']).convert('RGB')
    #convert string data to numpy array
    img_array = np.array(img)
    # convert numpy array to image
    greyscale_img = invert(img_as_bool(color.rgb2gray(img_array)))
    cv_image = img_as_ubyte(greyscale_img)
    edgeDetector(cv_image)
    return {'image': 'True'}

def edgeDetector(image):
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