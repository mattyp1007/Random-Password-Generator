// arrays for each type of character
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
                'v','w','x','y','z']
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U',
                'V','W','X','Y','Z'];
var numArr = [1,2,3,4,5,6,7,8,9,0];
var specialArr = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',
                  '?','@','[','\\',']','^','_','`','{','|','}','~'];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompt user for password length
  var passLength = prompt("Enter the length of your desired password (8-128 characters):");
  if(passLength < 8){
    alert("Password is too short!");
    return;
  }
  else if(passLength > 128){
    alert("Password is too long!");
    return;
  }

  // prompt user to select which types of characters
  var useLower = confirm("Press OK to include lowercase letters");
  var useUpper = confirm("Press OK to include uppercase letters");
  var useNum = confirm("Press OK to include numbers");
  var useSpecial = confirm("Press OK to include special characters");

  // concat chars of selected types to a pool of chars
  var charPool = [];
  if(useLower){
    charPool = charPool.concat(lowerArr);
  }
  if(useUpper){
    charPool = charPool.concat(upperArr);
  }
  if(useNum){
    charPool = charPool.concat(numArr);
  }
  if(useSpecial){
    charPool = charPool.concat(specialArr);
  }
  // if our pool of chars is empty, no types were selected
  if(charPool.length === 0){
    alert("You must select some type of character!");
    return;
  }

  // build password of selected length
  var password = "";
  for(var i=0; i < passLength; i++){
    // pick a random index in our pool of characters
    var index = Math.floor(Math.random() * charPool.length);
    // concat the character to the password
    password += charPool[index];
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);