// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passLength = prompt("Enter the length of your desired password (8-128 characters):");
  if(passLength < 8){
    alert("Password is too short!");
    return;
  }
  else if(passLength > 128){
    alert("Password is too long!");
    return;
  }
  var useLower = confirm("Press OK to include lowercase letters");
  var useUpper = confirm("Press OK to include uppercase letters");
  var useNum = confirm("Press OK to include numbers");
  var useSpecial = confirm("Press OK to include special characters");
  if(!(useLower && useUpper && useNum && useSpecial)){
    alert("You must select some time of character!");
    return;
  }
  var password = "";
  for(var i=0; i < passLength; i++){
    
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
