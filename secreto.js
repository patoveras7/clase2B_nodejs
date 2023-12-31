const pregunta = require('readline-sync');
const numeroSecreto = () =>{
console.log('********NUMERO SECRETO EN LINEA*******');
const numeroOculto = Math.floor(Math.random()*100);
let numeroIngresado = pregunta.question('Intente averiguar el numero secreto ubicado entre el 1 y el 99 inclusive.');
while (numeroIngresado!=numeroOculto) {
    if (numeroIngresado<numeroOculto) {
        console.log('El numero ingresado es menor al numero secreto, por favor intentelo nuevamente.')
        numeroIngresado = pregunta.question('Nuevo ingreso.');
    } else {
        console.log('El numero ingresado es mayor al numero secreto, por favor intentelo nuevamente.')
        numeroIngresado = pregunta.question('Nuevo ingreso.');
    }  
}
if (numeroIngresado=numeroOculto) {
    console.log('Congrats!! You are the one.')
}
}

module.exports = {numeroSecreto};