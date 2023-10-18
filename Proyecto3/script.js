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

})