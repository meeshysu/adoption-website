const printToDom = (stringToPrint) => {
    const selectedDiv = document.getElementById('petsContainer');
    selectedDiv.innerHTML = stringToPrint;
};

export {printToDom};