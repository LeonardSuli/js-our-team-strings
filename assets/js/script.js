
// MILESTONE 0:
// Creare l’array di stringhe contenente i nomi dei membri del team.

// MILESTONE 1:
// Stampare le informazioni su DOM come card.

// MILESTONE 3:
// Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.

// BONUS 1:
// In generale curare la parte di UI e organizzare i singoli membri in card/schede.

// BONUS 2:
// Inserire un form per l’aggiunta di un elemento alla lista.

// Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!


// Creare l’array di stringhe contenente i nomi dei membri del team.
const team = ['Leo', 'Luca', 'Marco', 'Paolo', 'Fabio'];
console.log(team);

const container = document.querySelector('.container');


// Stampare le informazioni su DOM come card.
for (let i = 0; i < team.length; i++) {

    const element = team[i];

    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = element;

    container.append(div);

    div.addEventListener('click', function(){
        console.log('clicked');
    })
    
}

