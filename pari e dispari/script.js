let sceltaNum = prompt('Inserire un numero')
let pariodispari = prompt('Inserire Pari o Dispari')




 
let sceltapc = randomcomputer()

let somma = sceltaNum + sceltapc

console.log(sceltapc);


console.log(somma);







function randomcomputer (min, max){

  return Math.ceil(Math.random() * 5)
  
}