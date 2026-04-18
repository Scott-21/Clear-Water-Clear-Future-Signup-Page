// checks age
function checkAge(el) {
  if (el.value == "") return;

  var todayDate = new Date();
  var birthdayDate = new Date(el.value);
  var howOld = todayDate.getFullYear() - birthdayDate.getFullYear();
  var monthCheck = todayDate.getMonth() - birthdayDate.getMonth();

  if (monthCheck < 0 || (monthCheck == 0 && todayDate.getDate() < birthdayDate.getDate())) {
    howOld--;
  }

  if (howOld < 13) {
    document.getElementById("bdayError").innerHTML = "You must be at least 13 years old to sign up.";
  } else {
    document.getElementById("bdayError").innerHTML = "";
  }
}

// checks the email format
function liveEmailCheck(el) {
  var emailTyped = el.value.trim();
  if (emailTyped == "") {
    document.getElementById("emailError").innerHTML = "";
    return;
  }
  var whereIsAt = emailTyped.indexOf("@");
  var whereIsDot = emailTyped.lastIndexOf(".");
  if (whereIsAt < 1 || whereIsDot < whereIsAt + 2) {
    document.getElementById("emailError").innerHTML = "Email must contain @ and a dot after it.";
  } else {
    document.getElementById("emailError").innerHTML = "";
  }
}

function validateForm() {

  // this to clear all error messages when resetting
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("bdayError").innerHTML = "";
  document.getElementById("sexError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("userError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("confirmError").innerHTML = "";
  document.getElementById("concernError").innerHTML = "";
  document.getElementById("habitsError").innerHTML = "";
  document.getElementById("awarenessError").innerHTML = "";
  document.getElementById("successMsg").innerHTML = "";

  var isValid = true;

// PERSONAL INFO

  // name check
  var nameTyped = document.getElementById("fullName").value.trim();
  if (nameTyped.length == 0) {
    document.getElementById("nameError").innerHTML = "Full name is required.";
    isValid = false;
  }
  if (nameTyped.length > 0 && nameTyped.length < 2) {
    document.getElementById("nameError").innerHTML = "Full name must be at least 2 characters.";
    isValid = false;
  }

  // birthdate check
  var bdayTyped = document.getElementById("birthdate").value;
  if (bdayTyped == "") {
    document.getElementById("bdayError").innerHTML = "Birthdate is required.";
    isValid = false;
  } else {
    var todayDate = new Date();
    var birthdayDate = new Date(bdayTyped);
    var howOld = todayDate.getFullYear() - birthdayDate.getFullYear();
    var monthCheck = todayDate.getMonth() - birthdayDate.getMonth();
    if (monthCheck < 0 || (monthCheck == 0 && todayDate.getDate() < birthdayDate.getDate())) {
      howOld--;
    }
    if (howOld < 13) {
      document.getElementById("bdayError").innerHTML = "You must be at least 13 years old to sign up.";
      isValid = false;
    }
  }

  // checking gedner
  var genChoices = document.getElementsByName("sex");
  var didPickGen = false;
  for (var i = 0; i < sexChoices.length; i++) {
    if (genChoices[i].checked) {
      didPickGen = true;
    }
  }
  if (didPickGen == false) {
    document.getElementById("sexError").innerHTML = "Please select a sex option.";
    isValid = false;
  }

  // check email
  var emailTyped = document.getElementById("email").value.trim();
  if (emailTyped.length == 0) {
    document.getElementById("emailError").innerHTML = "Email is required.";
    isValid = false;
  }
  if (emailTyped.length > 0) {
    var whereIsAt = emailTyped.indexOf("@");
    var whereIsDot = emailTyped.lastIndexOf(".");
    if (whereIsAt < 1 || whereIsDot < whereIsAt + 2) {
      document.getElementById("emailError").innerHTML = "Email must contain @ and a dot after it.";
      isValid = false;
    }
  }

// ACCOUNT DETAILS

  // username check
  var usernameTyped = document.getElementById("username").value.trim();
  var onlyLettersAndNums = /^[a-zA-Z0-9]+$/;
  if (usernameTyped.length == 0) {
    document.getElementById("userError").innerHTML = "Username is required.";
    isValid = false;
  }
  if (usernameTyped.length > 0 && (usernameTyped.length < 8 || usernameTyped.length > 20)) {
    document.getElementById("userError").innerHTML = "Username must be 8-20 characters long.";
    isValid = false;
  }
  if (usernameTyped.length >= 8 && usernameTyped.length <= 20) {
    if (!onlyLettersAndNums.test(usernameTyped)) {
      document.getElementById("userError").innerHTML = "Username may only contain letters and numbers.";
      isValid = false;
    }
  }

  // password checking
  var passTyped = document.getElementById("password").value;
  if (passTyped.length == 0) {
    document.getElementById("passError").innerHTML = "Password is required.";
    isValid = false;
  }
  if (passTyped.length > 0 && passTyped.length < 10) {
    document.getElementById("passError").innerHTML = "Password must be at least 10 characters.";
    isValid = false;
  }
  if (passTyped.length >= 10) {
    if (!/[A-Z]/.test(passTyped)) {
      document.getElementById("passError").innerHTML = "Password needs at least one uppercase letter.";
      isValid = false;
    }
    if (!/[a-z]/.test(passTyped)) {
      var curPassMsg = document.getElementById("passError").innerHTML;
      document.getElementById("passError").innerHTML = curPassMsg + " Password needs at least one lowercase letter.";
      isValid = false;
    }
    if (!/[0-9]/.test(passTyped)) {
      var curPassMsg2 = document.getElementById("passError").innerHTML;
      document.getElementById("passError").innerHTML = curPassMsg2 + " Password needs at least one number.";
      isValid = false;
    }
  }

  // confirm password check
  var confirmTyped = document.getElementById("confirmPass").value;
  if (confirmTyped.length == 0) {
    document.getElementById("confirmError").innerHTML = "Please confirm your password.";
    isValid = false;
  }
  if (confirmTyped.length > 0 && confirmTyped !== passTyped) {
    document.getElementById("confirmError").innerHTML = "Passwords do not match.";
    isValid = false;
  }


//TOPIC QUESTIONS
  
  // concern checking
  var concernPicked = document.getElementById("concern").value;
  if (concernPicked == "") {
    document.getElementById("concernError").innerHTML = "Please select your biggest water concern.";
    isValid = false;
  }

  // checks the habit boxes through looping
  var habitBoxes = document.getElementsByName("habits");
  var didTickHabit = false;
  for (var j = 0; j < habitBoxes.length; j++) {
    if (habitBoxes[j].checked) {
      didTickHabit = true;
    }
  }
  if (didTickHabit == false) {
    document.getElementById("habitsError").innerHTML = "Please select at least one habit.";
    isValid = false;
  }

  // checks awareness jst like the radio buttons for gendre
  var awarenessChoices = document.getElementsByName("awareness");
  var didPickAwareness = false;
  for (var k = 0; k < awarenessChoices.length; k++) {
    if (awarenessChoices[k].checked) {
      didPickAwareness = true;
    }
  }
  if (didPickAwareness == false) {
    document.getElementById("awarenessError").innerHTML = "Please select how often you think about water waste.";
    isValid = false;
  }

  // message to signify you are logged in and yes
  if (isValid == true) {
    document.getElementById("successMsg").innerHTML = "You're in! Welcome to Clear Water, Clear Future!";
  }

  return isValid;
}