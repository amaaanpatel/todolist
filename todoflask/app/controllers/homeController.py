from flask import Flask,redirect, url_for, request ,jsonify
from app import mysql

def homeController():
  # result = [{"desc" : "want to complete this", "isChecked": "false","type":"list", "id":1, "bucketName": "one" }]
  try:
    print("test")
    conn =  mysql.connection.cursor()
    conn.execute("SELECT * FROM todo")
    data=conn.fetchall()
    return jsonify(data)
    

  except Exception as e:
    print("error",e)
    return jsonify([])
