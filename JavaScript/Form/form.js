function validateForm() {
  
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const DOB = document.getElementById("DOB").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  if (name === "") {
      alert("Name must be filled out");
      return false; 
  }

  // Email validation
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
  }

  // Password validation (must be at least 6 characters)
  if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
  }

  // If all validations pass
  return true;
}
