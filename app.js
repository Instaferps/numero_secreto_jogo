let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
tentativas = Number(tentativas);
exibirMsgInicial()


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMsgInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escreva um número entre 1 à ${numeroLimite}.`);
};

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;
    if (chute >= numeroSecreto) {
        if (chute == numeroSecreto) {
            let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
            exibirTextoNaTela('h1', 'Parabéns, Você Acertou!');
            exibirTextoNaTela('p', `Você descobriu o número secreto (${chute}) em ${tentativas} ${palavraTentativa}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            return chute;
        } else {
            exibirTextoNaTela('p', `${chute} é maior do que o número Secreto. Escolha novamente um número de 1 à ${numeroLimite}.`);
        }
    } else {
        exibirTextoNaTela('p', `${chute} é menor do que o número Secreto. Escolha novamente um número de 1 à ${numeroLimite}.`);
    }
    limparCampo();
};

function gerarNumeroAleatorio() {
    console.log('Numero aleatório gerado.')
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    console.log(quantidadeDeElementosNaLista);
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        console.log('Lista foi limpa');
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        console.log('O número gerado estava contido')
        return gerarNumeroAleatorio();
    } else {
        console.log(numeroEscolhido);
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    };
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 0;
    exibirMsgInicial();    
};