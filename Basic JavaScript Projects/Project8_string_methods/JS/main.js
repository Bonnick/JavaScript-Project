// This function will connect Part_1, Part_2, Part_3, and Part_4 into one complete sentence.

function full_sentence() {
    var part_1= "I have ";
    var part_2= "made this ";
    var part_3= "into a complete ";
    var part_4= "sentence.";
    var whole_sentence= part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML=  whole_sentence;
}


// This function helps you to understand who is the dull boy. For example in this case Johnny. 
function slice_Method() {
    var Sentence= "All work and no play makes johnny a dull boy.";
    var Section= Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML= Section;
}
// This function the string_Method to you what x is. In this case x is equal to 82
function string_Method() {
    var x=182;
    document.getElementById("Numbers_to_string") .innerHTML= x.toString();
}
// This function round of the number to precision. 
function precision_Method() {
    var x= 12938.3012987376112;
    document.getElementById("Precision") .innerHTML= x.toPrecision(10);
}