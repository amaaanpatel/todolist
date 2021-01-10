from flask import Flask,redirect, url_for, request ,jsonify, make_response
from app import app
from app.controllers import homeController


#home route (get the to do list)
@app.route('/home',methods = ['GET'])
def home():
  return homeController.homeController()

@app.route('/insertList',methods = ['POST'])
def insertList():
  return homeController.insertList(request)


