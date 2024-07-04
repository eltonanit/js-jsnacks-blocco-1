

// SNACK 1

let guests = ['uno','due','tre','cinque'];




// Recupero il pulsante dal DOM

const btn = document.getElementById('check-guest');

// Aggiungo evento al click pulsante 
btn.addEventListener('click', function (){

//Recupero il valore del inmput id name 
    let name = document.getElementById('name').value;

    // Variabile di controllo
    let check_guest = false 
    
    //Ciclo Array

    for (i = 0; i < guests.length; i++){
        if (guests[i].toLowerCase() === name.toLowerCase()) {
            check_guest = true;
            break; // Esce dal ciclo una volta trovato il nome

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

//---------------------------------------------Snack 1 risoldto
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