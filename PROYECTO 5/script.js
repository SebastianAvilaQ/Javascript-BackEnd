let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let body = document.querySelector("body");
let botonsonido = new Audio ('C:/Users/Usuario/OneDrive/Escritorio/PROYECTO 5/sound/botonbailar.mp3');
let botonaudio = new Audio ('C:/Users/Usuario/OneDrive/Escritorio/PROYECTO 5/sound/audio.mp3');

function bailar(){
    if (esqueleto == "off"){
        esqueleto = "on"
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',() =>{
            botonsonido.play()
        })
        esqueletoStop.addEventListener('click', () =>{
            botonaudio.play()
            body.style.backgroundColor = "rgb(10, 247, 255)";
        })
        console.log("ON");
    }else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', () =>{
            botonaudio.pause()
            body.style.backgroundColor = "black";
        })
        console.log("OFF"); 
    }
}
