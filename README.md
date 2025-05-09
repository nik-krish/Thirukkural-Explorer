# Thirukkural Fetching Website

## Overview
The **Thirukkural Fetching Website** is a web application designed to retrieve and display Thirukkural verses from a MongoDB database. Users can explore the vast collection of couplets, understand their meanings, and navigate through different categories with ease.

![image](https://github.com/user-attachments/assets/d1cbfd93-e567-4c2e-9c4e-17eb6817acd0)

## Features
- Fetch Thirukkural verses dynamically from a MongoDB database
- User-friendly UI with seamless navigation
- Display translation and explanation of each couplet
- Responsive design for better accessibility across devices

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Bootstrap

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (running locally or on a cloud service)

### Steps to Run the Project
1. **Clone the repository**
   ```bash
   git clone https://github.com/nik-krish/Thirukkural-Explorer.git
   cd Thirukkural-Fetching-Website
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the MongoDB server** (if running locally)
   ```bash
   mongod
   ```
4. **Start the backend server**
   ```bash
   cd server
   node index.js
   ```
5. **Run the frontend**
   ```bash
   cd ../client
   npm start
   ```
6. Open the browser and visit `http://localhost:3000`

## API Endpoints
- **GET /kurals** - Fetch all Thirukkural verses
- **GET /kurals/:id** - Fetch a specific Thirukkural verse by ID

## Folder Structure
```
Thirukkural-Fetching-Website/
│── server/         # Backend files (Node.js, Express)
│── client/         # Frontend files (React.js)
│── database/       # MongoDB connection & scripts
│── public/         # Static files
│── README.md       # Project Documentation
```

## Contribution
Feel free to contribute! Fork the repository, make changes, and submit a pull request.

## License
This project is licensed under the MIT License.

---
By Nikhil Krishan
