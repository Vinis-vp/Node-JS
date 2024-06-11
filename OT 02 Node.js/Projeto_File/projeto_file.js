var fs = require('fs');
fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
if (err) throw err;
console.log('Arquivo Salvo!');
});var fs = require('fs');

fs.writeFile('novo.txt', 'olá NodeJS! SENAI 2024', function(err){
    if (err) throw err;
    console.log('Arquivo modificado');
})

fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function(err){
    if (err) throw err;
    console.log('Arquivo Renomeado');
});