import pickle
import cv2
import matplotlib.pyplot as plt
import numpy as np
from sklearn import preprocessing
from scipy import signal
import pytesseract
from pytesseract import Output

class DigitAlgorithm:
  def __init__(self, window_size = 14, resize_to=128, threshold =200):
    self.window_size = window_size
    self.resize_to = resize_to
    self.threshold = threshold
  
  def hough_circle_extraction(self, img):
    cv_circles_radius = []
    cv_circles_centers = []
    circles_cv = cv2.HoughCircles(img,method=cv2.HOUGH_GRADIENT,dp=1,minDist=1,
                                    param1=50,param2=23,minRadius=5,maxRadius=20)
    
    dp = 0.5
    blur_img = cv2.GaussianBlur(img,(3,3),0)
    if (circles_cv is None) or (circles_cv.size >= 150):
      circles_cv = cv2.HoughCircles(blur_img,method=cv2.HOUGH_GRADIENT_ALT,dp=dp,minDist=1,
                              param1=10,param2=0.8,minRadius=2,maxRadius=20)
      dp += 0.1
      while dp < 3:
        more = cv2.HoughCircles(blur_img,method=cv2.HOUGH_GRADIENT_ALT,dp=dp,minDist=1,
                              param1=10,param2=0.8,minRadius=2,maxRadius=20)
        if more is not None:
          np.concatenate((circles_cv, more))
        dp += 0.1
        
    if circles_cv is not None:
      circles_cv = np.uint16(np.around(circles_cv))
      for i in circles_cv[0, :]:
        cv_circles_radius.append(i[2])
        cv_circles_centers.append((i[0], i[1]))
    return cv_circles_centers, cv_circles_radius
  

  def extract_circled_digit(self,img, window_size=14):
    circles_center, circles_radius = self.hough_circle_extraction(img)

    # Find only one center
    median_circle = np.ceil(np.median(circles_center, axis=0))

    # take window size cemtered by the median circle
    digit_roi = np.zeros((window_size,window_size))

    digit_roi = img[int(median_circle[1] - window_size / 2):int(median_circle[1] + window_size / 2),
                int(median_circle[0] - window_size / 2): int(median_circle[0] + window_size / 2)].copy()
    return digit_roi

  def pre_process_img(self,img, resize_to = 128):
    plt.imshow(img,cmap='gray')
    plt.title("1")
    plt.show()
    
    digit_roi = cv2.resize(img, (resize_to, resize_to))
    plt.imshow(digit_roi, cmap='gray')
    plt.title("after resize")
    plt.show()

    (thresh, digit_roi) = cv2.threshold(digit_roi, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
    plt.imshow(digit_roi, cmap='gray')
    plt.title("after threshold")
    plt.show()
    
    return digit_roi
  
  def pre_process_img_no_plot(self,img, resize_to = 128, threshold = 200):
    digit_roi = cv2.resize(img, (resize_to, resize_to))
    (thresh, digit_roi) = cv2.threshold(digit_roi, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
    
    return digit_roi


  def predict_with_plot(self, img):
    result = []
    plt.imshow(img,cmap='gray')
    plt.show()
    
    filename = 'savedImage.jpg'
    cv2.imwrite(filename, img) 
    digit_roi = self.extract_circled_digit(img,self.window_size)
    plt.imshow(digit_roi,cmap='gray')
    plt.title('extraction of digit')
    plt.show()
    
    digit_roi = self.pre_process_img(digit_roi, resize_to = 128)
    plt.imshow(digit_roi,cmap='gray')
    plt.title('input to recognition model')
    plt.show()
    
    # pytesseract.pytesseract.tesseract_cmd = r'/app/.apt/usr/bin/tesseract'
    dic = pytesseract.image_to_data(digit_roi,config='--psm 10', output_type=Output.DICT)
    for letter in dic["text"]:
      if letter!='':
          result = letter
          
    print("is the letter correct?")
    print(result)

    return int(result)
  
  def predict(self, img):
    result = []
    digit_roi = self.extract_circled_digit(img,self.window_size)
    digit_roi = self.pre_process_img_no_plot(digit_roi, resize_to = 128)
    # pytesseract.pytesseract.tesseract_cmd = r'/app/.apt/usr/bin/tesseract'
    dic = pytesseract.image_to_data(digit_roi,config='--psm 10', output_type=Output.DICT)
    for letter in dic["text"]:
      if letter!='':
          result = letter

    return int(result)
  
  def extract_image(self, img):
    plt.imshow(img,cmap='gray')
    plt.show()
    filename = 'savedImage.jpg'
    cv2.imwrite(filename, img) 
    return 1

if __name__ == "__main__":
  image_path = '../test/no_dot_sample/tester322.jpg'
  # Read the image in grayscale
  img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
  img = cv2.resize(img,(800,200))

  # initialize our model:
  detector = DigitAlgorithm()
  result = detector.predict_with_plot(img)
  print(str(result))