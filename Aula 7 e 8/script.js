var carta1 = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu de Dragão",
    imagem: "https://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg",
    atributos: {
        ataque: 5,
        defesa: 7,
        magia: 9
    }
};

var carta4 = {
    nome: "Yumiko",
    imagem: "http://www.brawlhalla.com/c/uploads/2017/05/Yumiko-2.jpg",
    atributos: {
        ataque: 7,
        defesa: 5,
        magia: 9
    }
};

var carta5 = {
    nome: "Mordex",
    imagem: "https://i.redd.it/18wcrggzjbu41.png",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 3
    }
};

var carta6 = {
    nome: "Ash",
    imagem: "https://i.pinimg.com/564x/a2/de/d4/a2ded40108a587bfe929a3d52194f956.jpg",
    atributos: {
        ataque: 8,
        defesa: 5,
        magia: 1
    }
};

var carta7 = {
    nome: "Default",
    imagem: "http://pm1.narvii.com/6868/09cd3b778429f488414e83f3aae418ebee7b5ec7r1-1280-720v2_uhq.jpg",
    atributos: {
        ataque: 6,
        defesa: 4,
        magia: 10
    }
};

var carta8 = {
    nome: "Feiticeira Escarlate",
    imagem: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/01/Scarlet-Witch-Avengers-Endgame.jpg",
    atributos: {
        ataque: 8,
        defesa: 3,
        magia: 10
    }
};

var carta9 = {
    nome: "Gaules",
    imagem: "https://wp-superpoker.s3.amazonaws.com/wp-content/uploads/2021/03/gaules.jpg",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 3
    }
};

var carta10 = {
    nome: "Fallen",
    imagem: "https://pbs.twimg.com/media/Ecp2ga3XoAIo19p.jpg",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 8
    }
};

var cartas = [
    carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var indiceCartaMaquina = parseInt(Math.random()*cartas.length);
    cartaMaquina = cartas[indiceCartaMaquina];

    var indiceCartaJogador = parseInt(Math.random()*cartas.length);
// Para o código não sortear a mesma carta nas duas vezes
    while (indiceCartaMaquina == indiceCartaJogador) {
        indiceCartaJogador = parseInt(Math.random()*cartas.length);
    }
// Existem diversas formas de resolver esse mesmo problema. Outras duas formas
// são: 1) Embaralhar a array e pegar os dois primeiros elementos. 2) Sortear
// o primeiro elemento, tirar ele da array, e sortear o segundo elemento
    cartaJogador = cartas[indiceCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
    exibirCartaMaquinaOculta();

    document.getElementById("resultado").innerHTML = "";
};

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "Você venceu!"
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "Você perdeu :("
    } else {
        elementoResultado.innerHTML = "Empatou..."
    }

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " - " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + tagHTML + nome + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " - " + cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + tagHTML + nome + opcoesTexto + "</div>"
}

function exibirCartaMaquinaOculta() {
    var divCartaMaquinaOculta = document.getElementById("carta-maquina");
    divCartaMaquinaOculta.style.backgroundImage = `url(https://www.plataformamedia.com/wp-content/uploads/2020/06/imagem-preta.jpg)`

    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>"

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    divCartaMaquinaOculta.innerHTML = moldura + tagHTML + "</div>"
}


// ========== DESAFIOS AULA 7:
// == Resolver o problema de fazer o radio button ser obrigatório. Formas de resolver: 1)tornar obrigatório escolher uma opção. 2)escolher um por default. Tem como resolver por if, random, HTML,...

// ========== DESAFIOS AULA 8:
// == Desenvolver um sistema em que a cada carta que um jogador ganhe, ele fique com a carta do oponente e vice versa
// == Transformar as funções exibirCartaMaquina() e exibirCartaJogador() em apenas uma, chamada exibirCarta(), utilizando para isso a passagem de parâmetros