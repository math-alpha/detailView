from app import db, app_context

class UserResponse(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.String(50))
    response = db.Column(db.Text)

# Create tables
with app_context():
    db.create_all()
