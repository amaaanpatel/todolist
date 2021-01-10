from flask import Flask,redirect, url_for, request ,jsonify
from app import mysql

def homeController():
  try:
    conn =  mysql.connection.cursor()
    conn.execute("SELECT * FROM todo")
    data=conn.fetchall()
    return jsonify(data)
    

  except Exception as e:
    print("error",e)
    return jsonify([])
  
  
def insertList(request):
  try:
    data = request.get_json()
    conn =  mysql.connection
    query = "INSERT INTO todo (DESCRIPTION,bucketid) VALUES ('{}',{})".format(data['desc'],data["bucket"])
    print(query)
    conn.cursor().execute(query)   
    print(conn.insert_id())
    insertId = conn.insert_id()
    conn.commit()
    return jsonify({"status":"true","id":insertId})
  except Exception as e:
    print("error",e)
    return jsonify({"status":false})
  
  
def deleteItem(request):
  try:
    data = request.get_json()
    print(data)
    conn =  mysql.connection
    query = "DELETE FROM todo WHERE id = {}".format(data['itemId'])
    print(query)
    conn.cursor().execute(query)   
    conn.commit()
    return jsonify({"status":"true"})
  except Exception as e:
    print("error",e)
    return jsonify({"status":"false"})
