let km= prompt("Inserisci quanti km vuoi percorrere: ");
if (!!isNaN(km)) {
	alert("ERRORE! Devi inserire un numero!");
	km = prompt("Inserisci quanti km vuoi percorrere: ");
}
let età= prompt("Inserisci la tua età: ");
if (!!isNaN(età)) {
	alert("ERRORE! Devi inserire un numero!");
	età = prompt("Inserisci la tua età: ");
} 

let prezzo= 0.21 * km;
let sconto=0;
let prezzoscontato;


if(età<18){
	sconto= (prezzo*20)/100;

}
if(età>65){
	sconto=prezzo*(40)/100;
}
prezzoscontato= prezzo-sconto;
alert("il prezzo è: "+ prezzoscontato.toFixed( 2 ));

