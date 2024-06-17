const express = require('express');
const app = express();

app.listen(3080, () => {
    console.log("Servidor rodando!");
});

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio:"Microsoft", price: 90},
    {title: "Hollow Knight", studio:"Team Cherry", price: 15},
    {title: "Euro Truck Simulator 2", studio:"SCS Software", price: 20},
    {title: "Elden Ring", studio:"FromSoftware", price: 60},
    {title: "Need for Speed: Underground 2", studio:"EA", price: 35}
]

app.use(express.json());

app.get("/", (req, res) => {
    res.json(games);
})

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