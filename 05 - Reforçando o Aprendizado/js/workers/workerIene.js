addEventListener("message", event => {
    connectApi();
    setInterval(() => connectApi(), 5000);
});

async function connectApi() {
    const connect = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL");
    const connectTranslated = await connect.json();
    
    postMessage(connectTranslated.JPYBRL);
}