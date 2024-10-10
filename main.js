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

//fase 2 visualizzare in pagina i 5 numeri 

let numeriCausali=generaNum();
console.log(numeriCausali);

const numContainerEl = document.getElementById("numContainer");
numContainerEl.innerText= numeriCausali.join(", ")

//seleziono il form dal Dom
let formEl = document.querySelector("form");
//fase 3 dopo 30 secondi farli scomparire
setTimeout(() => {
    numContainerEl.style.visibility ="hidden"
    formEl.style.visibility="visible"
}, 3000);

//fase 4 raccogliamo i numeri inseriti
const buttonEl = document.getElementById("button")
const input1El = document.getElementById("input1")
const input2El = document.getElementById("input2")
const input3El = document.getElementById("input3")
const input4El = document.getElementById("input4")
const input5El = document.getElementById("input5")

const resultContainer = document.getElementById("resultContainer");
buttonEl.addEventListener("click", function (event) {
    event.preventDefault();

    const numIndovinati=[];

        console.log(numeriCausali, Number(input1El.value), numeriCausali.includes(Number(input1El.value)))
    if (numeriCausali.includes(Number(input1El.value)) ) {
        numIndovinati.push(input1El.value);
    }
    if (numeriCausali.includes(Number(input2El.value)) ) {
        numIndovinati.push(input2El.value);
    }
    if (numeriCausali.includes(Number(input3El.value)) ) {
        numIndovinati.push(input3El.value);
    }
    if (numeriCausali.includes(Number(input4El.value)) ) {
        numIndovinati.push(input4El.value);
    }
    if (numeriCausali.includes(Number(input5El.value)) ) {
        numIndovinati.push(input5El.value);
    }

    console.log(`Hai indovinato i seguenti numeri: ${numIndovinati.join(", ")}`);



    if (numIndovinati.length>0) {
        resultContainer.innerText = `Hai indovinato i seguenti numeri: ${numIndovinati.join(", ")}`
    } else {
        resultContainer.innerText = `Non hai indovinato nessun numero`
    }
})



