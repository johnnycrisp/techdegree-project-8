const employeeCard = document.querySelectorAll('.employee-card');
let cardHTML;

function fetchData(url){
    return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

function generateHTML(data) {

    cardHTML = `
        <div class="employee-card">
        <img class="employee-img" src="${data.picture.large}" alt="Picture of ${data.name.first} ${data.name.last}">
        <div class="employee-data-container">
            <h3>${data.name.first} ${data.name.last}</h3>
            <p>${data.email}</p>
            <p>${data.location.city}</p>
        </div>
    </div>
    `;
    return cardHTML;
}

fetchData('https://randomuser.me/api/?results=12')
    .then(data => data.results)
    .then(data => {
        for(let i=0; i<data.length; i++){
            generateHTML(data[i]);
            employeeCard[i].innerHTML = cardHTML;
        }
    });  


