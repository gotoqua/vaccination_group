const fs = require('fs');

fs.readFile('./PessoasVacinacao.json', 'utf-8', (err, peopleString) => {
    if (err) {
        console.log(err);
    } else {
      try {
        const data = JSON.parse(peopleString);

        // Filtro do Grupo 1 - Maiores de 60 anos
        console.log("Grupo 1 - Pessoas com idade à partir dos 60 anos")

        const grupo1 = data.pessoas
        .filter(pessoa=> pessoa.idade>=60);
        
        console.log(grupo1);

        // Filtro do Grupo 2 - Profissionais das áreas de: Saúde, Educação, Alimentícios e Segurança.
        console.log("Grupo 2 - Profissionais das áreas de: Saúde, Educação, Alimentícios e Segurança")

        let grupo2 = data.pessoas
        .filter(pessoa => pessoa.idade < 60)
        .filter(pessoa => pessoa.areaDeAtuacao==='Saúde' ||
            pessoa.areaDeAtuacao === 'Segurança' ||
            pessoa.areaDeAtuacao === 'Educação' ||
            pessoa.areaDeAtuacao === 'Alimentícios')

        console.log(grupo2);

        // Filtro do Grupo 3 - Pessoas de 30 à 59 anos
        console.log("Grupo 3 - Pessoas de 30 à 59 anos")

        const areasParaRemover = ['Saúde', 'Segurança', 'Educação', 'Alimentícios']

        let grupo3 = data.pessoas
            .filter(pessoa => pessoa.idade >= 30 && pessoa.idade < 60)
            .filter(pessoa => !areasParaRemover.includes(pessoa.areaDeAtuacao))

        console.log(grupo3);

        // Filtro do Grupo 4 - Pessoas com idade até 30 anos
        console.log("Grupo 4 - Pessoas com idade até 30 anos")

        let grupo4 = data.pessoas
            .filter(pessoa => pessoa.idade <= 30)
            .filter(pessoa => !areasParaRemover.includes(pessoa.areaDeAtuacao))

        console.log(grupo4);

      } catch (err) {
          console.log('Error parsing JSON', err);
      }
    }
}); 


