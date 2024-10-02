alert('Boas Vindas ao Jogo do Número Secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não foir igual
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
if(chute > numeroSecreto) {
          alert(`O número secreto é menor que o ${chute}`);
          } else {
          alert(`o número secreto é maior que o ${chute}`);

}

//tentativa s= tentativas + 1
tentativas++;
}

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);



 