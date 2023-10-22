//crear constante para los grados
const deg = 6

const horas = document.querySelector('.hora')
const minutos = document.querySelector('.minuto')
const segundos = document.querySelector('.segundo')

//funcion del intervalo
setInterval(() =>{
    let tiempo = new Date();
    
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    //se crea la rotacion de las manesillas segun la hora
    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${(min)}deg)`;
    segundos.style.transform = `rotate(${(seg)}deg)`;


    function calcularTiempo(){

        let tiempo1 = new Date();

        let hora1 = tiempo1.getHours();
        let minuto1 = tiempo1.getMinutes();
        let segundo1 = tiempo1.getSeconds();
    
        let ampm = hora1 >= 12 ? 'PM' : 'AM'; 
    
        hora1 = hora1 % 12; // convert to 12-hour format
        hora1 = hora1 ? hora1 : 12; // set 0 to 12
    
        hora1 = hora1<10 ? "0" + hora1 : hora1;
        minuto1 = minuto1 <10 ? "0" + minuto1 : minuto1;
        segundo1 = segundo1 <10 ? "0" + segundo1 : segundo1;
    
        let pantalla = hora1 + ":" + minuto1 + ":" + segundo1 + " " + ampm; 
        let relojdigital = document.querySelector(".reloj1");
        relojdigital.innerHTML = pantalla;
    }
    
    setInterval(calcularTiempo, 1000);

})