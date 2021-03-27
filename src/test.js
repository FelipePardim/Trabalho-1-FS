let cidadeAtual, cidadeDestino, distanciaPercorrida, heuristica, custoAtual;

cidadeAtual = "goiania";
cidadeDestino = "portoAlegre";
distanciaPercorrida = 0;
heuristica = 0;
custoAtual = 0;

grafo = require("../data/graph/graph.json");

//Função que retorna a distãncia entre a cidade atual e a cidade de destino
function getDistanciaCidadeDestino(cidadeAtual, cidadeDestino) {
    mapaDistancias = require(`../data/distance/${cidadeAtual}.json`);

    let distanciaDestino = mapaDistancias[cidadeDestino];

    return distanciaDestino;
}

//Algoritmo BFS
function BFS(cidadeAtual, cidadeDestino, filaCidades) {
    grafo = require("../data/graph/graph.json");

    console.log("Cidade Atual:" + cidadeAtual);

    let cidadesVizinhas = grafo[cidadeAtual];

    cidadesVizinhas.forEach((key, valor) =>
        filaCidades.push(cidadesVizinhas[valor])
    );

    cidadeAtual = filaCidades.shift();

    if (cidadeAtual === cidadeDestino) {
        console.log(
            `Você está em: ${cidadeAtual}, seu destino era: ${cidadeDestino}`
        );
        console.log("Você chegou em seu destino");
        return;
    } else {
        console.log("Pŕoxima cidade:" + cidadeAtual);
        BFS(cidadeAtual, (cidadeDestino = cidadeDestino), filaCidades);
    }
}

//Função para buscar a cidade mais próxima da cidade destino
async function buscaCidadeMaisProximoDestino(cidadesVizinhas) {
    let melhorCidade = cidadesVizinhas[0];
    await cidadesVizinhas.forEach((nomeCidade, valor) => {
        console.log("🏁" + nomeCidade);
        if (
            getDistanciaCidadeDestino(melhorCidade, cidadeDestino) >
            getDistanciaCidadeDestino(nomeCidade, cidadeDestino)
        ) {
            melhorCidade = nomeCidade;
            console.log(`Trocou de cidade- Melhor cidade: ${melhorCidade}`);
        }
    });

    return melhorCidade;
}

//Algoritmo BuscaGulosa
async function BuscaGulosa(cidadeAtual, cidadeDestino, filaCidades) {
    grafo = require("../data/graph/graph.json");

    console.log("Cidade Atual:" + cidadeAtual);

    let cidadesVizinhas = grafo[cidadeAtual];

    await buscaCidadeMaisProximoDestino(cidadesVizinhas).then((cidade) => {
        console.log(cidade);

        cidadeAtual = cidade;
        if (cidadeAtual === cidadeDestino) {
            console.log(
                `Você está em: ${cidadeAtual}, seu destino era: ${cidadeDestino}`
            );
            console.log("Você chegou em seu destino");
            return;
        } else {
            console.log("Pŕoxima cidade:" + cidadeAtual);
            BuscaGulosa(
                cidadeAtual,
                (cidadeDestino = cidadeDestino),
                filaCidades
            );
        }
    });
}

grafo = require("../data/graph/graph.json");
const caminhoCidades = [];
const pilhaCidadesVisitar = [];
//Algoritmo Busca de custo uniforme
function buscaCustoUniforme(cidadeAtual, cidadeDestino, custoTotal) {
    caminhoCidades.push(cidadeAtual);

    console.log("Caminho Cidades:", caminhoCidades);
    console.log("Cidade Atual:", cidadeAtual);
    console.log("Custo Total:", custoTotal);

    let cidadesVizinhas = grafo[cidadeAtual];
    let custoMelhorCidade, melhorCidade;

    console.log("Custo Vizinhas:", cidadesVizinhas);

    cidadesVizinhas.forEach((key, index) => {
        const lito = key != cidadeAtual && !caminhoCidades.includes(key);
        if (lito && cidadeAtual != melhorCidade) {
            custoMelhorCidade = getDistanciaCidadeDestino(
                cidadeAtual,
                cidadesVizinhas[index]
            );
            melhorCidade = cidadesVizinhas[index];
            console.log("PREENCHIDA MELHOR CIDADE", custoMelhorCidade);
        } else if (
            lito &&
            getDistanciaCidadeDestino(cidadeAtual, cidadesVizinhas[index]) <=
                custoMelhorCidade
        ) {
            console.log("PRIMEIRA VALIDAçÃO", cidadesVizinhas[index]);
            custoMelhorCidade = getDistanciaCidadeDestino(
                cidadeAtual,
                cidadesVizinhas[index]
            );
            melhorCidade = cidadesVizinhas[index];
        }
    });

    console.log("Cidade mais proxima" + custoMelhorCidade);

    if (melhorCidade === cidadeDestino) {
        console.log("ACHOU");
    } else if (caminhoCidades.includes(melhorCidade)) {
        console.log("CIDADE SEM SAIDA", melhorCidade);
        pilhaCidadesVisitar.unshift();

        buscaCustoUniforme(
            pilhaCidadesVisitar[pilhaCidadesVisitar.length-1],
            cidadeDestino,
            custoTotal + custoMelhorCidade
        );
    } else {
        console.log("Indo para", melhorCidade);

        pilhaCidadesVisitar.push(melhorCidade);

        buscaCustoUniforme(
            melhorCidade,
            cidadeDestino,
            custoTotal + custoMelhorCidade
        );
    }
}

let filaCidades = [];
buscaCustoUniforme(cidadeAtual, cidadeDestino, 0);
