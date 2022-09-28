const employeeCard = document.querySelectorAll('.employee-card');
const cardGrid = document.querySelector('.grid-container');
const modal = document.querySelectorAll('.modal');
const modalCards = document.querySelectorAll('.employee');
let cardHTML;
let modalHTML;

cardGrid.addEventListener('click', (e)=>{
    if(e.target.className === 'employee-card')
    {
        e.target.parentNode.firstElementChild.classList.add('show-modal');
    } else if (e.target.className === 'employee-img' ) {
        e.target.parentNode.parentNode.firstElementChild.classList.add('show-modal');
    } else if ( e.target.parentElement.className === 'employee-data-container'){
        e.target.parentNode.parentNode.parentNode.firstElementChild.classList.add('show-modal');
    }
});

function displayModal(){


}

function fetchData(url){
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

function generateHTML(data) {
    cardHTML = `
        <img class="employee-img" src="${data.picture.large}" alt="Picture of ${data.name.first} ${data.name.last}">
        <div class="employee-data-container">
            <h3>${data.name.first} ${data.name.last}</h3>
            <p>${data.email}</p>
            <p>${data.location.city}</p>
        </div>`;
        modalHTML = `<div class ="modal-content">
        <img class="employee-img-modal" src="${data.picture.large}" alt="Picture of ${data.name.first} ${data.name.last}">
        <span class="close-button">x</span>
            <h3>${data.name.first} ${data.name.last}</h3>
            <p>${data.email}</p>
            <p>${data.location.city}</p>
            <span class="modal-break"></span>
            <p>${data.phone}</p> <p>${data.location.street.number} ${data.location.street.name}, ${data.location.state} ${data.location.postcode}</p>
            <p>Birthday: ${data.dob.date}</p>
        </div>`;
}

fetchData('https://randomuser.me/api/?results=12')
    .then(data => data = data.results)
    .then(data => {
        for(let i=0; i<data.length; i++){
            generateHTML(data[i]);
            employeeCard[i].innerHTML = cardHTML;
            modal[i].innerHTML = modalHTML;

        }
    }); 

let theEmpData = [];

function getData(url){

    fetchData(url)
    .then(data => data = data.results)
    .then(data => console.log(data));
}

getData('https://randomuser.me/api/?results=12');