let cidadeAtual, cidadeDestino, distanciaPercorrida, heuristica, custoAtual;

cidadeAtual = "boaVista";
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

//Função para buscar a elhor cidade
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

let filaCidades = [];
BuscaGulosa(cidadeAtual, cidadeDestino, filaCidades);
