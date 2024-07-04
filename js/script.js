

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
for(i=0; i<6;i++){

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

//Recupero il pulsante 
const btnn = document.getElementById('send-number');

btnn.addEventListener('click', function() {

    //Recupero il valore del input
    let nume = document.getElementById('number').value;

    if ( nume.length === 4 ) {

        //Recupero il valore del input
       
        let somma = 0 ;
        for ( let i = 0; i < nume.length; i++) {
        
            somma += parseInt(nume[i]);
console.log(somma);
            //  PRIMO va nel DOM poi prende l id result w von il .innerhtml crea cose emse metti ${nome variabile }
            //Visualizzo il risultato nel DOM
            document.getElementById('result').innerHTML = `<h2>La somma delle cifre di ${nume} è ${somma}</h2>`;

        } 

    } 
    else {
        alert('Non hai inserito un valore a quattrro cifre')
    }
})