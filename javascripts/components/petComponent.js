import {printToDom} from '../helpers/util.js';


let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petsBuilder = () => {
    let domString = '';
    pets.forEach((pet) => { 
    domString += `<div class="pet-card">`
    domString += `<div id="pet-card" class="petCard card border-success mb-3 col-2" style="max-width: 18rem;">`;
    domString +=     `<h4 class="card-title">${pet.name}</h4>`;
    domString +=     `<h6 class="colorOfPet">${pet.color}</h6>`;
    domString +=     `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`;
    domString +=     `<p class="card-text">${pet.specialSkill}</p>`;
    domString +=    `<div class="card-footer bg-transparent border-success">${pet.type}</div>`;
    domString +=   `</div>`
    domString +=   `</div>`;
})
    printToDom(domString);
};


export {petsBuilder, setPets, getPetz, pets};

