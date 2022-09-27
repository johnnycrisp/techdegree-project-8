const employeeCard = document.querySelectorAll('.employee-card');
const cardGrid = document.querySelector('.grid-container');
const modal = document.querySelector('.modal');
let cardHTML;
let modalHTML;

cardGrid.addEventListener('click', (e)=>{
    if(e.target.parentNode.className === 'employee-card'){
        modal.classList.add('show-modal');

    }
});

function displayModal(){


}

function fetchData(url){
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

function generateHTML(data) {
    cardHTML = `
        <img class="employee-img" src="${data.picture.large}" alt="Picture of ${data.name.first} ${data.name.last}">
        <div class="employee-data-container">
            <h3>${data.name.first} ${data.name.last}</h3>
            <p>${data.email}</p>
            <p>${data.location.city}</p>
        </div>`;
        modalHTML = `
        <img class="employee-img" src="${data.picture.large}" alt="Picture of ${data.name.first} ${data.name.last}">
        <div class="employee-data-container">
            <h3>${data.name.first} ${data.name.last}</h3>
            <p>${data.email}</p>
            <p>${data.location.city}</p>
        </div>
        <div class="employee-data-container">
            <p>${data.location.street.number} ${data.location.street.name}, ${data.location.state} ${data.location.postcode}</p>
            <p>${data.dob.date}</p>
        </div>`;
}

fetchData('https://randomuser.me/api/?results=12')
    .then(data => data = data.results)
    .then(data => {
        for(let i=0; i<data.length; i++){
            generateHTML(data[i]);
            employeeCard[i].innerHTML = cardHTML;
        }
    });   


