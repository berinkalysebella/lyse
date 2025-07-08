document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("SignupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("newusername").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("newpassword").value;

    // une démo on  pourrais sauvegarder dans localStorage ou envoyer à un serveur
    alert("Account created for " + username + " with email " + email);

    // Rediriger vers la page de login
    window.location.href = "login.html";
  });
});