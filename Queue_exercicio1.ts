import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();
let menu: string;

//Menu
console.log("\n1 - Adicionar Cliente na Fila \n2 - Listar todos os Clientes \n3 - Retirar Cliente da Fila \n0 - Sair")

//fila.enqueue(readlinesync.question("Escolha uma opçao: "));


//Entrada de Dados
 do{
    menu = readlinesync.question("\nEntre com a escolha desejada: ");
    if (menu == "1"){
        fila.enqueue(readlinesync.question("\nDigite o seu nome: "));
        fila.printQueue();
        console.log("\nCliente Adicionado!");

    }else if(menu == "2"){
        fila.printQueue();
            if (fila.isEmpty()){
                console.log("\nA Fila está vazia!")
            }
    }else if(menu == "3"){
        fila.dequeue();
        fila.printQueue();
        console.log("O Cliente foi Chamado!")

    }else if(menu == "0"){
        console.log("\nPrograma Finalizado!")
        process.exit(0)
    }
 }while(menu == "1" || menu == "2" || menu == "3" || menu == "0");



