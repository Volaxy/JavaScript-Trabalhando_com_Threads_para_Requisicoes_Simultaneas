JavaScript era uma linguagem em que os únicos mecanismos multitarefa disponíveis eram dividir tarefas e agendar suas partes para execução posterior e, no caso do Node.js, executar processos adicionais.

Agora, imagine uma situação em que temos um algoritmo complexo sendo executado no navegador. Enquanto a **call stack** tem funções para executar, o navegador não pode fazer mais nada. Isso significa que o navegador não pode renderizar nem executar outro código.

Depois que o navegador iniciar o processamento de muitas tarefas na call stack, pode acontecer de deixar de responder. Assim, alguns navegadores param de funcionar. Isso é o caso de um sistema **single thread**, que só pode tratar de uma requisição por vez. Por isso, o processamento não pode ser demorado para não bloquear o funcionamento da aplicação.

**Hoje, em todos os principais ambientes JavaScript, temos acesso a threads** e, diferentemente de Ruby e Python, não temos um GIL, tornando-os efetivamente inúteis para executar tarefas com uso intensivo de CPU. *Ainda assim, as threads são úteis para para isolar tarefas com uso intensivo de CPU**. No navegador, também existem threads de propósito especial que possuem conjuntos de recursos disponíveis para eles que são diferentes do thread principal.

Para gerar novas threads com o Javascript e manipular mensagens entre elas, você pode usar o seguinte trecho de código:

```javascript
const worker = new Worker(‘worker.js’);
worker.postMessage(‘Olá, mundo!’);
```

Com o auxílio de [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) construímos um **sistema multithread** em que podemos tratar vários processos em paralelo, mesmo que demorem ou bloqueiem, sem afetar a thread principal.

Um conteúdo complementar interessante para entender melhor sobre multithreads com JavaScript é o livro “Multithreaded Javascript: Concurrency Beyond The Event Loop” de Thomas Hunter II e Bryan English.

*GIL* significa *Global Interpreter Lock* (em português, bloqueio de intérprete global) e é um bloqueio de intérprete global é um mecanismo usado em intérpretes de linguagem de computador para sincronizar a execução de threads para que apenas um thread nativo possa ser executado por vez.