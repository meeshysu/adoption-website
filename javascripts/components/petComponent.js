import {printToDom} from '../helpers/util.js';


let pets = [];

const setPets = (newArray) => {
    pets = newArray;
};

const getPetz = () => {
    return pets;
};

const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pet) => { 
    domString +=    `<div class="card border-success m-2" style="max-width: 22rem;">`;
    domString +=      `<div class="card-header bg-transparent border-success">${pet.name}</div>`;
    domString +=        `<div class="card-body text-success">`;
    domString +=          `<img class="petPic" src="${pet.imageUrl}" alt="${pet.name}">`;
    domString +=          `<p class="card-text">${pet.specialSkill}</p>`;
    domString +=           `<h6 class="colorOfPet">${pet.color}</h6>`;
    domString +=        `</div>`
    domString +=       `<div class="card-footer bg-transparent border-success">${pet.type}</div>`;
    domString +=   `</div>`
})
    printToDom(domString);
};


export {petsBuilder, setPets, getPetz, pets};
