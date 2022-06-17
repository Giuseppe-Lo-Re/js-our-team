// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. 
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.

// Dichiaro L'array delle card:
const teamMembers = [
    {
        image: 'src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"',
        name: 'Wayne Barnett',
        role: 'Founder & Ceo'
    },
    {
        image: 'src="img/angela-caroll-chief-editor.jpg" alt="Angela Caroll"',
        name: 'Angela Caroll',
        role: 'Chief Editor'
    },
    {
        image: 'src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon"',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },
    {
        image: 'src="img/angela-lopez-social-media-manager.jpg" alt="Angela Lopez"',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },
    {
        image: 'src="img/scott-estrada-developer.jpg" alt="Scott Estrada"',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        image: 'src="img/barbara-ramos-graphic-designer.jpg" alt="Barbara Ramos"',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    },
];

// Selezione la classe nel DOM che dovrò successivamente popolare:
const teamContainer = document.querySelector('.team-container');

// Creo un ciclo for per ogni card dell'array:
for(let i = 0; i < teamMembers.length; i++) {
    const thisCard = teamMembers[i];
    // console.log(thisCard);

    // Creo un nuovo template che popolo con i dati giusti:
    const cardToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
            ${thisCard.image}
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