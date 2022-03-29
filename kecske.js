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
    let kepTomb = document.querySelectorAll("aside img");
    for (let index = 0; index < kepTomb.length; index++) {
        kepTomb[index].addEventListener("click", kepEleres)
        
    }

    let kepek = document.querySelectorAll("aside img");
    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("mouseover", kepStilus)
        kepek[index].addEventListener("mouseout", kepStilusNincs)
        
    }
}

function kepEleres(){
    let tomb = []
    tomb.push(event.target.alt)
    console.log(tomb)
    
    if(tomb.indexOf("kecske")>=0 && tomb.indexOf("farkas")>=0){
        alert("nem jó");
    }else{
        event.target.style.display="none";
    let kep = `<img src='${event.target.src}' alt='${event.target.alt}'/>`
    console.log(kep);
    ID("csonak").innerHTML += kep;
    tomb.pop();
    }
}

function kepStilus(){
    event.target.classList.add("kiemel")
}

function kepStilusNincs(){
    event.target.classList.remove("kiemel")
}
