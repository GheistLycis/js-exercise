let userName = prompt('Digite seu nome:');
let userAge = prompt('Digite sua idade:');
let i = 0;

while(i==0){
    if(isNaN(userAge) || userAge == 0){
        alert('Número inválido!');
        userAge = prompt('Digite sua idade:');
    }
    else{
        i++;
    }
}

function isThomasAnderson(name){
    if(name.toLowerCase().replace(/ /g, '') == 'thomasanderson') return true;
}

document.write(
    `Olá ${userName}, você é ${(userAge >= 18) ? 'maior' : 'menor'} de idade! 
    ${(isThomasAnderson(userName)) ? 'E você é um personagem do filme Matrix!' : ''}`
);

//CRIAR BUTTON 'ENTRAR' QUE VAI TRIGGAR O SCRIPT
//PRINTAR A MENSAGEM NUM H1
//PRINTAR A MENSAGEM ESPECIAL NUM H2