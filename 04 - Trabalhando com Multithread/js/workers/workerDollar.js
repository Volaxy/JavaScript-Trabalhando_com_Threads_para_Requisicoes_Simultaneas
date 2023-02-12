async function connectApi() {
    const connection = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    const connectionTranslated = await connection.json();

    postMessage(connectionTranslated.USDBRL); // Send the message to the main thread
}

// This event receives the arguments (if there are) and execute a code block
addEventListener("message", () => {
    connectApi();

    setInterval(() => connectApi(), 5000);
});