const fs = require('fs');

fs.readFile('./PessoasVacinacao.json', 'utf-8', (err, peopleString) => {
    if (err) {
        console.log(err);
    } else {
      try {
        const data = JSON.parse(peopleString);
        // Filtro do Grupo 1 - Maiores de 60 anos
        const grupo1 = data.pessoas.filter(x=> x.idade>='60');
        console.log(grupo1);
        // Filtro do Grupo 2

      } catch (err) {
          console.log('Error parsing JSON', err);
      }
    }
}); 


