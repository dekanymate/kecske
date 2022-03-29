window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}

function init(){
    $("footer>p")[0].innerHTML = "Dekany Mate";
    $("main")[0].style.fontSize = "20px";
    $("main")[0].style.textAlign = "center";
}