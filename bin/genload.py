import os
import time

while (True):
    os.system("curl http://researchportal.info/api/interests")
    os.system("curl http://researchportal.info/")
    time.sleep(0.40)
