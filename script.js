// Registration Success
function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (!username || !password) {
    alert("Please enter username and password.");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("User already exists.");
    return;
  }

  localStorage.setItem(username, JSON.stringify({ password }));
  alert("Registered Successfully!");
}

// Login Success
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem(username));

  if (!user || user.password !== password) {
    alert("Invalid username or password.");
  } else {
    alert("Login Successful!");
    // You can redirect after login if needed
    // window.location.href = "dashboard.html";
  }
}
