

// SNACK 1

let guests = ['uno','due','tre','cinque'];

// Variabile di controllo
let check_guest = false 


// Recupero il pulsante dal DOM

document.getElementById(check-guest).addEventListener('click', function (){

    let name = document.getElementById('name').value;
    
    //Ciclo Array

    for (i = 0; i < guests.length; i++){
        if (guests[i].toLowerCase() === name.toLowerCase()) {
            check_guest = true;

        }
    }

    //Verifico il valore della variabile di controllo

    if (check_guest){
        console.log(`Benvenuto ${name}, si accendi`);
    }
    else {
        console.log(`ALT! Chi sei`);
    }
 })


// SNACK 2

//Creo Array vuoto

let numbers = [];

//Ciclo Array di cique iterazioni
for(i=0; i<5;i++){

    let num = prompt('inserisci un numero');

    //VERIFICO se il numero è dispari

    if(num % 2 != 0 ) {
        //Questo aggiunge il numero nell array
        numbers.push(num)
    }

}

//Mostro l'array che grazie al push avra il nuovo numero

console.log(numbers);


// SNACK 3

document.getElementById('send-number').addEventListener('click', function() {

    let num = document.getElementById('number').value;

    if(num.length === 4 ) {
        let somma= 0 ;
        for ( let i = 0; i<num.length;i++) {
            console.log(num(i));
            somma += parseInt(num(i));
            console.log(somma);

        }
    }
    else {
        alert('Non hai inserito un valore a quattrro cifre')
    }
})