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

// Selezione la classe nel DOM che dovrò successivamente popolare:
const teamContainer = document.querySelector('.team-container');

// Creo un ciclo for per ogni card dell'array:
for(let i = 0; i < teamMembers.length; i++) {
    const thisCard = teamMembers[i];

    // Creo un nuovo template che popolo con i dati giusti:
    const cardToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
            src="img/${thisCard.image}.jpg"
            alt="${thisCard.name}"
            />
        </div>
        <div class="card-text">
            <h3>${thisCard.name}</h3>
            <p>${thisCard.role}</p>
        </div>
    </div>
    `;

    // Concateno alla classe selezionata:
    teamContainer.innerHTML += cardToDraw;
}