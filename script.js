const inserimento = prompt('Inserire una parola')

const parolapalindroma = inserimento.toLowerCase();

let parola = checkpalindromo()

function checkpalindromo(paroladata){
 if(parolapalindroma === parolapalindroma.split('').reverse().join('')){
   messaggio = 'La parola è palindroma'
 } else{
   messaggio ='La parola non è palindroma'
 }
   return messaggio
 
 }

 console.log(parola);


 


