import numpy as np
import cv2
 
image = cv2.imread('/pictures/acquisita.jpg')
template = cv2.imread('/pictures/confronto.jpg')
 
image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
 
result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF)
min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
top_left = max_loc

print max_loc //stampo questa variabile per cercare una relazione tra i falsi positivi

h,w = template.shape
bottom_right = (top_left[0] + w, top_left[1] + h)
cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)
 
cv2.imshow("Result", image)
cv2.waitKey(0)
