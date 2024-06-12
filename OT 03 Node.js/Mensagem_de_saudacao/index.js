let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();

let saudacao;

if(hora <=11){
    saudacao = "Bom dia!";
} else if (hora <= 17){
    saudacao = "Boa Tarde!";
} else {
    saudacao = "Boa Noite!";
}

console.log("Olá!"+ saudacao);
console.log("Agora são" +hora+"horas e "+min+"minutos.");