document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    var validUsername = "user"; 
    var validPassword = "password"; 

    if (username === validUsername && password === validPassword) {
       
        window.location.href = "index.html"
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

