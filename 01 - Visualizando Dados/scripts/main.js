// References the element in the DOM
const ctx = document.getElementById('myChart');

// Creates a object with the reference to the chart element, and the object with the configurations of the chart
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


async function callApi() {
    const coins = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL"); // Gets the quotation between the USD and BRL
    console.log(await coins.json());
}

callApi();