import {petsBuilder, pets} from './components/petComponent.js';

const sortFluffies = (e) => {
    const type = e.target.id;
    if(type === 'all') {
        petsBuilder(pets);
     } else {
            const filteredAnimals = pets.filter(x => x.type === type);
            petsBuilder(filteredAnimals);
    }
};

const sortEvents = () => {
    const allButton = document.getElementById('all');
    const catsButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinosButton = document.getElementById('dino');
    allButton.addEventListener('click', sortFluffies);
    catsButton.addEventListener('click', sortFluffies);
    dogButton.addEventListener('click', sortFluffies);
    dinosButton.addEventListener('click', sortFluffies);
}

export {sortEvents};