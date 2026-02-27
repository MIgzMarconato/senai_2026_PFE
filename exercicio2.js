const lista = new ListaTarefas();

const t1 = new Tarefa("Estudar JS", "Revisar classes");
const t2 = new Tarefa("Treinar", "Academia 18h");
const t3 = new Tarefa("Ler livro", "Capítulo 5");

lista.adicionar(t1);
lista.adicionar(t2);
lista.adicionar(t3);

// Concluir uma
t1.concluir();

// Remover uma
lista.removerPorTitulo("Treinar");

// Listar todas
console.log("Todas:", lista.listar());

// Listar concluídas
console.log("Concluídas:", lista.listar(true));

// Listar pendentes
console.log("Pendentes:", lista.listar(false));