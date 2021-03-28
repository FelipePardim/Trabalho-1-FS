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

let custoRotas = [];

function buscaCustoUniforme(
    cidadeAtual,
    cidadeDestino,
    cidadesVisitadas,
    custoTotal
) {
    cidadesVisitadas.push(cidadeAtual);

    console.log("Você chegou em: ", cidadeAtual);
    console.log("Seu custo é: ", custoTotal);
    console.log("Você visitou: ", cidadesVisitadas);

    if (cidadeAtual === cidadeDestino) {
        console.log("Chegou no destino");
        return cidadeDestino;
    } else {
        let cidadesFilhas = grafo[cidadeAtual];
        let cidadeMaisProxima;
        let cidadesFilhasVisitadas = 0;

        console.log("Cidades filhas: ", cidadesFilhas);

        cidadesFilhas.forEach((cidade, index) => {
            let rotaAnalizada = {};

            if (cidadesVisitadas.includes(cidade)) {
                cidadesFilhasVisitadas += 1;
            } else {
                if (!cidadeMaisProxima) {
                    cidadeMaisProxima = cidade;
                }

                if (
                    getDistanciaCidadeDestino(cidadeAtual, cidadeMaisProxima) >
                    getDistanciaCidadeDestino(cidadeAtual, cidade)
                ) {
                    cidadeMaisProxima = cidade;
                }
                
                rotaAnalizada = {
                    "cidade" : cidade,
                    "custo": getDistanciaCidadeDestino(cidadeAtual, cidade)
                }
                custoRotas.push(rotaAnalizada);

                console.log(
                    "Rota analizada está na lista de rotas: ",
                    custoRotas.includes(rotaAnalizada)
                );
            }
        });

        console.log("Custo Rotas: ", custoRotas[1]);
        console.log("Quantidade de Cidades Filhas: ", cidadesFilhas.length);
        console.log("Cidades Filhas Já Visitadas: ", cidadesFilhasVisitadas);
        console.log("Cidades mais próxima: ", cidadeMaisProxima);
        console.log("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");

        if (cidadesFilhasVisitadas == cidadesFilhas.length) {
            console.log("CIDADE FOLHA");
            return;
        } else {
            custoRotas.forEach((rota, index) => {
                if (cidadesVisitadas.includes(rota.cidade)) {
                    console.log("CIDADE JA VIISTADA");
                } else {
                    buscaCustoUniforme(
                        cidadeMaisProxima,
                        cidadeDestino,
                        cidadesVisitadas,
                        custoTotal
                    );
                }
            });
        }
    }
}

buscaCustoUniforme(cidadeAtual, cidadeDestino, [], 0);
