💻 CodeLearn - Advanced Software Education & Speed Typing Platform
CodeLearn is an interactive and modular web application aimed at helping users both increase 
their typing speed and learn software terminology (Linux, Cybersecurity, Coding, etc.). Unlike standard 
speed typing tools, it aims to instantly teach the user the function of every technical command they type.

🌐 Live Demo: rencberakman.com/hiztesti
🚀 Project Architecture & Technical Details
This project was built in accordance with modern web development standards using the "Separation of Concerns" principle.

Architecture: Modular JavaScript (ES6 Modules) structure, separating the controller and data layers.

Design: Glassmorphism UI aesthetics applied using CSS3 Variables, Flexbox, and Grid systems.

Data Structure: A JSON-based, expandable data set containing thousands of technical terms across 10 different categories.

Technologies: Vanilla JavaScript (Pure JS without frameworks), HTML5, CSS3.

⚠️ Important: Why Does It Require a Server?
The project features a modular system using import/export structures for code readability and maintainability. 
Due to the CORS (Cross-Origin Resource Sharing) security policies of modern browsers, ES6 modules cannot be run 
directly via the local file system (file://). A local server environment (XAMPP, VS Code Live Server, etc.) is 
required to test the project on your local computer.

📁 File Structure
Bash

CodeLearnPro/
│
├── index.html          
├── css/
│   └── style.css       
├── js/
│   ├── data.js         
│   ├── GameEngine.js   
│   └── main.js         
└── docs/               

🛠️ Installation and Running Instructions
You can use one of the following methods to run the project in your local environment:

Method 1: XAMPP / WAMP / Apache (Recommended)
Copy the project folder.

If XAMPP is installed, paste it into the C:\xampp\htdocs\ directory.

Start the Apache server from the XAMPP Control Panel.

Type the following address into your browser: http://localhost/CodeLearnPro/

Method 2: VS Code Live Server
Open the project with VS Code.

Click the "Go Live" button in the bottom right corner, or right-click index.html and select "Open with Live Server".

✨ Key Features
Contextual Learning: The function of every typed command is explained instantly at the bottom of the screen.

Extensive Curriculum: A wide range of categories from Linux Terminal to DevOps tools, and SQL to Cybersecurity.

Performance Analysis: A detailed success report based on accuracy rate and WPM at the end of the session.

Educational Documents: Academic documents regarding all analysis and design processes of the project are located in the docs/ folder.

✍️ Developer Note
CodeLearn was developed with the vision that a developer's typing speed should be coordinated with their speed of thought. 
This application improves not only your speed but also your technical vision.
