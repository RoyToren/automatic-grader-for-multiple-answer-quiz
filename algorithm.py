import pickle
import cv2
import matplotlib.pyplot as plt
import numpy as np
from sklearn import preprocessing
from scipy import signal

class DigitAlgorithm:
  # def __init__(self, model_path, scaler_path,window_size = 16, resize_to=128, threshold =200):
  def __init__(self, model_path, scaler_path, pca_model_path, window_size = 14, resize_to=128, threshold =200):
    self.model = self.load_model(model_path)
    self.scaler = self. load_scaler(scaler_path)
    self.window_size = window_size
    self.resize_to = resize_to
    self.threshold = threshold
    self.pca_model = self.load_pca(pca_model_path)

  def load_model(self, model_path):
    with open(model_path, 'rb') as file:
      model = pickle.load(file)
    return model

  def load_scaler(self, scaler_path):
    with open(scaler_path, 'rb') as file:
      scaler = pickle.load(file)
    return scaler

  def load_pca(self, pca_path):
    with open(pca_path, 'rb') as file:
      pca = pickle.load(file)
    return pca

  def edgeDetector(self, image):
    '''
    This function should get as input the grayscale 'image' and any additional
    parameters you need, and return 'edge_map': a binary image (same shape as 'image')
    with a value of 1 in each detected edge pixel and a value of zero otherwise.
    '''
    edge_map = cv2.Canny(image,10,50) # Replace with edge detection code
    return edge_map
  
  def new_hough_circle(self, img):
    cv_circles_radius = []
    cv_circles_centers = []
    circles_cv = cv2.HoughCircles(img,method=cv2.HOUGH_GRADIENT,dp=1,minDist=1,
                                    param1=50,param2=23,minRadius=5,maxRadius=20)
    
    # if (circles_cv is None) or (circles_cv.size >= 100):
    #   blur_img = cv2.GaussianBlur(img,(3,3),0)
    #   circles_cv = cv2.HoughCircles(blur_img,method=cv2.HOUGH_GRADIENT,dp=1,minDist=1,
    #                         param1=10,param2=23,minRadius=4,maxRadius=35)
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
      print('yay')
      circles_cv = np.uint16(np.around(circles_cv))
      for i in circles_cv[0, :]:
        cv_circles_radius.append(i[2])
        cv_circles_centers.append((i[0], i[1]))
    return cv_circles_centers, cv_circles_radius

  def HoughCircles(self, edge_map):
    '''
    This function should get as input binary edge map and any additional
    parameters needed to compute the Hough space and to find the local maximums.
    It should first compute the Hough space, i.e. the votes of each edge pixel
    for all the relevant circles passing by it. Then, it should detect the local
    maximum points which are equivalent to detecting the circles in the image.
    The algorithm should return the following variables:
    circles_center: a list of the center coordinates of all the detected circles;
                  Each center coordinates are represented as tuples of two values (X_coordinate, Y_coordinate).
    circles_radius: a list of the radius of all the detected circles.
                  circles_radius[0] should correspond to the same circle saved in
                  circles_center[0].
    Note: you may add any additional input and\or output parameters to this algorithm,
    but you must explain each of them in the atached pdf.
    '''
    # ======= Replace with relevant code
    circles_center = []
    circles_radius = []
    # ========

    # initialize kernels
    kernel_shape = 99
    kernel = np.zeros((kernel_shape, kernel_shape))
    radius_range = np.arange(10, 16, 2, dtype=np.int)
    kernels = np.zeros((kernel_shape, kernel_shape, radius_range.shape[0]))

    ### create circles on kernels
    center = (int(np.floor(kernel_shape / 2)), int(np.floor(kernel_shape / 2)))
    # kernels = [cv2.circle(np.ascontiguousarray(kernels[:,:,idx]), center, radius, (255,255,255), thickness=1) for idx, radius in enumerate(radius_range)]
    for idx, radius in enumerate(radius_range):
      kernel_im = np.zeros((kernel_shape, kernel_shape))
      cv2.circle(np.ascontiguousarray(kernel_im), center, radius, (255, 255, 255))
      kernel_im = kernel_im / 255
      kernels[:, :, idx] = kernel_im

    #TODO: not sure
    # edge_map = edge_map / 255

    # apply kernels and save results
    radiuses = []
    centers = []

    # for kernel_idx, kernel in enumerate(kernels):
    for kernel_idx in range(kernels.shape[2]):
      conv_img = np.zeros((kernel_shape, kernel_shape))
      kernel = kernels[:, :, kernel_idx]
      kernel_sum = kernel.sum()
      # conv_img = cv2.filter2D(edges,-1, kernel)
      #conv_img = signal.convolve2d(edges, kernel,
      #                             mode='same', boundary='fill', fillvalue=0)
      conv_img = signal.convolve2d(edge_map, kernel,
                                  mode='same', boundary='fill', fillvalue=0)
      max_vals = np.unique(conv_img)[-2:]
      curr_centers_x, curr_centers_y = np.where(conv_img >= max_vals.min())
      for x, y in zip(curr_centers_y, curr_centers_x):
        centers.append((x, y))
        radiuses.append(radius_range[kernel_idx])
    return centers, radiuses

  def plotCircles(self, image, circles_center, circles_radius):
    '''
    This function should plot the detected circles.
    It should draw the circumference of the circles in blue and mark the center
    of the circles by a small yellow point.
    '''
    fig, ax = plt.subplots(1, 1, figsize=(5, 5))
    ax.imshow(image, cmap="gray")
    ax.title.set_text("Detected Circles")

    # Replace with code to mark the center of the circles by a yellow point
    # ax.plot([tpl[0] for tpl in circles_center],[tpl[1] for tpl in circles_center], 'o', color='blue')

    # Replace with code to draw the circumference of the circles in blue
    for center_coordinates, radius in zip(circles_center, circles_radius):
      circ = plt.Circle(center_coordinates, radius, color='red', fill=False)
      ax.add_artist(circ)

  def extract_circled_digit(self,img, window_size=14):
    # edges = self.edgeDetector(img)
    circles_center, circles_radius = self.new_hough_circle(img)

    # Find only one center
    median_circle = np.ceil(np.median(circles_center, axis=0))

    # take window size cemtered by the median circle
    # TODO: not sure
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
    digit_roi = cv2.bitwise_not(digit_roi)
    plt.imshow(digit_roi, cmap='gray')
    plt.title("after bitwise")
    plt.show()
    #digit_roi = digit_roi >= threshold
    (thresh, digit_roi) = cv2.threshold(digit_roi, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
    plt.imshow(digit_roi, cmap='gray')
    plt.title("after threshold")
    plt.show()
    return digit_roi
  
  def pre_process_img_no_plot(self,img, resize_to = 128, threshold = 200):
    digit_roi = cv2.resize(img, (resize_to, resize_to))
    digit_roi = cv2.bitwise_not(digit_roi)
    (thresh, digit_roi) = cv2.threshold(digit_roi, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
    
    return digit_roi

  def pre_process(self,img, scaler, resize_to = 128, threshold = 200):
    X_test = self.pre_process_img(img, resize_to)
    X_test = preprocessing.scale(X_test)
    X_test = np.array(X_test).reshape(1,-1)
    # TODO: apply batching? or we want only one image?
    # X_test = np.expand_dims(X_test, axis=0)
    X_test = scaler.transform(X_test)
    return X_test
  
  def pre_process_no_plot(self,img, scaler, resize_to = 128, threshold = 200):
    X_test = self.pre_process_img_no_plot(img, resize_to)
    X_test = preprocessing.scale(X_test)
    X_test = np.array(X_test).reshape(1,-1)
    # TODO: apply batching? or we want only one image?
    # X_test = np.expand_dims(X_test, axis=0)
    X_test = scaler.transform(X_test)
    return X_test

  def predict(self, img):
    result = []
    plt.imshow(img,cmap='gray')
    plt.show()
    filename = 'savedImage.jpg'
    cv2.imwrite(filename, img) 
    digit_roi = self.extract_circled_digit(img,self.window_size)
    plt.imshow(digit_roi,cmap='gray')
    plt.title('extraction of digit')
    plt.show()
    input = self.pre_process(digit_roi,self.scaler,self.resize_to)
    plt.imshow(input.reshape(self.resize_to, self.resize_to), cmap='gray')
    plt.title('input to recognition model')
    plt.show()
    #TODO: new - check with roy
    input = self.pca_model.transform(input).reshape(1,-1)
    result = int(self.model.predict(input))
    return result
  
  def predict_result(self, img):
    result = []
    digit_roi = self.extract_circled_digit(img,self.window_size)
    input = self.pre_process_no_plot(digit_roi,self.scaler,self.resize_to)
    #TODO: new - check with roy
    input = self.pca_model.transform(input).reshape(1,-1)
    result = int(self.model.predict(input))
    return result
  
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
  detector = DigitAlgorithm("saga_l1_model.pkl","new_scaler.pkl","pca_model.pkl")
  result = detector.predict(img)
  print(result)