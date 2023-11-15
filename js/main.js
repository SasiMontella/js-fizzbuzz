// Questo è il file che contiene tutto il codice JS della pagina web


//Stampare numeri da 1 a 100 dove:
//per i multipli di 3 viene stampato "Fizz" al posto del numero
//per i multipli di 5 viene stmapato "Buzz" al posto del numero
//per i multipli di 3 e 5 viene stampato "FizzBuzz" al posto del numero

for (let i = 1; i <=100; i++){
    
    //Se sono multipli di 3 e 5 stampa FizzBuzz 
    if (i % 15 == 0) {
        console.log("FizzBuzz");

    //Se sono multipli di 3 stampa Fizz    
    } else if (i % 3 == 0) {
        console.log("Fizz");

    //Se sono multipli di 5 stampa Buzz    
    } else if(i % 5 == 0) {
        console.log("Buzz");
        
    //altrimenti stampa il numero    
    } else console.log(i);
}
