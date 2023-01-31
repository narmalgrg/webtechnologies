//console.log("Hello world I am learning javascript!!!");
/*let a= 6;
console.log(typeof(a));
let b= 7;
let sum= a+b;
console.log(sum);*/

/*var a= 3;
console.log(typeof(a));
var b = 4;
var product  = a * b;
console.log(product);*/

/*const PI = 3.14;
let radius = window.prompt("Enter radius:");
let circumference = 2* PI* radius
console.log("The circimference of a circle is :" + circumference);*/


/*function bark(){

    let d= window.prompt("Enter the age of the dog")
    if (dog >=10){
        console.log()
     }
      else
      {
       console.log ("The dog is young")
      } 
    

    }
    let age= window.prompt("Enter the age of the dog")
    function sleep(){
        if(age>=10){
            console.log("The dog is very old")
        }else
        {
            console.log("The dog is young")

            }
        }
    
    



bark();
sleep(); */

document.getElementById("myBtn").onclick = function(){
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const PI = 3.14;
    let circumference = 2 * PI * radius ;
   /* document.getElementById("circumference").innerHTML= circumference;*/
   document.getElementById("circumference").appemed(circumference);
}