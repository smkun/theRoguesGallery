const characters = [
    {
        id: 1,
        name: "Charnak of the Burnt Spear",
        title: "The Iron-Sworn",
        image: "IMAGES/Charnak.png",
        preview: "An orc Warlock who survived tragedy and made a pact with General Malvarion for discipline and order...",
        page: "CHARACTERS/Charnak.htm"
    },
    {
        id: 2,
        name: "Croakshadow Ribbleton",
        title: "The Marsh Phantom",
        image: "IMAGES/Croakshadow.png",
        preview: "A ribbet rogue and Gray Order agent, expert lockpicker and infiltrator from Henge's sewers...",
        page: "CHARACTERS/Croakshadow.htm"
    },
    {
        id: 3,
        name: "Dorn Coldmire",
        title: "Hammer of the Unbroken Oath",
        image: "IMAGES/Dorn.png",
        preview: "A dwarven Divine Wielder from the mountain fortress Karrash-Khal, devoted to destroying corruption...",
        page: "CHARACTERS/Dorn.htm"
    },
    {
        id: 4,
        name: "Drexler Blaze",
        title: "Scion of the Ember Spire",
        image: "IMAGES/Drexler.png",
        preview: "An arrogant human noble wizard with genius-level magical abilities, expelled from academy for hubris...",
        page: "CHARACTERS/Drexler.htm"
    },
    {
        id: 5,
        name: "Fenric Staghorn",
        title: "Warden of Renewal",
        image: "IMAGES/Fenric.png",
        preview: "A Hornvar druid and guardian of the northern reaches, devoted to fighting corruption...",
        page: "CHARACTERS/Fenric.htm"
    },
    {
        id: 6,
        name: "Kaelith Vyndar",
        title: "The Tidecaller's Son",
        image: "IMAGES/Kaelith.png",
        preview: "A Faedrak sorcerer and court mage of Avalon, controls weather and water magic...",
        page: "CHARACTERS/Kaelith.htm"
    },
    {
        id: 7,
        name: "Lorenthil Swiftblade & MoJo",
        title: "Guardians of the Green",
        image: "IMAGES/Lorenthil.png",
        preview: "Elf ranger and black panther companion from the Great Woods, partners with Charnak...",
        page: "CHARACTERS/Lorenthil.htm"
    },
    {
        id: 8,
        name: "MARC 7",
        title: "Maelstrom Autonomous Reliable Clockwork",
        image: "IMAGES/MARC7.png",
        preview: "A sentient construct created by gnomish artificers in Kronus, possesses true consciousness...",
        page: "CHARACTERS/MARC7.htm"
    },
    {
        id: 9,
        name: "Myr'Muur Silverstring",
        title: "The Whispering Poet",
        image: "IMAGES/Myrmuur.png",
        preview: "An elven spy-bard working as a double agent, member of Whisperkin intelligence network...",
        page: "CHARACTERS/Myrmuur.htm"
    },
    {
        id: 10,
        name: "Rathgar Bloodfang",
        title: "The Unyielding",
        image: "IMAGES/Rathgar.png",
        preview: "A leonin warrior from the Badlands, expert duelist and Beast Fest champion...",
        page: "CHARACTERS/Rathgar.htm"
    }
];

function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
        <img class="character-image" src="${character.image}" alt="${character.name}">
        <div class="character-name">${character.name}</div>
        <div class="character-title">${character.title}</div>
        <div class="character-preview">${character.preview}</div>
    `;
    
    card.addEventListener('click', () => {
        window.location.href = character.page;
    });
    
    return card;
}

function initializeGallery() {
    const characterGrid = document.getElementById('characterGrid');
    
    characters.forEach(character => {
        const card = createCharacterCard(character);
        characterGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
});