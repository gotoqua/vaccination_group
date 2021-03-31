const fs = require('fs');

fs.readFile('./PessoasVacinacao.json', 'utf-8', (err, peopleString) => {
    console.log(peopleString);
});