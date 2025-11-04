//AULA1 NA UEPA
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

//AULA2 NA UEPA
import {createServer} from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/') {
        res.write('<h1>P&aacute;gina principal</h1>')
    }else if (req.url === '/hello') {
        res.write('<h1>ol&aacute;, mundo</h1>')
    }else {
        res.write('<h1>P&aacute;gina n&atilde;o encontrada</h1>')
    }

    res.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000')
});

//AULA2 NA UEPA PARTE2
import {createServer} from 'node:http';
import {parse} from 'node:url'

const server = createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("<h1>Dados da query string</h1>") 

const result = parse(req.url, true);
for (var key in result.query) {
    res.write("<h1>" + key + " : " + result.query[key] + "</h1>")
}

res.write("<hr><h1>informa&ccedil&otilde;es adicionais</h1>")

res.write("<h2>href : " + result.href + "</h2>")
res.write("<h2>pathname : " + result.pathname + "</h2>")
res.write("<h2>search : " + result.search + "</h2>") 
res.write("<h2>path : " + result.path + "</h2>")

    res.end();
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000')
});

//AULA3 NA UEPA(USANDO UM ARQUIVO HTML)
import {createServer} from 'node:http';
import fs from 'fs';

const server = createServer((req, res) =>{
    fs.readFile('./index.html', function(err, data){
        if(err) {throw err}
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});


//AULA4 NA UEPA APRENDENDO EXPRESS
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Seja bem-vindo ao meu app Express!');
});

app.post('/artigos', (req, res) => {
    res.send('Lista de artigos recebida via POST')
})

app.put('/contado', (req, res) => {
    res.send('Para entrar em contato, envie um PUT request')
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
