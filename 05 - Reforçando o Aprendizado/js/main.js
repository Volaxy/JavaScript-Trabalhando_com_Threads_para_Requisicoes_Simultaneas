import selectQuotation from "./printQuotation.js";

const dollarGraph = document.getElementById('dollarGraph');

const quotationChart = new Chart(dollarGraph, {
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

let workerDollar = new Worker("./js/workers/workerDollar.js");
workerDollar.postMessage("usd");

workerDollar.addEventListener("message", event => {
    const time = generateTime();
    const value = event.data.ask;

    selectQuotation("dolar", value);
    addData(quotationChart, time, value);
});


const ieneGraph = document.getElementById("ieneGraph");
const graphToIene = new Chart(ieneGraph, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "Iene",
            data: [],
            borderWidth: 1
        }]
    }
});

const workerIene = new Worker("./js/workers/workerIene.js");
workerIene.postMessage("iene");

workerIene.addEventListener("message", event => {
    const time = generateTime();
    const value = event.data.ask;

    selectQuotation("iene", value);
    addData(graphToIene, time, value);
});