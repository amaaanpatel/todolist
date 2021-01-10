from flask import Flask,redirect, url_for, request ,jsonify

def homeController():
  result = [{"desc" : "want to complete this", "isChecked": "false","type":"list", "id":1, "bucketName": "one" }]
  return jsonify(result)