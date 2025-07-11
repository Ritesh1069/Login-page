from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
CORS(app)

def check_cred(email, password):
    df = pd.read_csv('users.csv')
    for index, row in df.iterrows():
        if row['email'] == email and row['password'] == password:
            return True 
    
    return False  

@app.route('/login', methods=['POST'])
def login():
    email = request.form['Email']
    password = request.form['Password']
    
    if check_cred(email, password):
        return jsonify({'message': 'Login Successful'})
    else:
        return jsonify({'message': 'Please Check your Email-Id and Password'})

if __name__== "__main__":
    app.run(debug=True)