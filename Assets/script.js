// Assignment Code
var generateBtn = document.querySelector("#generate");
var genPass = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  let clickEv = true;
  passwordText.value = password;
  let charLen = prompt("Character length:");

  function generatePassword() {
  if (8 <= charLen && charLen <= 128){
    
    // alert("You name is " + charLen);
    console.log("Click: " + clickEv);
    console.log("Password: " + charLen);
    console.log("Char length: " + charLen.length);
    /*How to get input to show in password box 
    genPass.value = name;  */
  }
  else{
    console.log("Too short.");
    console.log("Length: " + charLen);
  }
  
}
var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
