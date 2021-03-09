// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  
  var passLength = prompt("How long do you want you password")
  var test = isNaN(passLength)
  
 // learned that Javascript and Java core are different

  if  (test == true || passLength < 8 || passLength > 129 ){
      alert("Please try again");  
      return;
  }
   
   else{
    var aphla = confirm("Do you want lowercase letters")
    var aphlaHigh = confirm("Do you want uppercase letters")
    var num = confirm(" Do you want numbers")
    var specialC = confirm("Do you what special characters" )
   };

   

   if (aphla == true && num == true && specialC == true && aphlaHigh == true){
    function generatePassword( len ) {
      var length = (len)?(len):(passLength);
      var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
      var numeric = '0123456789';
      var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      var password = "";
      var character = "";
      var crunch = true;
      while( password.length<length ) {
          entity1 = Math.ceil(string.length * Math.random()*Math.random());
          entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
          entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
          hold = string.charAt( entity1 );
          hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
          character += hold;
          character += numeric.charAt( entity2 );
          character += punctuation.charAt( entity3 );
          password = character;
      }
      password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
      return password.substr(0,len);

  // found the function on stackoverflow https://stackoverflow.com/questions/1497481/javascript-password-generator

  }} 
 
   else if(aphla == false && num == true && specialC == true && aphlaHigh == true){
    function generatePassword( len ) {
      var length = (len)?(len):(passLength);
      var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
      var numeric = '0123456789';
      var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      var password = "";
      var character = "";
      var crunch = true;
      while( password.length<length ) {
          entity1 = Math.ceil(string.length * Math.random()*Math.random());
          entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
          entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
          hold = string.charAt( entity1 );
          hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
          character += hold;
          character += numeric.charAt( entity2 );
          character += punctuation.charAt( entity3 );
          password = character;
      }
      password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
      return password.substr(0,len);
   }}

   else if(aphla == true && num == false && specialC == true && aphlaHigh == true){
    function generatePassword( len ) {
      var length = (len)?(len):(passLength);
      var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
      var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      var password = "";
      var character = "";
      var crunch = true;
      while( password.length<length ) {
          entity1 = Math.ceil(string.length * Math.random()*Math.random());
          entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
          hold = string.charAt( entity1 );
          hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
          character += hold;
          character += punctuation.charAt( entity3 );
          password = character;
      }
      password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
      return password.substr(0,len);
   }}

   else if(aphla == true && num == true && specialC == false &&aphlaHigh == true){
    function generatePassword( len ) {
      var length = (len)?(len):(passLength);
      var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
      var numeric = '0123456789';
      var password = "";
      var character = "";
      var crunch = true;
      while( password.length<length ) {
          entity1 = Math.ceil(string.length * Math.random()*Math.random());
          entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
          hold = string.charAt( entity1 );
          hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
          character += hold;
          character += numeric.charAt( entity2 );
          password = character;
      }
      password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
      return password.substr(0,len);
   }}

  else if (aphla == true && num == true && specialC == true && aphlaHigh == false){
    function generatePassword( len ) {
      var length = (len)?(len):(passLength);
      var string = "abcdefghijklmnopqrstuvwxyz"; 
      var numeric = '0123456789';
      var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      var password = "";
      var character = "";
      var crunch = true;
      while( password.length<length ) {
          entity1 = Math.ceil(string.length * Math.random()*Math.random());
          entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
          entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
          hold = string.charAt( entity1 );
          //hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
          character += hold;
          character += numeric.charAt( entity2 );
          character += punctuation.charAt( entity3 );
          password = character;
      }
      password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
      return password.substr(0,len); 
    }}
   
   else{
     alert(" You need to choose three of four options!!")
     return

   }
     var password = generatePassword(passLength)
     var passwordText = document.querySelector("#password");
     passwordText.value = password;
     
  }





   


  



// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

//var randomEntry = (a) => a[Math.floor(Math.random() * a.length)];
