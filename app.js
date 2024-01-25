//Variables
let numeroSecreto = Math.floor (Math.random()*100)+1 ;
let numeroUsuario=0;
let intentos  = 1;
//let palabraVeces = 'vez';
let maximosIntentos= 2;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt (prompt('Me indicas un número entre 1 y 100 por favor'));

    console.log(typeof(numeroUsuario));

    /*Este código realiza
    la compilación*/

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario} . Lo hiciste en ${intentos} ${(intentos) == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else{
            alert('El número secreto es mayor')
        }
        //incrementamos e l contador cuando no acierta
        //intentos = intentos + 1;
        intentos ++ ;

        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplio
        //alert('Lo siento, no acertaste el número')
    }
}