import {petsBuilder, pets} from './components/petComponent.js';

const sortFluffies = (e) => {
    const petType = e.target.id;
    if(petType === 'allId') {
        petsBuilder(pets);
     } else {
            const filteredAnimals = pets.filter(x => x.petType === petType);
            petsBuilder(filteredAnimals);
    }
};

const sortEvents = () => {
    const allButton = document.getElementById('allId');
    const catsButton = document.getElementById('catId');
    const dogButton = document.getElementById('dogId');
    const dinosButton = document.getElementById('dinoId');
    allButton.addEventListener('click', sortFluffies);
    catsButton.addEventListener('click', sortFluffies);
    dogButton.addEventListener('click', sortFluffies);
    dinosButton.addEventListener('click', sortFluffies);
}

export {sortEvents};