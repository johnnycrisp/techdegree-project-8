const employeeCard = document.querySelector('.employee-card');

function fetchData(url){
    return fetch(url)
    .then(response => response.json())
    .then(data => data.results[0])
    .catch(error => console.log(error));
}


function generateHTML(data) {

    const cardHTML = `
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


fetchData('https://randomuser.me/api/')
.then(data => generateHTML(data))
.then(cardHTML => employeeCard.innerHTML = cardHTML);
// .then(generateHTML)
// .then(employeeCard.innerHTML = cardHTML);

console.log(fetchData('https://randomuser.me/api/'));