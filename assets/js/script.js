
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


// Creare l’array di stringhe contenente i nomi dei membri del team.
const team = ['Leo', 'Luca', 'Marco', 'Paolo', 'Fabio'];
console.log(team);

const container = document.querySelector('.container');


// Stampare le informazioni su DOM come card.
for (let i = 0; i < team.length; i++) {

    const member_element = team[i];

    // creato un div
    const div = document.createElement('div');

    // aggiunta una class a div
    div.classList.add('card');

    // inserisco ogni membro dentro un div con classe card
    div.append(member_element); // div.innerHTML = member_element; (è uguale)

    // inserisco ogni div.card creata dentro il container
    container.append(div);


    // Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
    div.addEventListener('click', function(e){

        div.classList.toggle('select');

        console.log(e)

    })
    
}

// Inserire un form per l’aggiunta di un elemento alla lista.
document.getElementById('add-member').addEventListener('submit', function(e){
    e.preventDefault();

    // agiungo nuovo membro
    const new_member = document.getElementById('member').value
    console.log(new_member);

     // creato un div
     const div = document.createElement('div');

     // aggiunta una class a div
     div.classList.add('card');
 
     // inserisco ogni membro dentro un div con classe card
     div.append(new_member); // div.innerHTML = member_element; (è uguale)
 
     // inserisco ogni div.card creata dentro il container
     container.append(div);
 
 
     // Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
     div.addEventListener('click', function(e){
 
         div.classList.toggle('select');
 
         console.log(e)
 
     })

     // svuoto l'input una volta aggiunto il nuovo membro
     document.getElementById('member').value = '';
}) 