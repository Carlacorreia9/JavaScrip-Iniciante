function meuEscopo() {
  const form = document.querySelector('.form');// Seleciona o formulário


//   form.onsubmit = function (evento) {// Previne o comportamento padrão do formulário
//     evento.preventDefault();// Impede o envio do formulário padrão
//     const nome = form.querySelector('.nome');// Seleciona o campo nome
//     const sobrenome = form.querySelector('.sobrenome');// Seleciona o campo sobrenome
//     const resultado = document.querySelector('.resultado');// Seleciona o campo resultado

//     resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}</p>`;// Adiciona o nome e sobrenome ao resultado
//     nome.value = '';// Limpa o campo nome
//     sobrenome.value = '';// Limpa o campo sobrenome
    


//alert('Formulário enviado'); // Envia o formulário padrão
//console.log('Formulário enviado'); // Envia o formulário padrão

// alert(1); // Envia o formulário padrão
//  console.log('Formulário enviado'); // Envia o formulário padrão
// alert(1);
// console.log('Formulário enviado');// Evita o envio do formulário

//   }; 

// Outro método de prevenir o envio do formulário é usar o evento 'submit' diretamente no HTML

form.addEventListener('submit', function (evento) {// Previne o comportamento padrão do formulário
    evento.preventDefault();// Impede o envio do formulário padrão
    const nome = form.querySelector('.nome');// Seleciona o campo nome
    const sobrenome = form.querySelector('.sobrenome');// Seleciona o campo sobrenome
    const resultado = document.querySelector('.resultado');// Seleciona o campo resultado

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}</p>`;// Adiciona o nome e sobrenome ao resultado
    nome.value = '';// Limpa o campo nome
    sobrenome.value = '';// Limpa o campo sobrenome
    
  });

}
 meuEscopo(); // Chama a função meuEscopo
// Chama a função meuEscopo