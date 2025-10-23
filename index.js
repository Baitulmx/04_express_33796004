// Set up express
const express = require("express"); // Import express module
const app = express(); // Create an express application to access all our methods
const port = 8000; // Define a port number to listen for HTTP requests

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);



// Start listening for HTTP requests
// When the server is running, log a message to the console
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
