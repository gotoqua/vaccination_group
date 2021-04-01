const fs = require('fs');

fs.readFile('./PessoasVacinacao.json', 'utf-8', (err, peopleString) => {
    if (err) {
        console.log(err);
    } else {
      try {
        const data = JSON.parse(peopleString);

        // Filtro do Grupo 1 - Maiores de 60 anos
        const grupo1 = data.pessoas.filter(x=> x.idade>='60');
        // console.log(grupo1);

        // Filtro do Grupo 2 - Profissionais das áreas de: Saúde, Educação Alimentícios e Segurança.
        const grupo2 = data.pessoas.filter(x=> x.areaDeAtuacao==='Saúde' && x.idade<60 || x.areaDeAtuacao==='Segurança' && x.idade<60
        || x.areaDeAtuacao==='Educação' && x.idade<60 || x.areaDeAtuacao==='Alimentícios' && x.idade<60);
        console.log(grupo2);
        // const checkAge = grupo2.filter(x=> x.idade<60);         
        // console.log(checkAge);

        // Filtro do Grupo 3 -

      } catch (err) {
          console.log('Error parsing JSON', err);
      }
    }
}); 


