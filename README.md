# 04_express_12345678

Overview
This project is part of Lab 4 for the Dynamic Web Applications module.  
It demonstrates the use of the Express framework in Node.js to create a simple web application with multiple routes.

The application includes several routes such as `/`, `/about`, `/contact`, `/date`, `/welcome`, `/chain`, and `/file`.  
Deployed onto goldsmith virtual server.

---

Features
- Built with Node.js and Express
- Supports multiple routes:
  - `/` – Home page
  - `/about` – About page
  - `/contact` – Contact information
  - `/date` – Displays the current date and time
  - `/welcome` – Displays a welcome message
  - `/chain` – Demonstrates route chaining using `next()`
  - `/file` – Sends an external HTML file to the browser
- Organised routing using a `routes` folder
- Help deployment using `.gitignore` for `node_modules`