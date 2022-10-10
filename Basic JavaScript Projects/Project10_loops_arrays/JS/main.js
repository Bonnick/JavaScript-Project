function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten") .innerHTML = Digit;
}

var Instruments = [ "Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture [0] = "Sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "Eating";
    Cat_Picture[3] = "Purring";
    document.getElementById("Cat") .innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrumental = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrumental.color = "blue";
    Musical_Instrumental.price = "$900";
    document.getElementById("Constant") .innerHTML = "The cost of the" + Musical_Instrumental.type + "was" + Musical_Instrumental.price;
}



let X= 82;
document.write(X);
{
    let X= 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a" + this.color + this.make + this.model;
    }
    
};
document.write("Car_Object") .innerHTML = car.description();
