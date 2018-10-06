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
    domString +=    `<div class="card m-2" style="max-width: 22rem;">`;
    domString +=      `<div class="card-header">${pet.name}</div>`;
    domString +=        `<div class="card-body">`;
    domString +=          `<img class="petPic" src="${pet.imageUrl}" alt="${pet.name}">`;
    domString +=          `<p class="card-text">${pet.specialSkill}</p>`;
    domString +=           `<h6 class="colorOfPet">${pet.color}</h6>`;
    domString +=        `</div>`
    domString +=       `<div id="type${pet.type}">${pet.type}</div>`;
    domString +=   `</div>`
})
    printToDom(domString);
};


export {petsBuilder, setPets, getPetz, pets};
