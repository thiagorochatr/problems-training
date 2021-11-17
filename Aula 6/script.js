var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://avatars.githubusercontent.com/u/54322854?v=4"};
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg"};
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: "https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1616501197.jpg"};

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rafa.pontos =calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += `
            <tr><td>${jogadores[i].nome}<br><img class='avatares' src=${jogadores[i].avatar}></td>
            <td>${jogadores[i].vitorias}</td>
            <td>${jogadores[i].empates}</td>
            <td>${jogadores[i].derrotas}</td>
            <td>${jogadores[i].pontos}</td>
            <td><button id="vitoria(${i})" class="vitoria" onClick='adicionarVitoria(${i})'>Vitória</button></td>
            <td><button id="empate(${i})" class="empate" onClick='adicionarEmpate(${i})'>Empate</button></td>
            <td><button id="derrota(${i})" class="derrota" onClick='adicionarDerrota(${i})'>Derrota</button></td>
            </tr>
        `
    }

    document.getElementById("tabelaJogadores").innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    let botaoEmpate = document.getElementById(`empate(${i})`);
    if (botaoEmpate.disabled == false) {
        let jogador = jogadores[i];
        jogador.vitorias++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
        ordemClassificacao();

        let botaoDerrota = document.getElementById(`derrota(${i})`);
        botaoDerrota.disabled = true;
        for (let c = 0; c < jogadores.length; c++) {
            let botaoEmpate = document.getElementById(`empate(${c})`);
            let botaoVitoria = document.getElementById(`vitoria(${c})`);
            botaoEmpate.disabled = true;
            botaoVitoria.disabled = true;
        }
    } else {
        let jogador = jogadores[i];
        jogador.vitorias++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
        
        let botaoDerrota = document.getElementById(`derrota(${i})`);
        botaoDerrota.disabled = false;
        for (let c = 0; c < jogadores.length; c++) {
            let botaoEmpate = document.getElementById(`empate(${c})`);
            let botaoVitoria = document.getElementById(`vitoria(${c})`);
            botaoEmpate.disabled = false;
            botaoVitoria.disabled = false; 
        }
    }
}

function adicionarEmpate(i) {
    let botaoDerrota = document.getElementById(`derrota(${i})`);
    if (botaoDerrota.disabled == false) {
        let jogador = jogadores[i];
        jogador.empates++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
        
        let botaoEmpate = document.getElementById(`empate(${i})`);
        botaoEmpate.disabled = true;
        for (let c = 0; c < jogadores.length; c++) {
            let botaoVitoria = document.getElementById(`vitoria(${c})`);
            let botaoDerrota = document.getElementById(`derrota(${c})`);
            botaoVitoria.disabled = true;
            botaoDerrota.disabled = true;
            ordemClassificacao();
        }
    } else {
        let jogador = jogadores[i];
        jogador.empates++;
        jogador.pontos = calculaPontos(jogador);
        exibeJogadoresNaTela(jogadores);
        
        let botaoEmpate = document.getElementById(`empate(${i})`);
        botaoEmpate.disabled = false;
        for (let c = 0; c < jogadores.length; c++) {
            let botaoVitoria = document.getElementById(`vitoria(${c})`);
            let botaoDerrota = document.getElementById(`derrota(${c})`);
            botaoVitoria.disabled = false;
            botaoDerrota.disabled = false;
            ordemClassificacao();
        }
    }
}

function adicionarDerrota(i) {
    let botaoEmpate = document.getElementById(`empate(${i})`);
    if (botaoEmpate.disabled == false) {
        let jogador = jogadores[i];
        jogador.derrotas++;
        exibeJogadoresNaTela(jogadores);
        
        let botaoVitoria = document.getElementById(`vitoria(${i})`);
        botaoVitoria.disabled = true;
        for (let c = 0; c < jogadores.length; c++) {
            let botaoDerrota = document.getElementById(`derrota(${c})`);
            let botaoEmpate = document.getElementById(`empate(${c})`);
            botaoDerrota.disabled = true;
            botaoEmpate.disabled = true;
            ordemClassificacao();
        }
    } else {
        let jogador = jogadores[i];
        jogador.derrotas++;
        exibeJogadoresNaTela(jogadores);
        
        let botaoVitoria = document.getElementById(`vitoria(${i})`);
        botaoVitoria.disabled = false;
        for (let c = 0; c < jogadores.length; c++) {
            let botaoDerrota = document.getElementById(`derrota(${c})`);
            let botaoEmpate = document.getElementById(`empate(${c})`);
            botaoDerrota.disabled = false;
            botaoEmpate.disabled = false;
            ordemClassificacao();
        }
    }
}

function zerarPontos(i) {
    for (var i = 0; i <jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = 0
    }
    exibeJogadoresNaTela(jogadores)
}

function adicionarJogador() {
    var nomeNovoJogador = document.getElementById("nomeNovoJogador").value;
    var avatarNovoJogador = document.getElementById("avatarNovoJogador").value;
    jogadores.push({nome: nomeNovoJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0, avatar: avatarNovoJogador})
    document.getElementById("nomeNovoJogador").value = "";
    document.getElementById("avatarNovoJogador").value = "";

    exibeJogadoresNaTela(jogadores);
    ordemClassificacao(jogadores);
}

function removerJogador() {
    var removerEsteJogador = document.getElementById("removerJogador").value;
    var posicaoRemover = jogadores.findIndex((i) => i.nome === removerEsteJogador);
    if (posicaoRemover >= 0) {
        jogadores.splice(posicaoRemover, 1)
        exibeJogadoresNaTela(jogadores)
        document.getElementById("removerJogador").value = "";
    } else if (posicaoRemover == -1) {
        document.getElementById("removerJogador").value = "";
    }
}

function ordemClassificacao() {
    jogadores.sort(function (a, b) {
        if (a.pontos < b.pontos) {
            return 1;
        } else if (a.pontos == b.pontos) {
            return 0;
        } else {
            return -1;
        }
    });
}



// ===Projetos para pegar ideias:
//                  https://codepen.io/rivnatzille/pen/GREdoGj?editors=0010
//                  https://codepen.io/guilpas/pen/jOwxyqO?editors=0010
//                  https://codepen.io/lfernandogcruz/pen/PojeYJe?editors=0010
//                  https://codepen.io/annereginatto/pen/YzQjLjM

// FAZER MELHORIAS 
// colocar uma condição de só adicionar um jogador caso tenha nome
// proibir adicionar dois jogadores com o mesmo nome
// fazer um if else na parte de "adicionar avatar". Caso a pessoa não coloque uma foto válida (terminando com jpg, jpeg, png, etc), adicionar uma foto transparente e pequena (para não ficar com aquele símbolo feio sem foto)
// Melhorar o design da página