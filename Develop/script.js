// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  
  var passLength = prompt("How long do you want you password")
  
  if (passLength < 8 && passLength > 129 && passLength === String){
      alert("try again")  
      return
  }
   
   else{
    var aphla = confirm("Do you want Letter")
    var num = confirm(" Do you want numbers")
    var specialC = confirm("Do you what special characters" )
   };


   if (aphla == true && num == true && specialC == true){
    alert("num%spc")
     } 
 
   else if(aphla == false && num == true && specialC == true){
    function generatePassword(length) {
      lenght = passLength
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   

  
   console.log(password)
  console.log(passLength)
  console.log(aphla)
  console.log(generatePassword(passLength))

    
   
      }


   else if(aphla == true && num == false && specialC == true){
    alert("apha%spc")
   }
   else if(aphla == true && num == true && specialC == false){
    alert("num%salpha")
   }
   else{
     alert(" You need one number and letters or special character!!")
   }


var password = generatePassword(passLength)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  






   


  
}


// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

//var randomEntry = (a) => a[Math.floor(Math.random() * a.length)];
