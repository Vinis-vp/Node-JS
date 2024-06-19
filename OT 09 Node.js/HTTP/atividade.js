//-----Atividade OT 09-----
import express from 'express';

const app = express();

var listaCarros = [
    {name: "Civic Type-R 2024", brand: "Honda", price: 430000},
    {name: "Corolla GR 2024", brand: "Toyota", price: 460000},
    {name: "GT-R 2024", brand: "Nissan", price: 600000},
    {name: "R8 V10", brand: "Audi", price: 950000},
    {name: "Mustang", brand: "Ford", price: 380000},
    {name: "718 2024", brand: "`Porsche`", price: 615000},
]

app.use(express.json());

app.get('/', (req, res) => {
    res.json(listaCarros);
});

app.post('/novoCarro', (req, res) => {
    let name = req.body.name;
    let brand = req.body.brand;
    let price = req.body.price;
    
    console.log(name);
    console.log(brand);
    console.log(price);

    let newCar = { name, brand, price };

    listaCarros.push(newCar);

    res.send("OK"); 
});
/* Carros as serem adicionados.
"name": "Marea",
  "brand": "Fiat",
  "price": 30000
  
  "name": "Savero G4",
  "brand": "volkswagen",
  "price": 35000
  
  "name": "Stilo",
  "brand": "Fiat",
  "price": 60000

*/  

app.put('/novoCarro/:index',(req,res) => {

    const { index } = req.params;
    let name = req.body.name;
    let brand = req.body.brand;
    let price = req.body.price; 

    listaCarros[index] = { name, brand, price };

    return res.json(listaCarros);

});

/* Novo Carro a ser atualizado na lista

"name": "Puma GTS",
"brand": "Puma",
"price": 45000

"name": "Uno mille",
"brand": "Fiat",
"price": 12000

*/

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    listaCarros.splice(index,1);
    return res.json({message: "O Jogo foi deletado"});
});

app.listen(3080, () =>
    console.log('Servidor iniciando na porta 3080')
);