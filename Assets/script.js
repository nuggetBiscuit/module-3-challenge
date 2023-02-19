// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPass = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  let clickEv = true;
  // passwordText.value = password;
  

  function generatePassword() {
    let lowCase = 'abcdefghijklmnopqrstuvwxyz';
    let upCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nums = '0123456789';
    let specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let validChars = '';
    let password = '';
    var charLen = prompt("Character length(in numbers):");

  if (8 <= charLen && charLen <= 128){
    
    // alert("You name is " + charLen);
    // console.log("Click: " + clickEv);
    console.log("Password: " + charLen);
    
    
    /*How to get input to show in password box 
    genPass.value = name;  */
  
  
  var daBox = prompt("Lowercase letters(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y" ){
    validChars += lowCase;
    console.log("Lowercase: " + validChars);
  }

  var daBox = prompt("Uppercase letters(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y"  ){
    validChars += upCase;
    console.log("Lowercase: " + validChars);
  }

  var daBox = prompt("Include numbers(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y" ){
    validChars += nums;
    console.log("Lowercase: " + validChars);
  }

  var daBox = prompt("Include special characters(Write yes/y or no/n): ");
  if (daBox == "yes" || daBox == "y" ){
    validChars += specialChars;
    console.log("Lowercase: " + validChars);
  }

  // for (var i = 0; i < )
}
else if (8 > charLen) {
    console.log("Too short.");
    console.log("Length: " + charLen);
    genPass.value = "Too short. Password is required to have atleast 8 characters.";
  }
else if (128 < charLen){
    console.log("Too long.");
    console.log("Length: " + charLen);
    genPass.value = "Too long. Password is required to be less than 128 characters.";
  }
  

}
var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}
