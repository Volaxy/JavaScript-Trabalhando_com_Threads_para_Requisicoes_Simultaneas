O JavaScript possui um **modelo de concorrência** baseado em um **event loop** (laço de eventos, em português), responsável pela execução do código, coleta e processamento de eventos e execução de subtarefas enfileiradas.

Apesar de executar tarefas em ordens diferentes, **por padrão o JavaScript funciona de modo síncrono**, onde o **event loop** executa as tarefas que ficam na call stack linha a linha. Algumas funções podem demorar para executar ou possuem um tempo especificado para acontecer, e pra isso temos o auxílio da **task queue** para não impedir a leitura do código, tornando o código **assíncrono**.

Abaixo você pode conferir um glossário com a explicação de cada um desses termos técnicos citados:

| Termo | Significado |
| --- | --- |
| Concorrência  | Um programa é concorrente quando é composto de tarefas que podem ser executadas em ordens diferentes. |
| Event Loop	| É um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. |v
| Task Queue	| A fila de tarefas assíncronas. |
| Call Stack	| É um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. |