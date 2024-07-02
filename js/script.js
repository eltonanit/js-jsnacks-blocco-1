

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