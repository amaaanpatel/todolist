import os,json,datetime
from flask import Flask,jsonify, request, make_response, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS



# create the flask object
app = Flask(__name__)
CORS(app)
#run the falsk app in debug mode
app.config['DEBUG'] = True

app.config['MYSQL_HOST'] = '52.66.134.20'
app.config['MYSQL_USER'] = 'test'
app.config['MYSQL_PASSWORD'] = 'Amaan@211991'
app.config['MYSQL_DB'] = 'fract'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# app.config["CACHE_TYPE"] = "null"

# import all the routes from the routes package
from app.routes import *


#error when no page id found
@app.errorhandler(404)
def not_found(error):
    """ error handler """
    # LOG.error(error)
    return make_response(jsonify({'error': 'Not found'}), 404)