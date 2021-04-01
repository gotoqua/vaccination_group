const fs = require('fs');

fs.readFile('./PessoasVacinacao.json', 'utf-8', (err, peopleString) => {
    if (err) {
        console.log(err);
    } else {
      try {
        const data = JSON.parse(peopleString);

        // Filtro do Grupo 1 - Maiores de 60 anos
        const grupo1 = data.pessoas
        .filter(pessoa=> pessoa.idade>=60);
        
        // console.log(grupo1);

        // Filtro do Grupo 2 - Profissionais das áreas de: Saúde, Educação Alimentícios e Segurança.
        let grupo2 = data.pessoas
        .filter(pessoa => pessoa.idade < 60)
        .filter(pessoa => pessoa.areaDeAtuacao==='Saúde' ||
            pessoa.areaDeAtuacao === 'Segurança' ||
            pessoa.areaDeAtuacao === 'Educação' ||
            pessoa.areaDeAtuacao === 'Alimentícios')

        // console.log(grupo2);

        // Filtro do Grupo 3 - 
        const areasParaRemover = ['Saúde', 'Segurança', 'Educação', 'Alimentícios']

        let filtrados = data.pessoas
            .filter(pessoa => pessoa.idade < 60)
            .filter(pessoa => !areasParaRemover.includes(pessoa.areaDeAtuacao))
        
        let filtrados2 = data.pessoas
        .filter(pessoa => pessoa.idade < 60)
        .filter(pessoa => pessoa.areaDeAtuacao !== 'Saúde' && 
            pessoa.areaDeAtuacao !== 'Segurança' && 
            pessoa.areaDeAtuacao !== 'Educação' && 
            pessoa.areaDeAtuacao !== 'Alimentícios')

         console.log(filtrados, filtrados2);

      } catch (err) {
          console.log('Error parsing JSON', err);
      }
    }
}); 


