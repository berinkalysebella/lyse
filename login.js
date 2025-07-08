// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   if (username === "berinka" && password === "1234") {
//     alert("Login successful!");
//     window.location.href = "lessons.html";
//   } else {
//     alert("Invalid username or password");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "berinka" && password === "1234") {
      alert("Login successful!");
      window.location.href = "lessons.html";
    } else {
      alert("Invalid username or password");
    }
  });
});