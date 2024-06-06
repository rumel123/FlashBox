const express = require('express');
const cors = require('cors');
const path = require('path');
const fbtRoutes = require('./src/user/routes');

//edited


const app = express();
const port = 3000;

// CORS Middleware for handling cross-origin requests
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Static files middleware (assuming your React build is in 'frontend/build')
app.use(express.static(path.join(__dirname, 'frontend/build')));

// API Routes
app.use('/api/v1/fbt', fbtRoutes);

// Additional headers for CORS can be set universally here
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // adjust in production
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve the React application's index.html for all other routes (SPA behavior)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
