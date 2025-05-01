# 🛒 E-commerce UI Clone – Full Stack Application

This is a full-stack e-commerce web application that replicates the design and core functionality of the [reference site](https://edcenten0.github.io/Vite-E-commerce/). 
It includes user authentication, dynamic product listings from an external API, a shopping cart, and a mock checkout process.

## 📁 Project Structure
eComm/
├── frontend/         # React + Vite frontend with UI and authentication
├── backend/          # Node.js + Express backend with MongoDB authentication
└── README.md

## 🚀 Live Demo

- **Frontend:** [https://e-comm-eight-ebon.vercel.app/](https://e-comm-eight-ebon.vercel.app/)  
- **Backend:** [https://e-comm-api-phi.vercel.app/](https://e-comm-api-phi.vercel.app/)

## 👤 Test Credentials

- **Email:** `user@example.com`  
- **Password:** `user123`

## 🧰 Tech Stack

### Frontend:
- React + Vite
- React Router
- Bootstrap
- Platzi Fake Store API

### Backend:
- Node.js + Express
- MongoDB Atlas (cloud database)
- Joi (for request validation)
- CORS, `express.json()`
- `nodemon` for live development

## 🛠️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/siddhesh-kulkarni/eComm.git
cd eComm

### 2. Backend Setup
cd backend
npm install

Create a `.env` file in the `backend/` directory:
PORT=3009
MONGO_CONN="mongodb+srv://siddhesh0392:lynx0911@cluster0.jp2gf3x.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"


Start the backend server:
nodemon index.js

**Note:** Make sure `nodemon` is installed globally. Run `npm install -g nodemon` if needed.

### 3. Frontend Setup
cd ../frontend
npm install

Start the Vite development server:
npm run dev

## 🔐 Authentication

- Custom login/signup using the backend API.
- JWT-based authentication.
- Protected routes (cart, orders, etc.).

## 🎯 Features

- 📦 Fetch and display products using the Platzi Fake Store API
- 🔍 Product detail view
- 🛒 Add/remove items to/from cart
- 👤 User authentication (login/signup)
- 🧾 Mock checkout flow
- 📱 Responsive design for mobile and desktop

## 🌐 Deployment

- **Frontend:** Vercel  
- **Backend:** Vercel

## 🙋 Author

**Siddhesh Kulkarni**  
GitHub: [https://github.com/siddhesh-kulkarni](https://github.com/siddhesh-kulkarni)

## 📄 License

For educational and interview purposes only.
