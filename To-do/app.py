from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para permitir solicitudes desde el frontend
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean, default=False)

@app.route('/api/todos', methods=['GET'])
def get_todos():
    todos = Todo.query.all()
    return jsonify([{'id': todo.id, 'content': todo.content, 'completed': todo.completed} for todo in todos])

@app.route('/api/todos', methods=['POST'])
def add_todo():
    todo_content = request.json['content']
    new_todo = Todo(content=todo_content)

    try:
        db.session.add(new_todo)
        db.session.commit()
        return jsonify({'id': new_todo.id, 'content': new_todo.content, 'completed': new_todo.completed})
    except:
        return jsonify({'error': 'There was an issue adding your task'}), 500

@app.route('/api/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    todo_to_delete = Todo.query.get_or_404(id)

    try:
        db.session.delete(todo_to_delete)
        db.session.commit()
        return jsonify({'message': 'Task deleted'})
    except:
        return jsonify({'error': 'There was a problem deleting that task'}), 500

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
