# http://127.0.0.1:5000/api/v1.0/searchbyhobby/Football

import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///nfl.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Receiving = Base.classes.receiving

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/all<br/>"
        f"/api/v1.0/searchbyname/<name><br/>"
        f"/api/v1.0/searchbyhobby/<hobby>"
    )


@app.route("/api/v1.0/all")
def names():
    session = Session(engine)
    results = session.query(Receiving).all()
    output = [{"name": x.name, "touchdowns": x.touchdowns} for x in results]
    session.close()
    return jsonify(output)


@app.route("/api/v1.0/searchbyname/<name>")
def search_by_name(name):
    session = Session(engine)
    print(name)
    results = session.query(Receiving).filter(Receiving.name==name).all()
    output = [{"name": x.name, "touchdowns": x.touchdowns} for x in results]
    session.close()
    return jsonify(output)


# @app.route("/api/v1.0/searchbyhobby/<hobby>")
# def search_by_hobby(hobby):
#     session = Session(engine)
#     results = session.query(Hobby).filter(Hobby.hobby==hobby).all()
#     output = [{"name": x.name, "hobby": x.hobby} for x in results]
#     session.close()
#     return jsonify(output)


if __name__ == '__main__':
    app.run(debug=True)
