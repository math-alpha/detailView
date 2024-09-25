import os

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
db = SQLAlchemy(app)

# Mock data (in a real app, you'd fetch this from a database)
exam_data = {
    "examTitle": "Sample Mathematics Exam",
    "examMeta": {
        "duration": 90,
        "passingScore": 70,
        "subject": "Mathematics"
    },
    "questions": [
        {
            "id": "q1",
            "type": "single-choice",
            "questionText": "What is the derivative of \\( f(x) = x^2 \\)?",
            "options": [
                {"id": "a", "text": "\\( 2x \\)"},
                {"id": "b", "text": "\\( x^2 \\)"},
                {"id": "c", "text": "\\( x \\)"},
                {"id": "d", "text": "\\( 2 \\)"}
            ],
            "correctOptionIds": ["a"],
            "metadata": {
                "difficulty": "medium",
                "topic": "Calculus",
                "marks": 5
            }
        },
        {
            "id": "q2",
            "type": "multiple-answer",
            "questionText": "Select all the prime numbers from the options below:",
            "options": [
                {"id": "a", "text": "2"},
                {"id": "b", "text": "3"},
                {"id": "c", "text": "4"},
                {"id": "d", "text": "5"},
                {"id": "e", "text": "6"}
            ],
            "correctOptionIds": ["a", "b", "d"],
            "metadata": {
                "difficulty": "easy",
                "topic": "Number Theory",
                "marks": 5
            }
        },
        {
            "id": "q3",
            "type": "short-answer",
            "questionText": "Solve for \\( x \\) in the equation \\( 3x + 5 = 20 \\).",
            "metadata": {
                "difficulty": "easy",
                "topic": "Algebra",
                "marks": 5
            }
        },
        {
            "id": "q4",
            "type": "long-answer",
            "questionText": "Explain the Pythagorean theorem and provide an example of how it can be applied in real-world situations.",
            "metadata": {
                "difficulty": "medium",
                "topic": "Geometry",
                "marks": 10
            }
        },
        {
            "id": "q5",
            "type": "single-choice",
            "questionText": "What is the integral of \\( f(x) = \\cos(x) \\) with respect to \\( x \\)?",
            "options": [
                {"id": "a", "text": "\\( \\sin(x) + C \\)"},
                {"id": "b", "text": "\\( -\\sin(x) + C \\)"},
                {"id": "c", "text": "\\( \\cos(x) + C \\)"},
                {"id": "d", "text": "\\( -\\cos(x) + C \\)"}
            ],
            "correctOptionIds": ["a"],
            "metadata": {
                "difficulty": "medium",
                "topic": "Calculus",
                "marks": 5
            }
        },
        {
            "id": "q6",
            "type": "multiple-answer",
            "questionText": "Which of the following statements are true about the function \\( f(x) = x^2 \\)?",
            "options": [
                {"id": "a", "text": "It is an even function."},
                {"id": "b", "text": "It has a minimum at \\( x = 0 \\)."},
                {"id": "c", "text": "It is increasing for all real numbers."},
                {"id": "d", "text": "Its graph is a parabola opening upwards."}
            ],
            "correctOptionIds": ["a", "b", "d"],
            "metadata": {
                "difficulty": "medium",
                "topic": "Functions",
                "marks": 5
            }
        },
        {
            "id": "q7",
            "type": "short-answer",
            "questionText": "What is the sum of the interior angles of a hexagon in degrees?",
            "metadata": {
                "difficulty": "easy",
                "topic": "Geometry",
                "marks": 5
            }
        },
        {
            "id": "q8",
            "type": "long-answer",
            "questionText": "Discuss the concept of limits in calculus and explain how it leads to the definition of the derivative.",
            "metadata": {
                "difficulty": "hard",
                "topic": "Calculus",
                "marks": 10
            }
        }
    ]
}


@app.route('/api/exam', methods=['GET'])
def get_exam():
    return jsonify(exam_data)

@app.route('/api/submit', methods=['POST'])
def submit_exam():
    responses = request.json  # This should be a dictionary of {questionId: answer}
    # Process responses
    score = calculate_score(responses)
    result = {
        "message": "Exam submitted successfully",
        "score": score
    }
    return jsonify(result), 200

def calculate_score(responses):
    total_score = 0
    for question in exam_data['questions']:
        qid = question['id']
        if question['type'] in ['single-choice', 'multiple-answer']:
            correct = set(question['correctOptionIds'])
            user_answer = set(responses.get(qid, []))
            if correct == user_answer:
                total_score += question['metadata']['marks']
        elif question['type'] in ['short-answer', 'long-answer']:
            # For MVP, you can skip or implement simple keyword checking
            pass
    return total_score

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
