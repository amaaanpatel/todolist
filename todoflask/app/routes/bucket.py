from flask import Flask,redirect, url_for, request ,jsonify, make_response
from app import app
from app.controllers import bucketController


#home route (get the to do list)
@app.route('/getbucket',methods = ['GET'])
def bucketList():
  return bucketController.bucketList()

@app.route('/insertbucket',methods = ['POST'])
def insertBucket():
  return bucketController.insertBucket(request)


@app.route('/deletebucket',methods = ['POST'])
def deleteBucket():
  return bucketController.deleteBucket(request)

# @app.route('/updateitem',methods = ['POST'])
# def updateitem():
#   return homeController.updateItem(request)


