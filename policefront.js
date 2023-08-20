function openLoginPopup() {
  var loginWindow = window.open("", "LoginWindow", "width=400,height=300,resizable=no,scrollbars=no");
  loginWindow.document.write("<div class='popup'><h2>Login</h2>");
  loginWindow.document.write("<label for='username'>Username:</label>");
  loginWindow.document.write("<input type='text' id='username' name='username'><br>");
  loginWindow.document.write("<label for='password'>Password:</label>");
  loginWindow.document.write("<input type='password' id='password' name='password'><br>");
  loginWindow.document.write("<button onclick='login()'>Submit</button></div>");

  loginWindow.login = function () {
    var username = loginWindow.document.getElementById('username').value;
    var password = loginWindow.document.getElementById('password').value;
    // Here, you can implement the login logic using an API or other server-side validation.
    // For demonstration purposes, we'll store the username in localStorage and open dashboard.html.
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
    loginWindow.close();
  };
}

function openSignupPopup() {
  var signupWindow = window.open("", "SignupWindow", "width=400,height=300,resizable=no,scrollbars=no");
  signupWindow.document.write("<div class='popup'><h2>Sign Up</h2>");
  signupWindow.document.write("<label for='name'>Name:</label>");
  signupWindow.document.write("<input type='text' id='name' name='name'><br>");
  signupWindow.document.write("<label for='email'>Email:</label>");
  signupWindow.document.write("<input type='email' id='email' name='email'><br>");
  signupWindow.document.write("<label for='password'>Password:</label>");
  signupWindow.document.write("<input type='password' id='password' name='password'><br>");
  signupWindow.document.write("<button onclick='signup()'>Submit</button></div>");

  signupWindow.signup = function () {
    var name = signupWindow.document.getElementById('name').value;
    var email = signupWindow.document.getElementById('email').value;
    var password = signupWindow.document.getElementById('password').value;
    // Here, you can implement the signup logic using an API or other server-side handling.
    // For demonstration purposes, we'll store the user details in localStorage and open dashboard.html.
    var userDetails = {
      name: name,
      email: email,
      password: password
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    window.location.href = "dashboard.html";
    signupWindow.close();
  };
}
