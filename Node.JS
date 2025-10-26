//Primeria aula
import{createServer} from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});


//ESTUDANDO EM CASA
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite um número: ", (num1) => {
    rl.question("Digite outro número: ", (num2) => {
    const soma = Number(num1) + Number(num2);
    console.log(`A soma entre ${num1} e ${num2} é ${soma}`);
    rl.close();
    });
});

//ESTUDANDO EM CASA
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Qual seu nome? ", (nome) => {
    rl.question("Qual curso você faz? ", (curso) => {
        rl.question("De que cidade você é? ", (cidade) =>{
        console.log(`${nome} estuda ${curso} e mora em ${cidade}`);
        rl.close();
        });
    });
});
