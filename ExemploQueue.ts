import readlinesync = require('readline-sync');
import { Queue } from './Queue';

//escolher tipo do dado a ser inserido
const fila =  new Queue<string>();

//inserir dados
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

//digitar dado para a fila
//fila.enqueue(readlinesync.question("Digite o seu nome: "))

//mostrar dados da fila na saída
fila.printQueue();

//descobrir se tem esse dado na fila boolean
console.log(fila.contains("Alana"))

//saber quantos elementos tem na fila
console.log(fila.count())

//retira o primeiro da fila
fila.dequeue()

fila.printQueue()