
// Consegna
// Repo: ex-ts-rifai-un-es
// Scegli un esercizio tra Il compleanno dello chef e Dashboard della città del Modulo 1 
// – Advanced JavaScript e riscrivilo utilizzando TypeScript.
// Tipizza tutte le variabili, funzioni e strutture dati in modo esplicito, 
// e verifica che il comportamento finale sia identico alla versione in JavaScript.
// ✨ Puoi partire da un nuovo progetto Vite oppure aggiungere TypeScript a un progetto esistente.


// Consegna
// Repo: ex-js-async-chef
// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). 
// Questa funzione accetta un id di una ricetta e deve:

//     Recuperare la ricetta da https://dummyjson.com/recipes/{id}
//     Estrarre la proprietà userId dalla ricetta
//     Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
//     Restituire la data di nascita dello chef

// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:

//     Essere asincrona (async).
//     Utilizzare await per chiamare le API.
//     Restituire una Promise con la data di nascita dello chef.
//     Gestire gli errori con try/catch

// Esempio di utilizzo

// getChefBirthday(1)
//   .then(birthday => console.log("Data di nascita dello chef:", birthday))
//   .catch(error => console.error("Errore:", error.message));

// Esempio di output atteso

// Data di nascita dello chef: 1990-06-15