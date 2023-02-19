// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPass = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  let clickEv = true;

  function generatePassword() {
    let lowCase = 'abcdefghijklmnopqrstuvwxyz';
    let upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nums = '0123456789';
    let specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let validChars = '';
    let password = '';
    var charLen = prompt("Character length(in numbers):");

  // Checks for length to be between 8 and 128 inclusive
  if (8 <= charLen && charLen <= 128){
  
  // Asks if user wants lowercase letters  
  var daBox = prompt("Lowercase letters(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y" ){
    validChars += lowCase;
    console.log("Lowercase: " + validChars);
  }

  // Asks if user wants uppercase letters
  var daBox = prompt("Uppercase letters(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y"  ){
    validChars += upCase;
    console.log("Lowercase: " + validChars);
  }

  // Asks if user wants numbers
  var daBox = prompt("Include numbers(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y" ){
    validChars += nums;
    console.log("Lowercase: " + validChars);
  }

  // Asks if user wants special characters
  var daBox = prompt("Include special characters(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y" ){
    validChars += specialChars;
    console.log("Lowercase: " + validChars);
  }

  /* Creates a for loop that multiplies with the length of validChars
  which is a string holding all the parts the user wants in the password. Math.random() multiplies
  with that to create a range from 0 to the user's inputted length.
  randomStuff gives an index to choose from inside validChars which
  gets concatenated to password to create the user's password.  */
  for (var i = 0; i < charLen; i++){
    var randomStuff = Math.floor(Math.random() * validChars.length);
    password += validChars[randomStuff];
  }
  // Asks if user wants special characters
  console.log("Password foo: " + password);
  genPass.value = password;
}

// If inputted length less than 8, tells user too short
else if (8 > charLen) {
    console.log("Too short.");
    console.log("Length: " + charLen);
    genPass.value = "Too short. Password is required to have atleast 8 characters.";
  }

  // If inputted length greater than 128, tells user too long
else if (128 < charLen){
    console.log("Too long.");
    console.log("Length: " + charLen);
    genPass.value = "Too long. Password is required to be less than 128 characters.";
  }
}
var run = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
