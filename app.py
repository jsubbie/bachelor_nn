# import necessary libraries
import numpy as np

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
model = None
graph = None

def load_model():
    global model
    global graph
    model = keras.models.load_model("bachlorette.h5")
    graph = K.get_session().graph

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

# Query the database and send the jsonified results
@app.route("/bachelor", methods=["GET", "POST"])
def sendbachelor():
    if request.method == "POST":
    #   name = request.form.get("name")
        response_data={"success": True}
        request.get_data()
        name = request.form.get("name")
        age = request.form.get("age")
        occupation = request.form.get("occupation")
        hometown = request.form.get("hometown")
        weight = request.form.get("weight")
        eyecolor = request.form.get("eyeColor")
        haircolor = request.form.get("hairColor")

        return jsonify(response_data)

@app.route("/bachelor", methods=["GET", "POST"])
def sendbachelorette():
    if request.method == "POST":
        response_data={"success": True}
        request.get_data()
        name = request.form.get("name")
        age = request.form.get("age")
        occupation = request.form.get("occupation")
        hometown = request.form.get("hometown")
        weight = request.form.get("weight")
        eyecolor = request.form.get("eyeColor")
        haircolor = request.form.get("hairColor")
        pushups = request.form.get("pushups")
        pullups = request.form.get("pullups")

        return jsonify(response_data)

if __name__ == "__main__":
    app.debug=True
    app.run()