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

course-selling-app/
├── middlewares/
│ ├── admin.js # Admin authentication middleware
│ └── user.js # User authentication middleware
│
├── routes/
│ ├── admin.js # Admin routes (signup, login, course creation)
│ ├── user.js # User routes (signup, login, purchases)
│ └── course.js # Course-related routes
│
├── node_modules/
│
├── .env # Environment variables
├── .env.example # Sample environment variables
├── .gitignore
├── db.js # Database connection
├── index.js # App entry point
├── package.json
├── package-lock.json
└── README.md

---


## 🔐 Authentication & Authorization

- Passwords are hashed using **bcrypt**
- JWT tokens are issued on successful login
- Middleware protects admin and user routes
- Role-based access control enforced via middleware

---

## 🧪 API Endpoints (Sample)

### Admin
- `POST /admin/signup`
- `POST /admin/login`
- `POST /admin/course`

### User
- `POST /user/signup`
- `POST /user/login`
- `GET /courses`
- `POST /courses/:courseId/purchase`

---

## ⚙️ Setup & Run

```bash
git clone <repo-url>
cd course-selling-app
npm install
npm start