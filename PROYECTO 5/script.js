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
            audio.addEventListener("play", function() {
                body.style.backgroundColor = "red";
              });
            
        })
        console.log("ON");
    }else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', () =>{
            botonaudio.pause()
        })
        console.log("OFF"); 
    }
}