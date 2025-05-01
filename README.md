# 🛒 ECOM BWMS

An e-commerce platform built using **Django (Backend)**, **React (Frontend)**, and **Tailwind CSS (Styling)**. It aims to deliver a responsive, modern shopping experience with fast performance and a clean architecture.

---

## 📁 File Structure

```
ECOM-BWMS/
│
├── runserver.sh # Shell script to run the server
├── runserver.ps1 # Shell script to run the server
│
├── backend/
│   ├── api/                 # Django REST API
│   ├── backend/             # Django settings and core
│   ├── db.sqlite3           # SQLite database
│   └── manage.py            # Django management script
│
├── docs/                    # Documentation
│
├── env/                     # Python virtual environment
│
├── frontend/
│   ├── node_modules/        # NPM dependencies
│   ├── public/              # Static assets
│   ├── src/                 # React components & pages
│   ├── index.html           # Entry HTML
│   ├── package.json         # NPM config
│   └── tailwind.config.js   # Tailwind CSS config
```

---

## 🚀 Features

- 🧩 Modular frontend with React
- 🎨 Responsive design using Tailwind CSS
- 🛠️ Django backend with REST API
- 💾 SQLite database for local dev
- 🔐 User authentication
- 🛍️ Product listing & filtering
- 🛒 Custom CRM

---

## ▶️ How to Run the Project

### 🔧 Backend (Django)

```bash
python -m venv env
source env/Scripts/activate    # On Windows use `env\Scripts\activate`
cd backend
pip install -r requirements.txt
python manage.py migrate # only if database changes
python manage.py runserver
```

### 🌐 Frontend (React)

```bash
cd frontend
npm install # if not already installed
npm run dev
```

### For run by builder

#### For Windows

```bash
## Allow script executions ONLY IF NEEDED
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
Press "Y" if prompted.
.\runserver.ps1 # run this to run the whole server
```

#### For linux & Mac

```bash
chmod +x runWEB.sh
./runserver.sh
```

---

## 👥 Contributors

- 📧 [mahdinislamohi@gmail.com](mailto:mahdinislamohi@gmail.com)
- 📧 [ashrafhossainsohan@gmail.com](mailto:ashrafhossainsohan@gmail.com)
- 📧 [mehedi90a@gmail.com](mailto:mehedi90a@gmail.com)

---

## 📚 Documentation

See the `/docs` folder for project architecture, contribution guidelines, and API references.

---
