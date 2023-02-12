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

let workerDollar = new Worker("./js/workers/workerDollar.js"); // This creates a new "Thread" references a file with the script that be will executed
workerDollar.postMessage("usd"); // This sent a message to the worker created

workerDollar.addEventListener("message", event => {
    const time = generateTime();
    const value = event.data.ask;

    printQuotation("Dollar(s):", value);
    addData(quotationChart, time, value);
});