function substraction_Function() {
    var substraction= 5- 2;
    document.getElementById("Math") .innerHTML = "5 - 2 =" + substraction;
    
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math1") .innerHTML="6 x 8 = " + simple_Math;
}

 function division ()  {
    var simple_Math = 48/6;
    document.getElementById("Math2") .innerHTML = "48/6 =" + simple_Math;
 }

 function more_Math() {
    var simple_Math = (1 +2) * 10/ 2-5;
    document.getElementById("Math3") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then substracted by 5 equals" + simple_Math;
 }

 function modulus_Operator() {
    var simple_Math= 25 % 6;
    document.getElementById("Math4") .innerHTML= "When you divide 25 by 6 you have a remainder of:" + simple_Math;
 }

 function negation_Operator() {
    var X = 10;
    document.getElementById("Math5") .innerHTML = -X;
 }

 function increase() {
   var X= 5;
   X++;
   document.write(X);
 }

 
 function decrease() {
   var X= 5.25;
    X--;
   document.write(X);
 }

 function random() {
   window.alert(Math.random());
 }



