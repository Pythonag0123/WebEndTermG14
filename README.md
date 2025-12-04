# 📢 Complaint Management System

### **WEB END TERM PROJECT — GROUP 14**

A minimal, functional Complaint Management System built under strict time constraints. The system allows users to file complaints, admins to assign them, and agents to resolve them.

---

## 👥 Team Members

* **Khushi Gangwar (Captain)** — 2315510100 — AIML
* Aditya Maheshwari — 2315000123 — CSE
* Kinjal Gupta — 2315001134 — CSE
* Priyanshu Nayak — 2315510154 — AIML
* Priya Goyal — 2315510151 — AIML

---

## ⚡ Workload Division (Minimal — 2 Hour Build)

### 🟦 Member 1 — User UI (Frontend)

**Branch:** `feature-user-ui`

* Page: **File Complaint** (name, category, description, priority, optional file)
* Page: **My Complaints** (list complaints using `GET /complaints?role=user`)
* Basic alignment only; no heavy CSS.

---

### 🟥 Member 2 — Admin UI (Frontend)

**Branch:** `feature-admin-ui`

* Table of all complaints (`GET /complaints`)
* Dropdown: **Assign to Agent** (2 hardcoded agents)
* Button → `PATCH /complaints/:id/assign`

---

### 🟩 Member 3 — Agent UI (Frontend)

**Branch:** `feature-agent-ui`

* Fetch assigned tickets (`GET /complaints?agentId=1`)
* Show list
* Button: **Mark as Resolved** → `PATCH /complaints/:id/status`

---

### 🟧 Member 4 — Core Backend

**Branch:** `feature-backend`

* `POST /complaints`
* `GET /complaints` (role/user/agent filtering)
* `PATCH /complaints/:id/assign`
* `PATCH /complaints/:id/status`
* Optional: file upload route
* Use in-memory DB or SQLite

**Sample Complaint Object:**

```
{
  "id": 1,
  "userName": "Aster",
  "category": "IT",
  "priority": "High",
  "description": "Wifi not working",
  "status": "New",
  "assignedTo": null
}
```

---

### 🟪 Member 5 — Repo Setup + Integration + Testing

**Branch:** `feature-setup`

* Create repo + folder structure
* Enable CORS + backend-frontend connection
* Add sample categories (IT, HR, Sanitation)
* Test all backend routes
* Assist frontend members with API calls
* Merge PRs + resolve conflicts

---


## 🧪 Demo Flow (For Judges)

1. User files complaint
2. Admin assigns to agent
3. Agent resolves ticket
4. User sees updated status

---



# Complaint Management System (CMS)

A centralized digital platform for recording, assigning, tracking, and resolving complaints inside an organization. It ensures transparency, faster resolutions, and role‑based accountability.

---

## ✨ Features

- Role‑based Access (User, Agent, Admin)
- Complaint Ticket Creation
- Status Tracking with Audit History
- File Attachments (Images/PDF)
- Department‑Based Ticket Assignment
- Comment/Conversation Thread
- Priority Levels (Low / Medium / High)
- Admin Analytics Dashboard (Pie Chart)
- Secure Login with JWT Auth
- REST APIs (Backend) + React UI (Frontend)
- Clean Ticket Lifecycle:  
  `NEW → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED`

---

## 📌 Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React (Vite), Axios, React Router, Recharts |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Auth | JWT + bcrypt |
| File Storage | Multer (Local Uploads) |
| Styles | Basic CSS |
| Others | CORS, dotenv |

---

# 🏗 Folder Structure

complaint-management-system/
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── .env.example
│ ├── config/
│ │ └── db.js
│ ├── middleware/
│ │ ├── authMiddleware.js
│ │ └── errorMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Complaint.js
│ │ ├── Category.js
│ │ └── Comment.js
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── complaintController.js
│ │ ├── adminController.js
│ │ └── agentController.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── complaintRoutes.js
│ │ ├── adminRoutes.js
│ │ └── agentRoutes.js
│ ├── uploads/
│ └── sql/
│ └── schema.sql
│
└── frontend/
├── package.json
├── vite.config.js
├── index.html
└── src/
├── main.jsx
├── App.jsx
├── api/
│ └── axiosClient.js
├── context/
│ └── AuthContext.jsx
├── components/
│ ├── Navbar.jsx
│ ├── ProtectedRoute.jsx
│ ├── TicketCard.jsx
│ └── FilterBar.jsx
└── pages/
├── Login.jsx
├── Register.jsx
├── UserDashboard.jsx
├── NewComplaint.jsx
├── ComplaintDetail.jsx
├── AgentDashboard.jsx
├── AdminDashboard.jsx
└── NotFound.jsx

yaml
Copy code

---

# 🔁 Workflow

## Complaint Lifecycle

NEW → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED

makefile
Copy code

Optional:

RESOLVED → IN_PROGRESS (Reopen)

yaml
Copy code

---

## Complete Working Flow

### 1️⃣ User Authentication
- User registers or logs in
- Backend verifies credentials
- JWT token generated & returned
- Token used in all protected API calls

---

### 2️⃣ User Files a Complaint
- Select category & priority
- Type issue details
- Upload evidence (optional)
- Ticket created with status **NEW**
- Attachment stored in backend

---

### 3️⃣ Admin Assignment
- Admin views all NEW tickets
- Assigns ticket to suitable agent
- Ticket becomes **ASSIGNED**

---

### 4️⃣ Agent Action
- Agent sees tickets of their department
- Starts work → moves to **IN_PROGRESS**
- Adds comments, notes, progress updates
- When solved → marks **RESOLVED**

---

### 5️⃣ User Verification
- User reviews resolution
- If satisfied → **CLOSED**
- If not satisfied → reopen (back to **IN_PROGRESS**)

---

### 6️⃣ Analytics
Admin dashboard shows:
- Category‑wise ticket count (Pie chart)
- Problem trends
- Frequent issue sources

---

# 🧠 State Management Rules

| Valid Transition | Meaning |
|------------------|--------|
| NEW → ASSIGNED | Admin assigns ticket |
| ASSIGNED → IN_PROGRESS | Agent starts work |
| IN_PROGRESS → RESOLVED | Agent completes task |
| RESOLVED → CLOSED | User accepts |
| RESOLVED → IN_PROGRESS | Issue reopened |

❌ Not Allowed:
- NEW → RESOLVED  
- ASSIGNED → CLOSED  
- CLOSED → Assigned again  

---

# 🗂 Database Schema

Tables:
- `users`
- `categories`
- `complaints`
- `comments`

Relationship:
- One user → many complaints  
- One complaint → many comments  
- One category → many complaints  

SQL is present in:
backend/sql/schema.sql

yaml
Copy code

---

# 🧑‍💻 Roles

| Role | Permissions |
|------|------------|
| **USER** | File complaints, comment, view status, give feedback, reopen |
| **AGENT** | Update status, add comments, resolve tasks |
| **ADMIN** | Assign tickets, view all complaints, run analytics |

---

# 🚀 Setup Guide

## Backend

```sh
cd backend
npm install
cp .env.example .env
Configure DB in .env

Create database:

sql
Copy code
Run sql/schema.sql
Start server:

sh
Copy code
npm run dev
Frontend
sh
Copy code
cd frontend
npm install
npm run dev
App URL:

arduino
Copy code
http://localhost:5173
🔐 Security Highlights
JWT‑based route protection

Role‑based authorization

SQL Injection‑safe queries

Comment logs for transparency

🪟 Admin Analytics (Example Outputs)
Pie chart for categories

Ticket count by status

SLA monitoring (long pending cases)

✍️ Team Member Work Distribution
Member	Responsibilities
Member 1	Backend Setup, DB Config, Schema, Server
Member 2	Auth System, User Model, Login/Registration
Member 3	Complaint Modules, Categories & Comments
Member 4	Agent & Admin Controllers + Routes
Member 5	Complete Frontend (React UI & API Integration)

🧪 Testing
✔ API Tested via Postman
✔ File Upload Validation
✔ Unauthorized Access Blocked
✔ State Transition Rules Verified



