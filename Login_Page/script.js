function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "testuser" && password === "password123") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid credentials";
        message.style.color = "red";
    }
}
