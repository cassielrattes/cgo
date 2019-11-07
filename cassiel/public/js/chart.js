
// GRAFICO - ESCADA //

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 40, 5, 2, 20, 30, 65]
        }]
    },

    // Configuration options go here
    options: {}
});

// GRAFICO - PIZZA //

var ctx1 = document.getElementById('chartContainer').getContext('2d');
var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 40, 5, 2, 20, 30, 65]
        }]
    },

    // Configuration options go here
    options: {}
});