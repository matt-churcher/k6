from flask import Flask
from time import sleep
app = Flask(__name__)

@app.route('/')
def hello_world():
    sleep(1)
    return 'Hello, ObservabilityCon!'
