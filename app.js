let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag)
  campo.innerHTML = texto;
}

function mensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do numero secreto');
  exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');  
}
mensagemInicial()

function verificarChute(){
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!!!');
    let textoTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
    exibirTextoNaTela('p', 'Voce acertou o numero aleatorio (' + numeroSecreto + ') com ' + tentativas + ' ' + textoTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled')
    } else if(numeroSecreto > chute){
      exibirTextoNaTela('p', 'Numero secreto é maior que ' + chute);
    } else if(numeroSecreto < chute){
      exibirTextoNaTela('p', 'Numero secreto é menor que ' + chute);
    }
    tentativas++;
    limparCampo();
  } 

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else {
    console.log(listaDeNumerosSorteados);
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
} 

function limparCampo(){
  chute = document .querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true);
}