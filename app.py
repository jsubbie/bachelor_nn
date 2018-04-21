
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
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
      name = request.form["Name"]
      age = request.form["Age"]
      occupation = request.form["Occupation"]
      hometown = request.form["Hometown"]
      state = request.form["State"]
      height = request.form["Height (Inches)"]
      weight = request.form["Weight"]
      hairColor = request.form["Hair Color"]

      #contestant = Contestant(name=name, lat=lat, lon=lon)

      return redirect("/", code=302)

    return render_template("form.html")