'use strict';

const express = require('express'),
        serveStatic = require('serve-static'),
        path = require('path');

    // Instantiate Express App
    const app = express();

    // Middleware
    app.use('/', serveStatic(path.join(__dirname, '/public')));

    // Serve Index
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    // Port
    const port = process.env.PORT || 5000;

    // Start Server
    app.listen(port, () => {
        console.log(`Server start on port ${port}...`);
    });