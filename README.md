# Course Selling App – Backend

This is the backend service for a **Course Selling Platform** where **admins** can create and manage courses and **users** can browse and purchase them.  
Built with **Node.js, Express, MongoDB**, following clean and scalable backend practices.

---

## 🚀 Features

### 👤 Admin
- Admin signup & login
- Create and manage courses
- Secure password storage using hashing

### 👥 User
- User signup & login
- Browse available courses
- Purchase courses

---

## 🧠 Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB + Mongoose** – Database & ODM  
- **Zod** – Input validation  
- **bcrypt** – Password hashing  
- **JWT** – Authentication & authorization  

---

## 📁 Project Structure

backend/
├── routes/
│ ├── admin.js
│ ├── user.js
│ └── course.js
├── models/
│ ├── Admin.js
│ ├── User.js
│ └── Course.js
├── middleware/
│ └── auth.js
├── db.js
├── index.js
└── README.md


---

## 🔐 Authentication Flow

- Passwords are hashed using **bcrypt**
- JWT tokens are issued on successful login
- Protected routes use authentication middleware
- Role-based access control for admins and users

---

## 🧪 API Endpoints (Sample)

### Admin Routes
- `POST /admin/signup`
- `POST /admin/login`
- `POST /admin/course`

### User Routes
- `POST /user/signup`
- `POST /user/login`
- `GET /courses`
- `POST /courses/:courseId/purchase`

---

## ⚙️ Setup & Run

```bash
git clone <repo-url>
cd backend
npm install
npm start
