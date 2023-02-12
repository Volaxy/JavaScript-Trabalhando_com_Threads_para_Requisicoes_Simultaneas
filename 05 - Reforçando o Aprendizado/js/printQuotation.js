const list = document.querySelectorAll("[data-lista]");

function selectQuotation(name, value) {
    list.forEach(currentList => {
        if(currentList.id == name) {
            printQuotation(currentList, name, value);
        }
    });
}

function printQuotation(list, name, value) {
    list.innerHTML = "";

    for(let multiplier = 1; multiplier <= 1000; multiplier *= 10) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${multiplier} ${name}: R$${(value * multiplier).toFixed(2)}`;
        
        list.appendChild(listItem);
    }
}

export default selectQuotation;