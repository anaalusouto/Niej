const perguntas = [
    {
        pergunta: "Qual é o principal objetivo do projeto Gaia?",
        opcoes: ["a) Promover o desenvolvimento econômico local", "b) Melhorar a qualidade de vida das comunidades de alto risco", "c) Fomentar a preservação ambiental"],
        resposta: "b"
    },
    {
        pergunta: "Qual o primeiro projeto criado no NIEJ?",
        opcoes: ["a) Esse Rio é Minha Rua", "b) Sócrates", "c) Ilhas Legais"],
        resposta: "a"
    },
    {
        pergunta: "Em qual comunidade o projeto Ilhas Legais está atuando?",
        opcoes: ["a) São Francisco do Itá", "b) Cruzeirinho", "c) Periquitaquara"],
        resposta: "a"
    },
    {
        pergunta: "Qual é o principal objetivo do projeto Lótus?",
        opcoes: ["a) Estimular a autonomia das comunidades por meio de ações pautadas nos pilares de saúde, educação, cultura, empreendedorismo e jurídico", "b) Desenvolver tecnologias para comunidades ribeirinhas, de maneira a levar acesso a direitos básicos à educação à distância", "c) Estimular a autonomia das comunidades por meio da bioeconomia sustentável"],
        resposta: "a"
    },
    {
        pergunta: "O que o projeto Amazonças busca promover na comunidade da Ilha das Onças?",
        opcoes: ["a) Capacitação em tecnologia e agricultura", "b) Desenvolvimento econômico através do cacau", "c) Preservação da cultura local"],
        resposta: "b"
    },
    {
        pergunta: "Qual é a principal missão do projeto Singular?",
        opcoes: ["a) Oferecer assistência jurídica a comunidades carentes", "b) Desenvolver habilidades comportamentais em jovens", "c) Promover a inclusão de pessoas com deficiência e transtornos"],
        resposta: "c"
    },
    {
        pergunta: "O que significa a sigla do projeto RIT?",
        opcoes: ["a) Rede de Ideias e Talentos", "b) Rede de Inovação e Tecnologia", "c) Rede Interna de Talentos"],
        resposta: "a"
    },
    {
        pergunta: "Qual foi a primeira demanda desenvolvida pelo projeto Hefesto?",
        opcoes: ["a) Filtro de água", "b) Aplicativo de saúde", "c) Escovódromo Portátil"],
        resposta: "c"
    },
    {
        pergunta: "Quais são os valores do NIEJ?",
        opcoes: ["a) Essencialismo, Autenticidade, Inovação e Integração", "b) Empatia, Cooperação, Honestidade e Eficiência", "c) Solidariedade, Disciplina, Justiça e Criatividade"],
        resposta: "a"
    },
    {
        pergunta: "O que o NIEJ busca priorizar em suas ações, de acordo com seu valor de 'Essencialismo'?",
        opcoes: ["a) Qualidade sobre quantidade", "b) Quanto mais, melhor", "c) Conformidade com padrões estabelecidos"],
        resposta: "a"
    }
];

let indicePerguntaAtual = 0;
let pontos = 0;

const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const proximoBotao = document.getElementById("proximo");
const resultadoElemento = document.getElementById("resultado");

function mostrarPergunta() {
    const pergunta = perguntas[indicePerguntaAtual];
    perguntaElemento.innerText = pergunta.pergunta;

    opcoesElemento.innerHTML = "";
    pergunta.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.addEventListener("click", () => responder(opcao[0]));
        opcoesElemento.appendChild(botao);
    });
}

function responder(resposta) {
    if (resposta === perguntas[indicePerguntaAtual].resposta) {
        pontos++;
        resultadoElemento.innerText = "Resposta correta!";
    } else {
        resultadoElemento.innerText = "Resposta incorreta!";
    }

    proximoBotao.style.display = "block";
}

proximoBotao.addEventListener("click", () => {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
        proximoBotao.style.display = "none";
        resultadoElemento.innerText = "";
    } else {
        perguntaElemento.innerText = "Fim do Jogo!";
        opcoesElemento.innerHTML = "";
        proximoBotao.style.display = "none";
        resultadoElemento.innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
    }
});

mostrarPergunta();

// Função para adicionar um jogador ao ranking e salvar localmente
function adicionarUsuario(nome, projeto) {
    const usuario = { nome, projeto };
    // Aqui você pode adicionar lógica adicional, como enviar os dados do usuário para um servidor, etc.
    console.log('Novo usuário adicionado:', usuario);
}

// Adicionar evento de clique ao botão "Adicionar ao Ranking"
document.getElementById('adicionar-ranking').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const projeto = document.getElementById('projeto').value;
   
    adicionarUsuario(nome, projeto);
});
