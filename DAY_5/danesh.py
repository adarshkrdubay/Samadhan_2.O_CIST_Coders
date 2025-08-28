from flask import Flask, jsonify

app = Flask(__name__)

# Sample student data
students = [
    {"id": 1, "name": "Adarsh", "age": 20, "grade": "A"},
    {"id": 2, "name": "Danesh", "age": 22, "grade": "B"},
    {"id": 3, "name": "Sakshi", "age": 21, "grade": "A+"}
]

# Default route
@app.route('/')
def home():
    return "Welcome to the Student API (Flask)"

# API to return list of students
@app.route('/api/students', methods=['GET'])
def get_students():
    return jsonify(students)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
