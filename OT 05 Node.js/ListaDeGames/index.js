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

app.get("/", (req, res) => {
    res.json(games);
})