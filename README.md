# 📟 Calculator API

A simple and lightweight **Calculator API** built with **Node.js** and **Express**, capable of performing basic arithmetic operations via HTTP endpoints.  
Perfect for learning API development or using as a base for more complex projects.

---

## 🎥 Demo

YouTube Video: https://youtu.be/xSksIZ9IClQ

---

## 🚀 Features

- Addition ➕
- Subtraction ➖
- Multiplication ✖️
- Division ➗
- RESTful API design
- Minimal and easy-to-read code structure

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **JavaScript (ES6)** – Core language

---

## 📂 Project Structure
 ```
calculator_api/
│
├── server.js # Main server file
├── package.json # Dependencies & scripts
└── README.md # Documentation
```

---

## ⚡ Installation & Usage

1. **Clone the repository**
   ```
   git clone https://github.com/Rakesh12531/calculator_api.git
   cd calculator_api
   ```
2. **Install dependencies**

```
npm install
```
3. **Run the server**
```
node server.js
```

4. **Access the API**
```
Server runs on: http://localhost:3000
```

---

## 📌 API Endpoints

- Method	Endpoint	Description	Example Request
```
GET	/add?num1=5&num2=3	Add two numbers	/add?num1=5&num2=3
GET	/subtract?num1=5&num2=3	Subtract num2 from num1	/subtract?num1=5&num2=3
GET	/multiply?num1=5&num2=3	Multiply two numbers	/multiply?num1=5&num2=3
GET	/divide?num1=6&num2=3	Divide num1 by num2	/divide?num1=6&num2=3
```

- Example Response:
  ```
  {
  "result": 8
  }
  ```
  ---

## 📧 Contact

**Rakesh Raj S.**
**GitHub | LinkedIn | Email**
  
