from flask import Flask,redirect, url_for, request ,jsonify
from app import mysql

def homeController():
  try:
    data = {}
    conn =  mysql.connection.cursor()
    conn.execute("SELECT * FROM todo")
    data['list']=conn.fetchall()
    conn.execute("SELECT * FROM bucket")
    data['bucket']=conn.fetchall()
    return jsonify({"status":"true","data":data})
    

  except Exception as e:
    print("error",e)
    return jsonify({"status":"false"})
  
  
def insertList(request):
  try:
    data = request.get_json()
    conn =  mysql.connection
    query = "INSERT INTO todo (DESCRIPTION,bucketid) VALUES ('{}',{})".format(data['desc'],data["bucketId"])
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
  
  
def updateItem(request):
  try:
    data = request.get_json()
    print(data)
    conn =  mysql.connection
    query = "UPDATE todo SET description = '{}' , ischecked = '{}' WHERE id = {}".format(data['desc'],str(data['mDone']).lower(),data['itemId'])
    print(query)
    conn.cursor().execute(query)   
    conn.commit()
    return jsonify({"status":"true"})
  except Exception as e:
    print("error",e)
    return jsonify({"status":"false"})
