import {getPetz, setPets, petsBuilder} from '../components/petComponent.js';


function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petsBuilder(getPetz());
};

function executeThisCodeIfXhrFails () {
    cosole.log('shit broke bruh');
};

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

export {getPets};
