//Variables
let numeroSecreto = 5;
let numeroUsuario=0;
while (numeroUsuario!= numeroSecreto) {
    numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor');

    console.log(numeroUsuario);

    /*Este código realiza
    la compilación*/

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else{
            alert('El número secreto es mayor')
        }
        //La condicion no se cumplio
        //alert('Lo siento, no acertaste el número')
    }
}