//const pessoal = {
   // nome: 'Lucas',
   // idade: 25,
   // cidade: 'São Paulo',
   // profissao: 'Desenvolvedor',
//};

//console.log(pessoal.nome); // Lucas
//console.log(pessoal.idade); // 25
//console.log(pessoal.cidade); // São Paulo
//console.log(pessoal.profissao); // Desenvolvedor


//function criaPessoa(nome, sobrenome, idade) {
   // return {
      //  nome: nome,
       // sobrenome: sobrenome,
       // idade: idade,
    //};
//}

//const pessoa1 = criaPessoa('Lucas', 'Silva', 25);
//console.log(pessoa1.nome); // Lucas
//console.log(pessoa1.sobrenome); // Silva


const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Silva',
    idade: 25,
    cidade: 'São Paulo',
    profissao: 'Desenvolvedor',

    fala() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e eu tenho ${this.idade} anos.`);
    }
    
};

pessoa1.fala(); // Olá, meu nome é Lucas Silva e eu tenho 25 anos.
//console.log(pessoa1.nome); // Lucas
      
           