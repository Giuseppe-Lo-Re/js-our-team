// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.

// Dichiaro L'array delle card:
const teamMembers = [
    {
        image: 'wayne-barnett-founder-ceo',
        name: 'Wayne Barnett',
        role: 'Founder & Ceo'
    },
    {
        image: 'angela-caroll-chief-editor',
        name: 'Angela Caroll',
        role: 'Chief Editor'
    },
    {
        image: 'walter-gordon-office-manager',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },
    {
        image: 'angela-lopez-social-media-manager',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },
    {
        image: 'scott-estrada-developer',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        image: 'barbara-ramos-graphic-designer',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    },
];

// Invoco la funzione:
drawAllCards(teamMembers) 

// Selezione l'id nel DOM e conservo il valore in una variabile:
const addMemberButton = document.getElementById('addMemberButton');

// Aggiungo un evento al click:
addMemberButton.addEventListener('click', createAllCards);

function createAllCards() {

    // Selezione le classi nel DOM che dovrò successivamente popolare:
    const newCardImage = document.querySelector('#image').value;
    const newCardName = document.querySelector('#name').value;
    const newCardRole = document.querySelector('#role').value;

    //  Creo la variabile per le card che verranno inserite:
    const newCard = {
        image: newCardImage,
        name: newCardName,
        role: newCardRole
    };

    // Pusho la nuova card nell'array delle card:
    teamMembers.push(newCard);

    // Appendo il singolo elemento alla card:
    drawSingleElement(newCard);

    // Resetto il form:
    document.querySelector('#image').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#role').value = '';
}

// -------------------------------------------------- //
//                     FUNCTIONS                      //
// -------------------------------------------------- // 

function drawAllCards(cardObjectsArray) {

    // crea una card e la stampa per ogni elemento dell'array:
    for(let i = 0; i < cardObjectsArray.length; i++) {
        const thisCard = cardObjectsArray[i];

        // Chiama l'altra funzione che crea la card e
        // l'appende all'array delle card:
        drawSingleElement(thisCard);
    }
}

// Prende un oggetto card e lo stampa in pagina:
function drawSingleElement(cardObject) {

    // Selezione la classe nel DOM che dovrò successivamente popolare:
    const teamContainer = document.querySelector('.team-container');

    // Creo un nuovo template che popolo con i dati giusti:
    const cardToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${cardObject.image}.jpg"
            alt="${cardObject.name}"
            />
        </div>
        <div class="card-text">
            <h3>${cardObject.name}</h3>
            <p>${cardObject.role}</p>
        </div>
    </div>
    `;

    // Concateno alla classe selezionata:
    teamContainer.innerHTML += cardToDraw;
}


