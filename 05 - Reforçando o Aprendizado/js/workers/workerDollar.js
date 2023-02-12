async function connectApi() {
    const connection = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    const connectionTranslated = await connection.json();

    postMessage(connectionTranslated.USDBRL);
}

addEventListener("message", () => {
    connectApi();

    setInterval(() => connectApi(), 5000);
});