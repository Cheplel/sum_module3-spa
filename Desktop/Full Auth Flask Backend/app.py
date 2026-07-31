from ast import Return
from turtle import title
from unittest import enterModuleContext

from flask import request, jsonify, session

from models import JournalEntry

@app.post("/signup", methods = ["POST"])
def signup():
    data = request.get_json()


    existing_user = User.query.filter_by(username=data["username"]).first()
    if existing_user:
        return jsonify({"error": "Username already exists"}), 400

    user = User(
        username=data["username"],
        email=data["email"]
    )

    user.set_password(data["password"])

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201


@app.route("/login", methods = ["POST"])
def login():
    username = request.json['username']
    user= User.query.filter_by(username=username).first()

    if user:
        session['user_id'] = user.id
        return jsonify({"message": "Welcome, {user.username}!"}), 200
    else:
        return jsonify({"error": "User not found"}), 404



#Creating journal entry
@app.route("/jorunal", methods = "POST")
def create_entry():
    user_id = get_id()
    entry = JournalEntry(
        title=request.json['title'],
        content=request.json['content'],
    )
    db.session.add(entry)
    db.session.commit()

    return journal_entry_schema.dump(entry), 201

#Reading journal entries
@app.route("/journals", methods = "GET")
def get_entries():
    user_id = get_id()
    entries = entries.query.filter_by(entries=entries).all()
    return JournalEntry_schema.dump(entry), 201

#Updating journal entry
@app.route("/journals/<int:id>", methods = "PATCH")
def update_entry(id):
    user_id = get_jwt_id()
    entry = JournalEntry.query.filter_by(id=id, user_id=user_id).first()

    if entry is None:
        return {"error": "Journal entry not found!"}, 404

    db.session.update(entry)
    db.session.commit()

    return {"message": "Journal entry updated"}, 200

#Deleting a journal entry
@app.route("/journals/<int:id>", methods = "DELETE")
def delete_entry(id):
    user_id = get_jwt_identity()
    entry = JournalEntry.query.filter_by(id=id, user_id=user_id).first()

    if entry is None:
        return {"error": "Journal entry not found!"}, 404

    db.session.delete(entry)
    db.session.commit()

    return {"message": "Journal entry deleted successfully!"}, 200


 



    
