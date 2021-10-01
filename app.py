from flask import Flask
from sleep import time
app = Flask(__name__)

@app.route('/')
def hello_world():
    sleep(1)
    return 'Hello, ObservabilityCon!'
