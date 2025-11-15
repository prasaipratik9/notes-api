<div align="center">

# 📝 Notes API

A **REST API** built with **Express.js** and **MongoDB Atlas** for creating, reading, updating, and deleting notes with persistent database storage.

**[GitHub Repository](https://github.com/prasaipratik9/notes-api)**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

</div>

---

## 🚀 Features

- ➕ **Create Notes** – Add notes with title, content, and auto-generated timestamps
- 📖 **Read Notes** – Fetch all notes or retrieve a single note by ID
- 🗑️ **Delete Notes** – Remove notes from the database
- 💾 **MongoDB Persistence** – Data stored permanently in MongoDB Atlas
- ✅ **Input Validation** – Title is required, returns 400 error if missing
- 🛡️ **Error Handling** – Proper HTTP status codes (200, 201, 404, 500)
- 🧪 **Postman Ready** – Fully testable REST API

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|----------|
| 🟢 **Node.js** | JavaScript runtime environment |
| ⚡ **Express.js** | Web framework for routing & middleware |
| 🍃 **MongoDB Atlas** | Cloud database for persistent storage |
| 🔐 **dotenv** | Environment variable management |
| 📮 **Postman** | API testing & documentation |

---

## 🪄 Getting Started

### 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)
- Postman (optional, for testing)

### ⚙️ Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/prasaipratik9/notes-api.git

# 2️⃣ Move into the project directory
cd notes-api

# 3️⃣ Install dependencies
npm install
```

### 🔑 Environment Setup

Create a `.env` file in the project root:

```
MONGODB_URI=mongodb+srv://[username]:[password]@[cluster].mongodb.net/notes-api?retryWrites=true&w=majority
```

Replace `[username]`, `[password]`, and `[cluster]` with your MongoDB Atlas credentials.

### ▶️ Running the Server

```bash
node index.js
```

Server runs on `http://localhost:5000`

You should see:
```
Listening at http://localhost:5000
Connected to MongoDB
```

---

## 📡 API Endpoints

### 1️⃣ Get All Notes

```
GET /notes
```

**Response (200 OK):**
```json
[
  {
    "_id": 1763176429814,
    "title": "My First Note",
    "content": "This is stored in MongoDB",
    "createdAt": "2025-11-15T03:13:49.814Z"
  }
]
```

---

### 2️⃣ Get Single Note

```
GET /notes/:id
```

**Parameters:** `id` (MongoDB ObjectId)

**Response (200 OK):**
```json
{
  "_id": 1763176429814,
  "title": "My First Note",
  "content": "This is stored in MongoDB",
  "createdAt": "2025-11-15T03:13:49.814Z"
}
```

**Error (404 Not Found):**
```json
{
  "error": "Note not found"
}
```

---

### 3️⃣ Create Note

```
POST /notes
```

**Request Body:**
```json
{
  "title": "My Note",
  "content": "Optional note content"
}
```

**Response (201 Created):**
```json
{
  "message": "Note created",
  "note": {
    "_id": 1763176429814,
    "title": "My Note",
    "content": "Optional note content",
    "createdAt": "2025-11-15T03:13:49.814Z"
  }
}
```

**Validation:**
- `title` is **required** (returns 400 if missing)
- `content` is optional (defaults to empty string)

**Error (400 Bad Request):**
```json
{
  "error": "Title is required"
}
```

---

### 4️⃣ Delete Note

```
DELETE /notes/:id
```

**Parameters:** `id` (MongoDB ObjectId)

**Response (200 OK):**
```json
{
  "message": "Note deleted successfully",
  "deletedId": 1763176429814
}
```

**Error (404 Not Found):**
```json
{
  "error": "Note not found"
}
```

---

## 🧪 Testing with Postman

### 1️⃣ Create a Note
- **Method:** POST
- **URL:** `http://localhost:5000/notes`
- **Body (JSON):**
```json
{
  "title": "My Test Note",
  "content": "Testing the API"
}
```

### 2️⃣ Get All Notes
- **Method:** GET
- **URL:** `http://localhost:5000/notes`

### 3️⃣ Get Single Note
- **Method:** GET
- **URL:** `http://localhost:5000/notes/[_id]`
- Replace `[_id]` with the ID from step 1

### 4️⃣ Delete Note
- **Method:** DELETE
- **URL:** `http://localhost:5000/notes/[_id]`

---

## 🧠 What I Learned

🔄 **REST API Principles** → GET, POST, DELETE with proper HTTP methods  
🗂️ **MongoDB Integration** → Cloud database connection & querying  
⚙️ **Async/Await** → Handling asynchronous database operations  
🛡️ **Error Handling** → try/catch blocks & HTTP status codes  
📦 **Middleware** → express.json() for parsing JSON bodies  
🔐 **Environment Variables** → Secure credential management with dotenv  
🧭 **Git Workflow** → Semantic commits & version control  

---

## 🗄️ Database Schema

**Collection:** `notes`

```javascript
{
  _id: ObjectId,           // Auto-generated by MongoDB
  title: String,           // Required
  content: String,         // Optional
  createdAt: Date          // Auto-generated timestamp
}
```

---

## 🌟 Future Improvements

- [ ] ✏️ Update (PUT) endpoint to edit existing notes
- [ ] 🔍 Search functionality by title or content
- [ ] 📌 Add tags/categories to notes
- [ ] 🎨 Add note colors or priority levels
- [ ] 👤 User authentication & multi-user support
- [ ] 📤 Export notes to JSON/PDF
- [ ] 🔔 Note reminders/notifications

---

## 📚 Project Context


This API solidifies MongoDB + Express fundamentals before tackling full-stack projects.

---

## 📜 License

🪪 This project is open source and available under the MIT License.

---

<div align="center">

**Last Updated:** November 15, 2025

</div>