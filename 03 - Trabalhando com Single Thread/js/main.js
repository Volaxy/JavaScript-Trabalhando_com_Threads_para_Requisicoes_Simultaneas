import printQuotation from "./printQuotation.js";

const ctx = document.getElementById('myChart');

const quotationChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dolar $',
            data: [],
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

setInterval(callApi, 5000);

async function callApi() {
    const quotation = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const quotationTranslate = await quotation.json();
    
    const time = generateTime();
    const value = quotationTranslate.USDBRL.ask;

    addData(quotationChart, time, value);
    printQuotation("Dollar (s)", value);
}

function generateTime() {
    const date = new Date();
    
    return `${date.getHours()}:${date.getMinutes()}`;
}

function addData(graph, legend, data) {
    graph.data.labels.push(legend);
    graph.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });

    graph.update();
}