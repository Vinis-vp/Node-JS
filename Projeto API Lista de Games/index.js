import express from 'express';
import colecaoGames from './dados.js'

const app = express();

const buscarGamesPorNome = (nomeGame) => {
    return colecaoGames.filter(game => game.title.toLowerCase().includes(nomeGame.toLowerCase()));
}

app.get("/games", (req, res) => {
    const nomeGame = req.query.busca;
    const resultado = nomeGame ? buscarGamesPorNome(nomeGame) : colecaoGames;
    if (resultado.length > 0){
        res.json(resultado);    
    } else {
        res.status(404).send({ "erro": "Nenhum Game encontrado" });
    }
})

app.get('/games/:idgame', (req, res) => {
    const idGame = parseInt(req.params.idgame);
    let mensagemErro = '';
    let game;

    if (!(isNaN(idGame))) {
        game = colecaoGames.find(u => u.id === idGame);
        if (!game){
            mensagemErro = 'Game não encontrado';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ "erro": mensagemErro });
    }
});



app.use(express.json());

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price };

    games.push(newGame);

    res.send("OK");
    
});

app.put('/novogame/:index', (req, res) =>{
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price; 

    games[index] = { title, studio, price };

    return res.json(games);
});

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index,1);
    return res.json({message: "O Jogo foi deletado"});
});

app.listen(3080, () => {
    console.log("Servidor iniciado na porta 3080");
});