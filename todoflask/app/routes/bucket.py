from flask import Flask,redirect, url_for, request ,jsonify, make_response
from app import app
from app.controllers import bucketController


#home route (get the to do list)
@app.route('/getbucket',methods = ['GET'])
def bucketList():
  return bucketController.bucketList()

# @app.route('/insertlist',methods = ['POST'])
# def insertList():
#   return homeController.insertList(request)


# @app.route('/deleteitems',methods = ['POST'])
# def deleteItem():
#   return homeController.deleteItem(request)

# @app.route('/updateitem',methods = ['POST'])
# def updateitem():
#   return homeController.updateItem(request)


