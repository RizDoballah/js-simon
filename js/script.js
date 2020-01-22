// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


//esponere un alert con 5 numeri casuali
var numeriCasuali = [];
var numeriIndovinati = [];
for (var i = 0; i < 5; i++) {
  numeriCasuali[i]= getRandom(1, 100);
}
alert(numeriCasuali);

setTimeout(myFunction, 3000);
//function per chiedere all'utente di inserire i numeri
function myFunction() {
  for (var i = 0; i < 5; i++) {
    var numeriIndovinati = parseInt(prompt('inserisci i numeri visti uno alla volta'));
    console.log(numeriIndovinati);
  }
}
//function per generare numeri casuali
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
