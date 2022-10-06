function string() {
    document.write(typeof "word");
}

function boolean() {
    document.write(10>2);
}

function boolean1() {
    document.write(10<2);
}

function addition() {
    document.write("10" + 5);
}

function equal() {
    document.write(10 == 10);
}

function sign() {
    document.write( 3 == 11);

}

function variable() {
    X=10;
    Y=10;
    document.write( X === Y );
}

function variable1() {
    X=82;
    Y="82";
    document.write(X === Y);
}

function variable2() {
    A="Magnus";
    B="Magnus";
    document.write(A === B);
}

function and() {
    document.write(5 > 2 && 10 > 4);
}

function and1() {
    document.write(5 > 10 && 10 > 4);
}

function not_Function() {
    document.getElementById("Not") .innerHTML =!(20 > 10);
}

function not_Function1() {
    document.getElementById("Not1") .innerHTML = !(5 > 10);
}