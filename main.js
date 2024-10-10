/* 
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
  nell'ordine che preferisce.
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

// fase 1 creazione di 5 numeri casuali
function generaNum() {
    let numbers=[];
    for (let i = 0; i < 5; i++) {
   //genero un numero casuale in questo caso tra 1 e 100
    let numeroGenerato = Math.floor(Math.random() * (100 - 1) ) + 1;
    numbers.push(numeroGenerato);
    }
    return numbers;
}

//fase 2
