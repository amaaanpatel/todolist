from flask import Flask,redirect, url_for, request ,jsonify
from app import mysql

def bucketList():
  try:
    conn =  mysql.connection.cursor()
    conn.execute("SELECT * FROM bucket")
    data=conn.fetchall()
    return jsonify(data)
    

  except Exception as e:
    print("error",e)
    return jsonify([])
  
  
def insertBucket(request):
  try:
    data = request.get_json()
    conn =  mysql.connection
    query = "INSERT INTO bucket (DESCRIPTION) VALUES ('{}')".format(data['desc'])
    print(query)
    conn.cursor().execute(query)   
    print(conn.insert_id())
    insertId = conn.insert_id()
    conn.commit()
    return jsonify({"status":"true","id":insertId})
  except Exception as e:
    print("error",e)
    return jsonify({"status":"false"})
  
  
def deleteBucket(request):
  try:
    data = request.get_json()
    print(data)
    conn =  mysql.connection
    query = "DELETE FROM bucket WHERE id = {}".format(data['itemId'])
    query2 = "DELETE FROM todo WHERE bucketid = {}".format(data['itemId'])
    print(query,query2)
    conn.cursor().execute(query)  
    conn.cursor().execute(query2)    
    conn.commit()
    return jsonify({"status":"true"})
  except Exception as e:
    print("error",e)
    return jsonify({"status":"false"})
  
  
def updateBucket(request):
  try:
    data = request.get_json()
    print(data)
    conn =  mysql.connection
    query = "UPDATE bucket SET description = '{}' WHERE id = {}".format(data['desc'],data['itemId'])
    print(query)
    conn.cursor().execute(query)   
    conn.commit()
    return jsonify({"status":"true"})
  except Exception as e:
    print("error",e)
    return jsonify({"status":"false"})
