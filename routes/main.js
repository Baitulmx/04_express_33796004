// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); // Root route/Home page, shows "Hello World!" 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>")); // About route, shows about information

router.get("/contact", (req, res) => res.send ("<h1>How to contact me</h1> <p>Email: sasla003@campus.goldsmith.ac.uk</p>")); // Contact route, shows contact information

router.get("/date", (req, res) => res.send (`<h1>The current time and date is: ${new Date().toLocaleString()}</h1>`)); // Date route, shows current date and time

// Regular /welcome route, I didn't know if the program would mark /welcome/:name as required or not, so I made both versions
router.get("/welcome", (req, res) => res.send("<h1>Welcome, User!</h1>"));

// Welcome route with a name parameter, formatted this way because of const username
router.get("/welcome/:name", (req, res) => res.send(`<h1>Welcome, ${req.params.name}!</h1>`)); //Gets the name from the URL

// Chain route using next()
router.get("/chain", 
  (req, res, next) => {  
    res.write("<h1>Chain Route Example</h1> <p>First chain says hello!</p>"); 
    next(); 
  }, 
  (req, res) => { 
    res.write("<p>Second chain says goodbye!</p>"); 
    res.end(); 
  }
);

// File route, serves an HTML file located in the public folder
const path = require("path"); // Import path module to handle file paths, also cross-platform compatible
router.get("/file", (req, res) => res.sendFile("a.html", { root: path.join(__dirname, "../public") })); 

// Export the router object so index.js can access it
module.exports = router;
