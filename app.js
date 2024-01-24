//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor');

console.log(numeroUsuario);

/*Este código realiza
la compilación*/

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condicion no se cumplio
    alert('Lo siento, no acertaste el número')
}