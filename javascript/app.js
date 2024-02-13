// hamburger function
function hamburgerFunction() {
    var x = document.getElementById("myNavbar");
    var y = document.querySelector(".centered-text"); 

    if (x.className === "navbar") {
        x.className += " responsive";
        y.classList.add("lowered"); 
    } else {
        x.className = "navbar";
        y.classList.remove("lowered"); 
    }
}
// swiper functionality
  var swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// events
const eventsData = [
    { date: '2015-10-31', location: 'Motorpoint Arena, Sheffield', country: 'England' },
    { date: '2015-10-26', location: 'Metro Radio Arena, Newcastle', country: 'England' },
    { date: '2015-10-20', location: 'SSE Arena, Belfast', country: 'England' },
    { date: '2015-10-07', location: 'SSE Hydro Arena, Glasgow', country: 'England' },
    { date: '2015-09-24', location: 'O2 Arena, London', country: 'England' },
    { date: '2015-09-12', location: 'Gillette Stadium, Boston, Massachusetts', country: 'USA' },
    { date: '2015-09-05', location: 'Olympic Stadium, Montreal, Quebec', country: 'Canada' },
    { date: '2015-08-27', location: 'FirstEnergy Stadium, Cleveland, Ohio', country: 'USA' },
    { date: '2015-07-21', location: 'Commonwealth Stadium, Edmonton, Alberta', country: 'Canada' },
    { date: '2015-07-15', location: 'CenturyLink Field, Seattle, Washington', country: 'USA' },
    { date: '2015-07-09', location: 'Qualcomm Stadium, San Diego, California', country: 'USA' }
];

document.addEventListener('DOMContentLoaded', function() {
    populateCountries();
    displayEvents(eventsData);
});

function populateCountries() {
    const locationSelect = document.getElementById('locationSelect');
    const uniqueCountries = [...new Set(eventsData.map(event => event.country))];
    uniqueCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        locationSelect.appendChild(option);
    });
}

function filterEvents() {
    const selectedCountry = document.getElementById('locationSelect').value;
    const filteredEvents = eventsData.filter(event => 
        event.country === selectedCountry
    );
    displayEvents(filteredEvents);
}

function displayEvents(events) {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';

    events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'event-item';

        const dateSpan = document.createElement('span');
        dateSpan.className = 'event-info date';
        dateSpan.textContent = event.date;

        const locationSpan = document.createElement('span');
        locationSpan.className = 'event-info location';
        locationSpan.textContent = event.location;

        const countrySpan = document.createElement('span');
        countrySpan.className = 'event-info country';
        countrySpan.textContent = event.country;

        div.appendChild(dateSpan);
        div.appendChild(createSeparator());
        div.appendChild(locationSpan);
        div.appendChild(createSeparator());
        div.appendChild(countrySpan);

        eventsList.appendChild(div);
    });
}

function createSeparator() {
    return document.createTextNode(' | ');
}

