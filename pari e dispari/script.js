let sceltanum = parseInt(prompt('Inserire un numero da 1 a 5'))
let pariodispari = prompt('Inserire Pari o Dispari')

const sceltapari = 'pari';
const sceltadispari = 'dispari';

 
let sceltapc = randomcomputer()

let somma =  sceltanum + sceltapc;

console.log(sceltapc);

console.log(somma);


const message = 'Hai perso';


if (somma === ispari && pariodispari === sceltapari.toLowerCase){
  message = 'Hai vinto';  
}

console.log(message);



function randomcomputer(min, max){

  return Math.ceil(Math.random() * 5)
  
}

function ispari(somma){
  if (somma % 2){
    return false
  }else{
    return true
  }
}