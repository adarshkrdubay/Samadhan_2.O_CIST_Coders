from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to the Home Page of samadhan 2.0"

@app.route("/hello")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)
