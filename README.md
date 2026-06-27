# 📋 Task Tracker

A full-stack Task Tracker web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Built as a technical assignment to demonstrate full-stack development skills.

## 🚀 Live Demo
- **Frontend:** https://task-tracker-liard-delta.vercel.app
- **Backend API:** https://task-tracker-backend-97ck.onrender.com

## 🎥 GitHub Repository
https://github.com/aakashsharmatech21-netizen/task-tracker

---

## ✨ Features

### Core Features
- ✅ Create, Read, Update & Delete Tasks (CRUD)
- 🎯 Priority levels — Low, Medium, High
- 📊 Status tracking — Pending, In Progress, Completed
- 📱 Fully Responsive UI (mobile + desktop)
- ⚡ Dynamic updates without page refresh

### Bonus Features
- 🔍 Filter tasks by Status & Priority
- 📅 Sort by Due Date or Priority
- ✔️ Mark tasks as Complete instantly
- 🔔 Toast notifications for all actions
- 📌 Summary cards showing task counts by status
- 🌐 Environment variables for secure config
- 🎨 Glassmorphism UI with gradient design

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Axios, React Toastify |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Deployment | Vercel (frontend), Render (backend) |

---

## 📁 Project Structure

```
task-tracker/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── TaskForm.js
│       │   ├── TaskCard.js
│       │   └── FilterBar.js
│       ├── App.js
│       ├── App.css
│       └── index.js
└── README.md
```

---

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create new task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

### Query Parameters (GET /api/tasks)
- `status` — Filter by Pending / In Progress / Completed
- `priority` — Filter by Low / Medium / High
- `sort` — Sort by dueDate or priority

---

## ⚙️ Local Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🚀 Deployment

- **Frontend** deployed on Vercel
- **Backend** deployed on Render
- **Database** hosted on MongoDB Atlas

---

## 👨‍💻 Developer

**Aakash Sharma**
- GitHub: [@aakashsharmatech21-netizen](https://github.com/aakashsharmatech21-netizen)
- LinkedIn: [linkedin.com/in/aakash-sharma21](https://linkedin.com/in/aakash-sharma21)
