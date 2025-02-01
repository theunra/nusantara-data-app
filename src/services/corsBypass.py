import requests

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/login", methods=['POST'])
def login():
    if request.method == 'POST':    
        data = request.json
        print(data)
        url = 'http://103.56.148.33:9011/login'
        payload = {"email": data["email"], "password" : data["password"]}

        x = requests.post(url, json = payload)

        return x.text