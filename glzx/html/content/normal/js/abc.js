
function a (){

    console.log("a = ",jQuery);
    //ajax
    b()
}
//=============================
function b(){

    console.log("b = ",$);
    c()
}
//=============================
function c(){

    console.log("c = ")
}
var abcFn = {
    'a1':a,
    'b2':b,
    'c3':c
}