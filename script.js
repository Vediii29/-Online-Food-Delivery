document.addEventListener("DOMContentLoaded", () => {
  let user = localStorage.getItem("loggedInUser");
  let authLink = document.getElementById("auth-link");

  if (user) {
      authLink.innerText = "🚪 Logout";
      authLink.href = "#";
      authLink.onclick = function () {
          localStorage.removeItem("loggedInUser");
          alert("Logged out successfully!");
          location.reload();
      };
  }
});
