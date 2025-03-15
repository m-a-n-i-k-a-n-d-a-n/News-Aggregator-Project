require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const app = express();

// CORS configuration
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this line to parse JSON requests

const API_KEY = process.env.API_KEY;

// Function to fetch news
function fetchNews(url, res) {
    axios.get(url)
        .then(response => {
            if (response.data.totalResults > 0) {
                res.json({
                    status: 200,
                    success: true,
                    message: "Successfully fetched the data",
                    data: response.data
                });
            } else {
                res.json({
                    status: 200,
                    success: true,
                    message: "No more results to show"
                });
            }
        })
        .catch(error => {
            res.json({
                status: 500,
                success: false,
                message: "Failed to fetch data from the API",
                error: error.message
            });
        });
}

// Existing routes for news
app.get("/all-news", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 69;
    let page = parseInt(req.query.page) || 1;
    let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
});

// Other existing news routes...

// User registration route
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    // Read existing users
    fs.readFile('./users.json', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Server error" });
        }

        // Parse users or initialize if file is empty
        let users;
        try {
            users = JSON.parse(data);
        } catch {
            users = []; // If JSON parsing fails, start with an empty array
        }

        // Check if user already exists
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Add new user
        users.push({ username, password });
        fs.writeFile('./users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Server error" });
            }
            res.status(201).json({ message: "User registered successfully" });
        });
    });
});

// User login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Read existing users
    fs.readFile('./users.json', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Server error" });
        }

        let users;
        try {
            users = JSON.parse(data);
        } catch {
            return res.status(500).json({ message: "Server error: Invalid user data" });
        }

        // Check for user
        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Successful login
        res.status(200).json({ message: "Login successful" });
    });
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
