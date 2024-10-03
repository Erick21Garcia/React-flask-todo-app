# react-flask-todo-app
Aplicación de lista de tareas (to-do) desarrollada utilizando React para el frontend y Flask para el backend. La aplicación permite a los usuarios agregar, visualizar y eliminar tareas de manera sencilla. Utiliza Bootstrap para un diseño responsivo y atractivo.

## Características

- Agregar Tareas: Los usuarios pueden agregar nuevas tareas a la lista.
- Eliminar Tareas: Las tareas completadas o no deseadas pueden ser eliminadas.
- Visualización de Tareas: Las tareas se muestran en una lista clara y organizada.
- Diseño Responsivo: La aplicación se adapta a diferentes tamaños de pantalla utilizando Bootstrap.

## Tecnologías Utilizadas

- **Frontend**: React, Bootstrap
- **Backend**: Flask, Flask-RESTful, Flask-SQLAlchemy, Flask-CORS
- **Base de Datos**: SQLite

## Instalación

### Backend (Flask)

1. Navega a la carpeta del backend:
   ```bash
   cd To-do
   ```

2. Crea un entorno virtual y actívalo:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows usa `.\venv\Scripts\activate`
   ```

3. Instala las dependencias requeridas:
   ```bash
   pip install -r requirements.txt
   ```

4. Ejecuta la aplicación Flask:
   ```bash
   python app.py
   ```

### Frontend (React)

1. Navega a la carpeta del frontend:
   ```bash
   cd my-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación React:
   ```bash
   npm start
   ```

## Uso

- Abre tu navegador y ve a `http://localhost:3000` para acceder al frontend de React.
- El backend de Flask estará corriendo en `http://127.0.0.1:5000`.
