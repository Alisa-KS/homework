// API ключ
const apiKey = "13cb7dc54c2b431c90e103510230207";


//
const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');

function removeCard() {
    const prevCard =  document.querySelector('.card');
    if (prevCard) prevCard.remove();
}

function showError(errorMessage) {
    const html = `<div class="card">${errorMessage}</div>`;
    header.insertAdjacentHTML('afterend', html);
}

function showCard({name, country, temp, condition}) {
    const html = ` <div className="card">
                                <div className="card-city"> ${name} <span>${country}</span></div>
                                <div className="card-weather">
                                    <div className="card-value">${temp}<sup>°C</sup></div>
                                    <img className="card-img" src="./img/солнце.png" alt='Weather'></img>
                                </div>
                                <div className="card-description">${condition}</div>
                        </div>`;

            header.insertAdjacentHTML('afterend', html);
}

async function getWeather(city) {
    //запрос на сервер
    const url = `http://api.weatherapi.com/v1/current.json&key=${apiKey}&q=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;       
}

//слушаю отправку формы
form.onsubmit = async function (e) {
    //отменяем отправку формы
    e.preventDefault();


    let city = input.value.trim();
    const data = await getWeather(city); 

    if (data.error) {            
        removeCard();
        showError(data.error.message); 
    } else {       
        removeCard();
        showCard(data.location.name,
                 data.location.country,
                 data.current.temp_c,
                 data.current.condition.text);            
        }
}
