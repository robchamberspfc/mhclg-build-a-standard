// Retrieve the object from storage
let projectData = localStorage.getItem('basketData') ? JSON.parse(localStorage.getItem('basketData')) : [];

//check to see if local storage has been set and set from standards.json if not add it
if (projectData.length == 0) {
    fetch('/assets/data/basket.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //add data to local storage
            localStorage.setItem('basketData', JSON.stringify(data));
            projectData = data
        })
}

writeLocalStorage = (data) => {
    localStorage.setItem('basketData', JSON.stringify(data));
    updateBasket()
}

resetPage = () => {
    localStorage.clear();
    location.reload();
}

// dismissAlert = () => {
//     localStorage.setItem('datasetAlertDismissed', "True");
// }