function Dictionary ()  {
    var simple_Math = 48/6;
    document.getElementById("Dictionary") .innerHTML = "48/6 =" + simple_Math;
 }

 function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary1") .innerHTML = Animal.Sound;
 }