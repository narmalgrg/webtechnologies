function validation(){
 var username = document.getElementById("uname").value;
 var password = document.getElementById("pass").value;
if(username=="") {
    alert("username must be entered"); 
    return false;
}
   
 else if(password==""){
    alert("password must not be empty");
    return false;
   

 }else if(password.length<5){
    alert("password length must be of 6 characters")
    return false;
}
     
 else{
    alert("Logged  in sucessfully");
    return true;
 }

 
 


}