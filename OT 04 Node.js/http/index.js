import express from 'express';
const app = express();
app.listen(3000, () =>
console.log('Servidor iniciado na porta 3000')
);
app.get('/', (req, res) =>
res.send('<h1 style="color: blue">CRIANDO UM SERVIDOR COM EXPRESS.JS</h1>')
);

app.get('/sobre', (req, res) =>
res.send('<h1 style="color: blue">Página Sobre</h1>')
);

app.get('/contato', (req, res) =>
res.send('<h1 style="color: blue">Página Contato</h1>')
);

app.get('/empresa', (req, res) =>
res.send('<h1 style="color: blue">Página Contato</h1>')
);  