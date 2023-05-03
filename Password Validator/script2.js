function check() {
    const password = document.getElementById("input").value;
    const lengthIcon = document.getElementById("length");
    const lowerIcon = document.getElementById("lower");
    const upperIcon = document.getElementById("upper");
    const numberIcon = document.getElementById("number");
    const specialIcon = document.getElementById("special");
  
    // Check if password meets length requirement
    if (password.length >= 8) {
      lengthIcon.classList.remove("fa-xmark");
      lengthIcon.classList.add("fa-check");
    } else {
      lengthIcon.classList.remove("fa-check");
      lengthIcon.classList.add("fa-xmark");
    }
  
    // Check if password contains at least one lowercase letter
    const containsLowercase = /[a-z]/.test(password);
    if (containsLowercase) {
      lowerIcon.classList.remove("fa-xmark");
      lowerIcon.classList.add("fa-check");
    } else {
      lowerIcon.classList.remove("fa-check");
      lowerIcon.classList.add("fa-xmark");
    }
      // Check if password contains at least one uppercase letter
  const containsUppercase = /[A-Z]/.test(password);
  if (containsUppercase) {
    upperIcon.classList.remove("fa-xmark");
    upperIcon.classList.add("fa-check");
  } else {
    upperIcon.classList.remove("fa-check");
    upperIcon.classList.add("fa-xmark");
  }

  // Check if password contains at least one number
  const containsNumber = /\d/.test(password);
  if (containsNumber) {
    numberIcon.classList.remove("fa-xmark");
    numberIcon.classList.add("fa-check");
  } else {
    numberIcon.classList.remove("fa-check");
    numberIcon.classList.add("fa-xmark");
  }

  // Check if password contains at least one special character
  const containsSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (containsSpecial) {
    specialIcon.classList.remove("fa-xmark");
    specialIcon.classList.add("fa-check");
  } else {
    specialIcon.classList.remove("fa-check");
    specialIcon.classList.add("fa-xmark");
  }
}
  