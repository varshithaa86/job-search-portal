// ===============================
// JobConnect JavaScript
// ===============================

// Apply Job
function applyJob() {
    alert("✅ Application Submitted Successfully!");
}

// Login
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email and Password.");
        return;
    }

    alert("✅ Login Successful!");
}

// Register
function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("✅ Registration Successful!");
}

// Contact Page
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
    } else {
        alert("Message Sent Successfully!");
    }
}

// Search Jobs
function searchJobs() {

    let job = document.getElementById("search").value;

    if (job === "") {
        alert("Please enter a job title.");
    } else {
        alert("Searching for: " + job);
    }
}
function register() {

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if(name==="" || email==="" || password==="" || confirm===""){
        alert("Please fill all fields.");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match.");
        return;
    }

    alert("Registration Successful!");

    window.location.href = "login.html";
}