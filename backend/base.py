from flask import Flask

api = Flask(__name__)

@api.route('/search')
def generate_recommendations():
    return