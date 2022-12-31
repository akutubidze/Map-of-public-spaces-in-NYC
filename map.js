
var map = L.map('map').setView([40.776676, -73.971321], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const num = 100;



const locations = [
    {
        location: [40.7594944319914,
            -73.97336211233576],
        name: '<b>Park Avenue Plaza</b><br>',
        time: "8AM-10PM"

    },
    {
        location: [40.75011226337686, -73.97052940124348],
        name: '<b>The Ford Foundation</b><br>',
        time: "8AM-6PM"
    },
    {
        location: [40.70539375159162, -74.00518636850742],
        name: '<b>Continental Center</b><br>',
        time: "Business hours N/A"
    },
    {
        location: [40.76266478733917, -73.97248206202708],
        name: '<b>The IBM Plaza</b><br>',
        time: "8AM-8PM"
    },
    {
        location: [40.713463027203375, -74.01433866872719],
        name: '<b>Brookfield Place Atrium</b><br>',
        time: "10AM-8PM"
    },
    {
        location: [40.75591680859877, -73.98434481658546],
        name: '<b>One Bryant Park</b><br>',
        time: "Open 24 hours"
    },
    {
        location: [40.763347685976164, -73.98029077370424],
        name: '<b>6 1/2 Avenue</b><br>',
        time: "Business hours N/A"
    },
    {
        location: [40.70650200547602, -74.00809079514653],
        name: '<b>60 Wall Street Plaza</b><br>',
        time: "Open 24 hours"
    },
    {
        location: [40.7715624099589, -73.98230403007832],
        name: '<b>David Rubinstain Atrium</b><br>',
        time: "8AM-10PM"
    },

]

console.log(locations[1])




locations.forEach(function (locationObj) {


    const m = L.marker(locationObj.location).addTo(map)
        .bindPopup(locationObj.name + locationObj.time)
        .openPopup();

    const c = L.circle(locationObj.location, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: 500
    }).addTo(map);

})



locations.forEach(function (publicspace, index) {
    const number = index + 1
    $("#locations").append("<a href='#' data-location=" + publicspace.location + ">" + number + ") " + publicspace.name + "</a><br>")
})


$("#locations").on("click", "a", function () {

    const location = $(this).data("location")
    console.log(location)

    const locationArr = location.split(",")
    console.log(locationArr)

    map.panTo(locationArr)

    map.setZoom(16)

});


const person = {
    name: "Mike",
    age: 22,
    family: {
        members: ["", "",],
        adress: {
            stree: "abc 123",
            bulding: 23,

        }

    }
}



console.log(person.family.adress.stree)

const x = person.family.adress.stree