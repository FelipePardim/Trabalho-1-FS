"use strict";

// Map URL:
// https://i.imgur.com/rAe8QIy.jpg

let cities = [
    {
        name: "Aracaju",
        h: {
            Aracaju: 0,
            Belem: 1641,
            BeloHorizonte: 1248,
            BoaVista: 3022,
            Brasilia: 1292,
            CampoGrande: 2155,
            Cuiaba: 2121,
            Curitiba: 2061,
            Florianopolis: 2207,
            Fortaleza: 815,
            Goiania: 1461,
            JoaoPessoa: 486,
            Macapa: 1967,
            Maceio: 201,
            Manaus: 2673,
            Natal: 604,
            Palmas: 1235,
            PortoAlegre: 258,
            PortoVelho: 2946,
            Recife: 398,
            RioBranco: 3359,
            RioDeJaneiro: 1482,
            Salvador: 277,
            SaoLuis: 1226,
            SaoPaulo: 1731,
            Teresina: 903,
            Vitoria: 1102,
        },
        nearby: [
            {
                name: "Maceio",
                cost: 201,
                // h: 374,
            },
            {
                name: "Salvador",
                cost: 277,
                // h: 253,
            },
        ],
    },
    {
        name: "Belem",
        h: {
            Aracaju: 2079,
            Belem: 0,
            BeloHorizonte: 2111,
            BoaVista: 1432,
            Brasilia: 1592,
            CampoGrande: 2212,
            Cuiaba: 1778,
            Curitiba: 2665,
            Florianopolis: 2904,
            Fortaleza: 1133,
            Goiania: 1693,
            JoaoPessoa: 1636,
            Macapa: 329,
            Maceio: 168,
            Manaus: 1292,
            Natal: 155,
            Palmas: 973,
            PortoAlegre: 3188,
            PortoVelho: 1886,
            Recife: 1676,
            RioBranco: 2333,
            RioDeJaneiro: 245,
            Salvador: 1687,
            SaoLuis: 481,
            SaoPaulo: 2463,
            Teresina: 750,
            Vitoria: 2275,
        },
        nearby: [
            {
                name: "Manaus",
                cost: 1292,
                // h: 374,
            },
            {
                name: "Macapa",
                cost: 329,
                // h: 253,
            },
        ],
    },
    {
        name: "BeloHorizonte",
        h: {
            Aracaju: 1248,
            Belem: 2111,
            BeloHorizonte: 0,
            BoaVista: 3117,
            Brasilia: 624,
            CampoGrande: 1118,
            Cuiaba: 1372,
            Curitiba: 820,
            Florianopolis: 973,
            Fortaleza: 1893,
            Goiania: 666,
            JoaoPessoa: 1726,
            Macapa: 2349,
            Maceio: 1439,
            Manaus: 2556,
            Natal: 1831,
            Palmas: 1178,
            PortoAlegre: 1341,
            PortoVelho: 2477,
            Recife: 1639,
            RioBranco: 2786,
            RioDeJaneiro: 339,
            Salvador: 964,
            SaoLuis: 1932,
            SaoPaulo: 489,
            Teresina: 1652,
            Vitoria: 378,
        },
        nearby: [
            {
                name: "RioDeJaneiro",
                cost: 339,
            },
            {
                name: "SaoPaulo",
                cost: 489,
            },
            {
                name: "Brasilia",
                cost: 624,
            },
        ],
    },
    {
        name: "BoaVista",
        h: {
            Aracaju: 3022,
            Belem: 1432,
            BeloHorizonte: 3117,
            BoaVista: 0,
            Brasilia: 2496,
            CampoGrande: 2667,
            Cuiaba: 2107,
            Curitiba: 337,
            Florianopolis: 362,
            Fortaleza: 2562,
            Goiania: 2503,
            JoaoPessoa: 3067,
            Macapa: 111,
            Maceio: 3089,
            Manaus: 661,
            Natal: 2983,
            Palmas: 1988,
            PortoAlegre: 3785,
            PortoVelho: 1335,
            Recife: 3103,
            RioBranco: 1626,
            RioDeJaneiro: 3428,
            Salvador: 3009,
            SaoLuis: 1913,
            SaoPaulo: 33,
            Teresina: 2169,
            Vitoria: 3394,
        },
        nearby: [
            {
                name: "Manaus",
                cost: 661,
            },
        ],
    },
    {
        name: "Brasilia",
        h: {
            Aracaju: 1292,
            Belem: 1592,
            BeloHorizonte: 624,
            BoaVista: 2496,
            Brasilia: 0,
            CampoGrande: 878,
            Cuiaba: 873,
            Curitiba: 1081,
            Florianopolis: 1314,
            Fortaleza: 1687,
            Goiania: 173,
            JoaoPessoa: 1716,
            Macapa: 1791,
            Maceio: 1485,
            Manaus: 1932,
            Natal: 1775,
            Palmas: 620,
            PortoAlegre: 1619,
            PortoVelho: 1900,
            Recife: 1657,
            RioBranco: 2246,
            RioDeJaneiro: 933,
            Salvador: 1060,
            SaoLuis: 1524,
            SaoPaulo: 873,
            Teresina: 1313,
            Vitoria: 947,
        },
        nearby: [
            {
                name: "Palmas",
                cost: 620,
            },
            {
                name: "Manaus",
                cost: 1932,
            },
            {
                name: "Cuiaba",
                cost: 873,
            },
            {
                name: "Goiania",
                cost: 173,
            },
            {
                name: "SaoPaulo",
                cost: 873,
            },
            {
                name: "BeloHorizonte",
                cost: 624,
            },
            {
                name: "Fortaleza",
                cost: 1687,
            },
        ],
    },
    {
        name: "CampoGrande",
        h: {
            Aracaju: 2155,
            Belem: 2212,
            BeloHorizonte: 1118,
            BoaVista: 2667,
            Brasilia: 878,
            CampoGrande: 0,
            Cuiaba: 559,
            Curitiba: 780,
            Florianopolis: 1007,
            Fortaleza: 2547,
            Goiania: 705,
            JoaoPessoa: 2593,
            Macapa: 2309,
            Maceio: 2352,
            Manaus: 2013,
            Natal: 2654,
            Palmas: 132,
            PortoAlegre: 1119,
            PortoVelho: 1634,
            Recife: 253,
            RioBranco: 1827,
            RioDeJaneiro: 1212,
            Salvador: 1905,
            SaoLuis: 2284,
            SaoPaulo: 894,
            Teresina: 2132,
            Vitoria: 149,
        },
        nearby: [
            {
                name: "Cuiaba",
                cost: 780,
            },
            {
                name: "Curitiba",
                cost: 559,
            },
        ],
    },
    {
        name: "Cuiaba",
        h: {
            Aracaju: 2121,
            Belem: 1778,
            BeloHorizonte: 1372,
            BoaVista: 2107,
            Brasilia: 873,
            CampoGrande: 559,
            Cuiaba: 0,
            Curitiba: 1302,
            Florianopolis: 1543,
            Fortaleza: 2329,
            Goiania: 740,
            JoaoPessoa: 2495,
            Macapa: 1822,
            Maceio: 2302,
            Manaus: 1453,
            Natal: 2524,
            Palmas: 1029,
            PortoAlegre: 1679,
            PortoVelho: 1137,
            Recife: 2452,
            RioBranco: 1414,
            RioDeJaneiro: 1575,
            Salvador: 1915,
            SaoLuis: 1942,
            SaoPaulo: 1326,
            Teresina: 1862,
            Vitoria: 1745,
        },
        nearby: [
            {
                name: "PortoVelho",
                cost: 1137,
            },
            {
                name: "Brasilia",
                cost: 873,
            },
            {
                name: "SaoPaulo",
                cost: 1326,
            },
            {
                name: "CampoGrande",
                cost: 559,
            },
        ],
    },
    {
        name: "Curitiba",
        h: {
            Aracaju: 2061,
            Belem: 2665,
            BeloHorizonte: 820,
            BoaVista: 3370,
            Brasilia: 1081,
            CampoGrande: 780,
            Cuiaba: 1302,
            Curitiba: 0,
            Florianopolis: 251,
            Fortaleza: 267,
            Goiania: 972,
            JoaoPessoa: 2545,
            Macapa: 2836,
            Maceio: 2259,
            Manaus: 2734,
            Natal: 2645,
            Palmas: 1693,
            PortoAlegre: 546,
            PortoVelho: 2412,
            Recife: 2459,
            RioBranco: 2601,
            RioDeJaneiro: 675,
            Salvador: 1784,
            SaoLuis: 2599,
            SaoPaulo: 338,
            Teresina: 2362,
            Vitoria: 1076,
        },
        nearby: [
            {
                name: "Cuiaba",
                cost: 1302,
            },
            {
                name: "SaoPaulo",
                cost: 338,
            },
            {
                name: "Florianopolis",
                cost: 251,
            },
        ],
    },
    {
        name: "Florianopolis",
        h: {
            Aracaju: 2207,
            Belem: 2904,
            BeloHorizonte: 973,
            BoaVista: 362,
            Brasilia: 1314,
            CampoGrande: 1007,
            Cuiaba: 1543,
            Curitiba: 251,
            Florianopolis: 0,
            Fortaleza: 2857,
            Goiania: 1215,
            JoaoPessoa: 2693,
            Macapa: 3082,
            Maceio: 2402,
            Manaus: 2981,
            Natal: 2802,
            Palmas: 1931,
            PortoAlegre: 376,
            PortoVelho: 2641,
            Recife: 2603,
            RioBranco: 2809,
            RioDeJaneiro: 748,
            Salvador: 1.93,
            SaoLuis: 2821,
            SaoPaulo: 489,
            Teresina: 2573,
            Vitoria: 116,
        },
        nearby: [
            {
                name: "PortoAlegre",
                cost: 376,
            },
            {
                name: "Curitiba",
                cost: 251,
            },
        ],
    },
    {
        name: "Fortaleza",
        h: {
            Aracaju: 815,
            Belem: 1133,
            BeloHorizonte: 1893,
            BoaVista: 2562,
            Brasilia: 1687,
            CampoGrande: 2547,
            Cuiaba: 2329,
            Curitiba: 3541,
            Florianopolis: 2857,
            Fortaleza: 0,
            Goiania: 1854,
            JoaoPessoa: 555,
            Macapa: 1451,
            Maceio: 730,
            Manaus: 2383,
            Natal: 435,
            Palmas: 2035,
            PortoAlegre: 3213,
            PortoVelho: 2855,
            Recife: 629,
            RioBranco: 3300,
            RioDeJaneiro: 219,
            Salvador: 1028,
            SaoLuis: 652,
            SaoPaulo: 2368,
            Teresina: 495,
            Vitoria: 1855,
        },
        nearby: [
            {
                name: "Natal",
                cost: 435,
            },
            {
                name: "Recife",
                cost: 629,
            },
            {
                name: "Salvador",
                cost: 1028,
            },
            {
                name: "Brasilia",
                cost: 1687,
            },
            {
                name: "Teresina",
                cost: 495,
            },
            {
                name: "SaoLuis",
                cost: 652,
            },
        ],
    },
    {
        name: "Goiania",
        h: {
            Aracaju: 1461,
            Belem: 1693,
            BeloHorizonte: 666,
            BoaVista: 2503,
            Brasilia: 173,
            CampoGrande: 705,
            Cuiaba: 740,
            Curitiba: 972,
            Florianopolis: 1215,
            Fortaleza: 1854,
            Goiania: 0,
            JoaoPessoa: 1889,
            Macapa: 1868,
            Maceio: 1656,
            Manaus: 1912,
            Natal: 1948,
            Palmas: 724,
            PortoAlegre: 1497,
            PortoVelho: 1813,
            Recife: 1829,
            RioBranco: 2138,
            RioDeJaneiro: 936,
            Salvador: 1225,
            SaoLuis: 1662,
            SaoPaulo: 810,
            Teresina: 1467,
            Vitoria: 1022,
        },
        nearby: [
            {
                name: "Brasilia",
                cost: 173,
            },
        ],
    },
    {
        name: "JoaoPessoa",
        h: {
            Aracaju: 486,
            Belem: 1636,
            BeloHorizonte: 1726,
            BoaVista: 3067,
            Brasilia: 1716,
            CampoGrande: 2593,
            Cuiaba: 2495,
            Curitiba: 2545,
            Florianopolis: 2693,
            Fortaleza: 555,
            Goiania: 1889,
            JoaoPessoa: 0,
            Macapa: 1964,
            Maceio: 299,
            Manaus: 2819,
            Natal: 151,
            Palmas: 1521,
            PortoAlegre: 3066,
            PortoVelho: 3200,
            Recife: 104,
            RioBranco: 3632,
            RioDeJaneiro: 1968,
            Salvador: 763,
            SaoLuis: 1162,
            SaoPaulo: 2216,
            Teresina: 905,
            Vitoria: 1581,
        },
        nearby: [
            {
                name: "Recife",
                cost: 104,
            },
            {
                name: "Natal",
                cost: 151,
            },
        ],
    },
    {
        name: "Macapa",
        h: {
            Aracaju: 1967,
            Belem: 329,
            BeloHorizonte: 2349,
            BoaVista: 111,
            Brasilia: 1791,
            CampoGrande: 2309,
            Cuiaba: 1822,
            Curitiba: 2836,
            Florianopolis: 3082,
            Fortaleza: 1451,
            Goiania: 1868,
            JoaoPessoa: 1964,
            Macapa: 0,
            Maceio: 2009,
            Manaus: 1054,
            Natal: 1874,
            Palmas: 1177,
            PortoAlegre: 3341,
            PortoVelho: 1724,
            Recife: 2005,
            RioBranco: 2159,
            RioDeJaneiro: 2687,
            Salvador: 20,
            SaoLuis: 803,
            SaoPaulo: 2664,
            Teresina: 1079,
            Vitoria: 2545,
        },
        nearby: [
            {
                name: "Belem",
                cost: 329,
            },
        ],
    },
    {
        name: "Maceio",
        h: {
            Aracaju: 201,
            Belem: 1680,
            BeloHorizonte: 1439,
            BoaVista: 3089,
            Brasilia: 1485,
            CampoGrande: 2352,
            Cuiaba: 2302,
            Curitiba: 2259,
            Florianopolis: 2402,
            Fortaleza: 730,
            Goiania: 1656,
            JoaoPessoa: 299,
            Macapa: 2009,
            Maceio: 0,
            Manaus: 2778,
            Natal: 434,
            Palmas: 1383,
            PortoAlegre: 2775,
            PortoVelho: 3090,
            Recife: 202,
            RioBranco: 3510,
            RioDeJaneiro: 1671,
            Salvador: 475,
            SaoLuis: 1234,
            SaoPaulo: 1928,
            Teresina: 929,
            Vitoria: 1282,
        },
        nearby: [
            {
                name: "Recife",
                cost: 202,
            },
            {
                name: "Aracaju",
                cost: 201,
            },
        ],
    },
    {
        name: "Manaus",
        h: {
            Aracaju: 2673,
            Belem: 1292,
            BeloHorizonte: 2556,
            BoaVista: 661,
            Brasilia: 1932,
            CampoGrande: 2013,
            Cuiaba: 1453,
            Curitiba: 2734,
            Florianopolis: 2981,
            Fortaleza: 2383,
            Goiania: 1912,
            JoaoPessoa: 2819,
            Macapa: 1054,
            Maceio: 2778,
            Manaus: 0,
            Natal: 2765,
            Palmas: 1509,
            PortoAlegre: 3132,
            PortoVelho: 761,
            Recife: 2833,
            RioBranco: 1149,
            RioDeJaneiro: 2849,
            Salvador: 2605,
            SaoLuis: 1746,
            SaoPaulo: 2689,
            Teresina: 1921,
            Vitoria: 2865,
        },
        nearby: [
            {
                name: "BoaVista",
                cost: 661,
            },
            {
                name: "RioBranco",
                cost: 1149,
            },
            {
                name: "Belem",
                cost: 1292,
            },
            {
                name: "PortoVelho",
                cost: 761,
            },
            {
                name: "Brasilia",
                cost: 1932,
            },
        ],
    },
    {
        name: "Natal",
        h: {
            Aracaju: 604,
            Belem: 1550,
            BeloHorizonte: 1831,
            BoaVista: 2983,
            Brasilia: 1775,
            CampoGrande: 2654,
            Cuiaba: 2524,
            Curitiba: 2645,
            Florianopolis: 2802,
            Fortaleza: 435,
            Goiania: 1948,
            JoaoPessoa: 151,
            Macapa: 1874,
            Maceio: 434,
            Manaus: 2765,
            Natal: 0,
            Palmas: 1527,
            PortoAlegre: 3172,
            PortoVelho: 3179,
            Recife: 253,
            RioBranco: 3616,
            RioDeJaneiro: 2085,
            Salvador: 875,
            SaoLuis: 1071,
            SaoPaulo: 2320,
            Teresina: 843,
            Vitoria: 1706,
        },
        nearby: [
            {
                name: "JoaoPessoa",
                cost: 151,
            },
            {
                name: "Fortaleza",
                cost: 435,
            },
            {
                name: "Salvador",
                cost: 875,
            },
        ],
    },
    {
        name: "Palmas",
        h: {
            Aracaju: 1235,
            Belem: 973,
            BeloHorizonte: 1178,
            BoaVista: 1988,
            Brasilia: 620,
            CampoGrande: 132,
            Cuiaba: 1029,
            Curitiba: 1693,
            Florianopolis: 1931,
            Fortaleza: 13,
            Goiania: 724,
            JoaoPessoa: 1521,
            Macapa: 1177,
            Maceio: 1383,
            Manaus: 1509,
            Natal: 1527,
            Palmas: 0,
            PortoAlegre: 2222,
            PortoVelho: 1711,
            Recife: 1498,
            RioBranco: 2127,
            RioDeJaneiro: 1512,
            Salvador: 1114,
            SaoLuis: 964,
            SaoPaulo: 1493,
            Teresina: 835,
            Vitoria: 1413,
        },
        nearby: [
            {
                name: "Brasilia",
                cost: 620,
            },
        ],
    },
    {
        name: "PortoAlegre",
        h: {
            Aracaju: 2580,
            Belem: 3188,
            BeloHorizonte: 1341,
            BoaVista: 3785,
            Brasilia: 1619,
            CampoGrande: 1119,
            Cuiaba: 1679,
            Curitiba: 546,
            Florianopolis: 376,
            Fortaleza: 3213,
            Goiania: 1497,
            JoaoPessoa: 3066,
            Macapa: 3341,
            Maceio: 2775,
            Manaus: 3132,
            Natal: 3172,
            Palmas: 2222,
            PortoAlegre: 0,
            PortoVelho: 2706,
            Recife: 2977,
            RioBranco: 2814,
            RioDeJaneiro: 1123,
            Salvador: 2303,
            SaoLuis: 3142,
            SaoPaulo: 852,
            Teresina: 2909,
            Vitoria: 1536,
        },
        nearby: [
            {
                name: "Florianopolis",
                cost: 376,
            },
        ],
    },
    {
        name: "PortoVelho",
        h: {
            Aracaju: 2946,
            Belem: 1886,
            BeloHorizonte: 2477,
            BoaVista: 1335,
            Brasilia: 19,
            CampoGrande: 1634,
            Cuiaba: 1137,
            Curitiba: 2412,
            Florianopolis: 2641,
            Fortaleza: 2855,
            Goiania: 1813,
            JoaoPessoa: 32,
            Macapa: 1724,
            Maceio: 309,
            Manaus: 761,
            Natal: 3179,
            Palmas: 1711,
            PortoAlegre: 2706,
            PortoVelho: 0,
            Recife: 319,
            RioBranco: 449,
            RioDeJaneiro: 2707,
            Salvador: 2808,
            SaoLuis: 2274,
            SaoPaulo: 2463,
            Teresina: 2362,
            Vitoria: 2835,
        },
        nearby: [
            {
                name: "Manaus",
                cost: 761,
            },
            {
                name: "RioBranco",
                cost: 449,
            },
            {
                name: "Cuiaba",
                cost: 1137,
            },
        ],
    },
    {
        name: "Recife",
        h: {
            Aracaju: 398,
            Belem: 1676,
            BeloHorizonte: 1639,
            BoaVista: 3103,
            Brasilia: 1657,
            CampoGrande: 2530,
            Cuiaba: 2452,
            Curitiba: 2459,
            Florianopolis: 2603,
            Fortaleza: 629,
            Goiania: 1829,
            JoaoPessoa: 104,
            Macapa: 2005,
            Maceio: 202,
            Manaus: 2833,
            Natal: 253,
            Palmas: 1498,
            PortoAlegre: 2977,
            PortoVelho: 3190,
            Recife: 0,
            RioBranco: 3618,
            RioDeJaneiro: 1874,
            Salvador: 675,
            SaoLuis: 1209,
            SaoPaulo: 2128,
            Teresina: 934,
            Vitoria: 1483,
        },
        nearby: [
            {
                name: "JoaoPessoa",
                cost: 104,
            },
            {
                name: "Maceio",
                cost: 202,
            },
        ],
    },
    {
        name: "RioBranco",
        h: {
            Aracaju: 3359,
            Belem: 2333,
            BeloHorizonte: 2786,
            BoaVista: 1626,
            Brasilia: 2246,
            CampoGrande: 1827,
            Cuiaba: 1414,
            Curitiba: 2601,
            Florianopolis: 2809,
            Fortaleza: 33,
            Goiania: 2138,
            JoaoPessoa: 3632,
            Macapa: 2159,
            Maceio: 351,
            Manaus: 1149,
            Natal: 3616,
            Palmas: 2127,
            PortoAlegre: 2814,
            PortoVelho: 449,
            Recife: 3618,
            RioBranco: 0,
            RioDeJaneiro: 2982,
            Salvador: 3206,
            SaoLuis: 2726,
            SaoPaulo: 2704,
            Teresina: 2806,
            Vitoria: 3156,
        },
        nearby: [
            {
                name: "Manaus",
                cost: 1149,
            },
            {
                name: "PortoVelho",
                cost: 449,
            },
        ],
    },
    {
        name: "RioDeJaneiro",
        h: {
            Aracaju: 1482,
            Belem: 2450,
            BeloHorizonte: 339,
            BoaVista: 3428,
            Brasilia: 933,
            CampoGrande: 1212,
            Cuiaba: 1575,
            Curitiba: 675,
            Florianopolis: 748,
            Fortaleza: 2190,
            Goiania: 936,
            JoaoPessoa: 1968,
            Macapa: 2687,
            Maceio: 1671,
            Manaus: 2849,
            Natal: 2085,
            Palmas: 1512,
            PortoAlegre: 1123,
            PortoVelho: 2707,
            Recife: 1874,
            RioBranco: 2982,
            RioDeJaneiro: 0,
            Salvador: 1209,
            SaoLuis: 2266,
            SaoPaulo: 357,
            Teresina: 1979,
            Vitoria: 412,
        },
        nearby: [
            {
                name: "BeloHorizonte",
                cost: 339,
            },
            {
                name: "Vitoria",
                cost: 412,
            },
            {
                name: "SaoPaulo",
                cost: 357,
            },
            {
                name: "Salvador",
                cost: 1209,
            },
        ],
    },
    {
        name: "Salvador",
        h: {
            Aracaju: 277,
            Belem: 1687,
            BeloHorizonte: 964,
            BoaVista: 3009,
            Brasilia: 106,
            CampoGrande: 1905,
            Cuiaba: 1915,
            Curitiba: 1784,
            Florianopolis: 193,
            Fortaleza: 1028,
            Goiania: 1225,
            JoaoPessoa: 763,
            Macapa: 20,
            Maceio: 475,
            Manaus: 2605,
            Natal: 875,
            Palmas: 1114,
            PortoAlegre: 2303,
            PortoVelho: 2808,
            Recife: 675,
            RioBranco: 3206,
            RioDeJaneiro: 1209,
            Salvador: 0,
            SaoLuis: 1323,
            SaoPaulo: 1453,
            Teresina: 994,
            Vitoria: 839,
        },
        nearby: [
            {
                name: "RioDeJaneiro",
                cost: 1209,
            },
            {
                name: "Fortaleza",
                cost: 1028,
            },
            {
                name: "Natal",
                cost: 875,
            },
            {
                name: "Aracaju",
                cost: 277,
            },
        ],
    },
    {
        name: "SaoLuis",
        h: {
            Aracaju: 1226,
            Belem: 481,
            BeloHorizonte: 1932,
            BoaVista: 1913,
            Brasilia: 1524,
            CampoGrande: 2284,
            Cuiaba: 1942,
            Curitiba: 2599,
            Florianopolis: 2821,
            Fortaleza: 652,
            Goiania: 1662,
            JoaoPessoa: 1162,
            Macapa: 803,
            Maceio: 1234,
            Manaus: 1746,
            Natal: 1071,
            Palmas: 964,
            PortoAlegre: 3142,
            PortoVelho: 2274,
            Recife: 1209,
            RioBranco: 2726,
            RioDeJaneiro: 2266,
            Salvador: 1323,
            SaoLuis: 0,
            SaoPaulo: 2348,
            Teresina: 329,
            Vitoria: 2023,
        },
        nearby: [
            {
                name: "Fortaleza",
                cost: 652,
            },
        ],
    },
    {
        name: "SaoPaulo",
        h: {
            Aracaju: 1731,
            Belem: 2463,
            BeloHorizonte: 489,
            BoaVista: 33,
            Brasilia: 873,
            CampoGrande: 894,
            Cuiaba: 1326,
            Curitiba: 338,
            Florianopolis: 489,
            Fortaleza: 2368,
            Goiania: 810,
            JoaoPessoa: 2216,
            Macapa: 2664,
            Maceio: 1928,
            Manaus: 2689,
            Natal: 232,
            Palmas: 1493,
            PortoAlegre: 852,
            PortoVelho: 2463,
            Recife: 2128,
            RioBranco: 2704,
            RioDeJaneiro: 357,
            Salvador: 1453,
            SaoLuis: 2348,
            SaoPaulo: 0,
            Teresina: 2091,
            Vitoria: 741,
        },
        nearby: [
            {
                name: "Curitiba",
                cost: 338,
            },
            {
                name: "RioDeJaneiro",
                cost: 357,
            },
            {
                name: "BeloHorizonte",
                cost: 489,
            },
            {
                name: "Brasilia",
                cost: 873,
            },
            {
                name: "Cuiaba",
                cost: 1326,
            },
        ],
    },
    {
        name: "Teresina",
        h: {
            Aracaju: 903,
            Belem: 750,
            BeloHorizonte: 1652,
            BoaVista: 2169,
            Brasilia: 1313,
            CampoGrande: 2132,
            Cuiaba: 1862,
            Curitiba: 2362,
            Florianopolis: 2573,
            Fortaleza: 495,
            Goiania: 1467,
            JoaoPessoa: 905,
            Macapa: 1079,
            Maceio: 929,
            Manaus: 1921,
            Natal: 843,
            Palmas: 835,
            PortoAlegre: 2909,
            PortoVelho: 2362,
            Recife: 934,
            RioBranco: 2806,
            RioDeJaneiro: 1979,
            Salvador: 994,
            SaoPaulo: 2091,
            Teresina: 0,
            Vitoria: 1713,
        },
        nearby: [
            {
                name: "Fortaleza",
                cost: 495,
            },
        ],
    },
    {
        name: "Vitoria",
        h: {
            Aracaju: 1102,
            Belem: 2275,
            BeloHorizonte: 378,
            BoaVista: 3394,
            Brasilia: 947,
            CampoGrande: 149,
            Cuiaba: 1745,
            Curitiba: 1076,
            Florianopolis: 116,
            Fortaleza: 1855,
            Goiania: 1022,
            JoaoPessoa: 1581,
            Macapa: 2545,
            Maceio: 1282,
            Manaus: 2865,
            Natal: 1706,
            Palmas: 1413,
            PortoAlegre: 1536,
            PortoVelho: 2835,
            Recife: 1483,
            RioBranco: 3156,
            RioDeJaneiro: 412,
            Salvador: 839,
            SaoLuis: 2023,
            SaoPaulo: 741,
            Teresina: 1713,
            Vitoria: 0,
        },
        nearby: [
            {
                name: "RioDeJaneiro",
                cost: 412,
            },
        ],
    },
];

// Implementing Romania as a Map()

let Romania = new Map();

for (let i = 0; i < cities.length; i++) {
    Romania.set(cities[i].name, cities[i].nearby);
}

// searchNodes are created during the algorithm's search.
// this.action = the action taken to reach this city from the previous
//     search node
// this.state = city name
// this.parent = the previous city in the search

class searchNode {
    constructor(action, state, parent) {
        this.action = action;
        this.state = state;
        this.parent = parent;
    }

    // Returns a list of pairs corresponding to
    // the path starting at the top (root) of the tree.
    path() {
        if (this.parent === null) {
            return [this.state, this.action];
        } else {
            return this.parent.path() + " -> " + [this.state, this.action.cost];
        }
    }

    pathCost() {
        if (this.parent === null) {
            return 0;
        } else {
            return this.parent.pathCost() + this.action.cost;
        }
    }

    // Returns true if the state occurs anywhere in the path
    // from the root to the node.
    inPath(findState) {
        if (findState == this.state) {
            return true;
        } else if (this.parent == null) {
            return false;
        } else {
            return this.parent.inPath(findState);
        }
    }
}

// Uninformed Search Algorithms
// * Breadth-first Search
// * Depth-first Search
// * Uniform Cost Search

function breadthFirstSearch(initialState, goalTest, actions, successor) {
    // The fringe is a Queue
    // Actions other than push() and shift() are prohibited.
    let fringe = [];
    if (goalTest(initialState)) {
        console.log("Initial state is the goal state.");
        return [initialState];
    }

    // Add the initialState to the fringe.
    fringe.push(new searchNode(null, initialState, null));
    let expanded = [];
    while (fringe.length !== 0) {
        console.log(
            "Fringe: " +
                fringe.map(function (city) {
                    return city.state;
                })
        );

        // Pop an element out of the queue to expand.
        let parent = fringe.shift();
        console.log("Popped: ", parent.state);
        let newChildStates = [];

        // Child states of the current node
        let actionsList = actions(parent.state);
        console.log(
            "Found " +
                actionsList.length +
                " successors of " +
                parent.state +
                " : " +
                actionsList.map(function (item) {
                    return item.name;
                })
        );

        // Add the node to the expanded list to prevent re-expansion.
        expanded.push(parent.state);
        console.log("Expanded list: ", expanded);
        console.log("\n");

        // Create successors of each node and push them onto the fringe.
        for (let i = 0; i < actionsList.length; i++) {
            let newS = successor(parent.state, actionsList[i]);
            let newN = new searchNode(actionsList[i], newS, parent);

            // If the goal is found,
            // returns the path to the goal.
            if (goalTest(newS)) {
                console.log("FOUND GOAL!", newS);
                return newN.path() + " with path cost " + newN.pathCost();
            }

            // If the successor is already expanded,
            // don't add it to the fringe.
            else if (expanded.indexOf(newS) !== -1) {
                console.log(
                    "Successor " +
                        newS +
                        " of " +
                        parent.state +
                        " already expanded."
                );
                console.log("Not adding " + newS + " to the fringe.");
                console.log("\n");
            }

            // If the successor is already in the fringe,
            // don't add it to the fringe again.
            else if (
                fringe
                    .map(function (item) {
                        return item.state;
                    })
                    .indexOf(newN.state) !== -1
            ) {
                console.log(newS + " is already in the fringe.");
            }

            // Push new successors to the fringe.
            else {
                console.log(
                    "Discovered " +
                        newN.state +
                        " with step cost " +
                        actionsList[i].cost +
                        " from " +
                        parent.state
                );
                console.log("Pushing to fringe: " + newS);
                newChildStates.push(newS);
                fringe.push(newN);
                console.log("Path: ", newN.path());
                console.log(
                    "Current fringe: " +
                        fringe.map(function (city) {
                            return city.state;
                        })
                );
                console.log("\n");
            }
        }
    }
}

function depthFirstSearch(initialState, goalTest, actions, successor) {
    // The fringe is a Stack
    // Actions other than unshift() and shift() are prohibited.
    let fringe = [];
    if (goalTest(initialState)) {
        console.log("Initial state is the goal state.");
        return [initialState];
    }

    // Add the initialState to the fringe.
    fringe.push(new searchNode(null, initialState, null));
    let expanded = [];
    while (fringe.length !== 0) {
        console.log(
            "Fringe: " +
                fringe.map(function (city) {
                    return city.state;
                })
        );

        // Pop an element out of the queue to expand.
        let parent = fringe.shift();
        console.log("Popped: ", parent.state);
        let newChildStates = [];

        // Child states of the current node
        let actionsList = actions(parent.state);
        console.log(
            "Found " +
                actionsList.length +
                " successors of " +
                parent.state +
                " : " +
                actionsList.map(function (item) {
                    return item.name;
                })
        );

        // Add the node to the expanded list to prevent re-expansion.
        expanded.push(parent.state);
        console.log("Expanded list: ", expanded);
        console.log("\n");

        // Create successors of each node and push them onto the fringe.
        for (let i = 0; i < actionsList.length; i++) {
            let newS = successor(parent.state, actionsList[i]);
            let newN = new searchNode(actionsList[i], newS, parent);

            // If the goal is found,
            // returns the path to the goal.
            if (goalTest(newS)) {
                console.log("FOUND GOAL!", newS);
                return newN.path() + " with path cost " + newN.pathCost();
            }

            // If the successor is already expanded,
            // don't add it to the fringe.
            else if (expanded.indexOf(newS) !== -1) {
                console.log(
                    "Successor " +
                        newS +
                        " of " +
                        parent.state +
                        " already expanded."
                );
                console.log("Not adding " + newS + " to the fringe.");
                console.log("\n");
            }

            // If the successor is already in the fringe,
            // don't add it to the fringe again.
            else if (
                fringe
                    .map(function (item) {
                        return item.state;
                    })
                    .indexOf(newN.state) !== -1
            ) {
                console.log(newS + " is already in the fringe.");
            }

            // Push new successors to the fringe.
            else {
                console.log(
                    "Discovered " +
                        newN.state +
                        " with step cost " +
                        actionsList[i].cost +
                        " from " +
                        parent.state
                );
                console.log("Pushing to fringe: " + newS);
                newChildStates.push(newS);
                fringe.unshift(newN);
                console.log("Path: ", newN.path());
                console.log(
                    "Current fringe: " +
                        fringe.map(function (city) {
                            return city.state;
                        })
                );
                console.log("\n");
            }
        }
    }
}

// TODO
// Implement a priority queue for Uniform Cost Search

function uniformCostSearch(initialState, goalTest, actions, successor) {
    // The fringe is a Priority Queue
    // Actions other than shift() and enqueue() are prohibited.
    let fringe = [];
    if (goalTest(initialState)) {
        console.log("Initial state is the goal state.");
        return [initialState];
    }

    fringe.enqueue = function (item) {
        let added = false;
        for (let i = 0; i < fringe.length; i++) {
            console.log("ITEM: ", fringe[i].state);
            console.log("COST: ", fringe[i].pathCost());
            if (item.pathCost() < fringe[i].pathCost()) {
                fringe.splice(i, 0, item);
                added = true;
                return;
            }
        }

        if (!added) {
            fringe.push(item);
        }
    };

    // Add the initialState to the fringe.
    fringe.enqueue(new searchNode(null, initialState, null));
    let expanded = [];
    let shortestPath = { state: null, pathCost: null, path: null };

    while (fringe.length !== 0) {
        console.log(
            "Fringe: " +
                fringe.map(function (city) {
                    return city.state;
                })
        );

        // Pop an element out of the queue to expand.
        let parent = fringe.shift();
        console.log("Popped: ", parent.state);
        let newChildStates = [];

        // Child states of the current node
        let actionsList = actions(parent.state);
        console.log(
            "Found " +
                actionsList.length +
                " successors of " +
                parent.state +
                " : " +
                actionsList.map(function (item) {
                    return item.name;
                })
        );

        // Add the node to the expanded list to prevent re-expansion.
        expanded.push(parent.state);
        console.log("Expanded list: ", expanded);
        console.log("\n");

        // Create successors of each node and push them onto the fringe.
        for (let i = 0; i < actionsList.length; i++) {
            let newS = successor(parent.state, actionsList[i]);
            let newN = new searchNode(actionsList[i], newS, parent);

            // If the goal is found,
            // returns the path to the goal.
            if (goalTest(newS)) {
                console.log(
                    "FOUND GOAL!",
                    newS,
                    " with path cost ",
                    newN.pathCost()
                );
                console.log("Continuing search to find optimal path.");
                if (
                    newN.pathCost() < shortestPath.pathCost ||
                    shortestPath.pathCost === null
                ) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path();
                    shortestPath.state = newS;
                }
            }

            // If the successor is already expanded,
            // don't add it to the fringe.
            else if (expanded.indexOf(newS) !== -1) {
                console.log(
                    "Successor " +
                        newS +
                        " of " +
                        parent.state +
                        " already expanded."
                );
                console.log("Not adding " + newS + " to the fringe.");
                console.log("\n");
            }

            // Push new successors to the fringe.
            else {
                console.log(
                    "Discovered " +
                        newN.state +
                        " with step cost " +
                        actionsList[i].cost +
                        " from " +
                        parent.state
                );
                console.log("Pushing to fringe: " + newS);
                newChildStates.push(newS);
                fringe.enqueue(newN);
                console.log("Path: ", newN.path());
                console.log(
                    "Current fringe: " +
                        fringe.map(function (city) {
                            return city.state;
                        })
                );
                console.log("\n");
            }
        }
    }

    if (shortestPath.pathCost === null) {
        return "Couldn't find path.";
    } else {
        return shortestPath.path + " with path cost " + shortestPath.pathCost;
    }
}

function aStarSearch(initialState, goalTest, actions, successor, cidadeAlvo) {
    // The fringe is a Priority Queue
    // Actions other than shift() and enqueue() are prohibited.
    let fringe = [];
    if (goalTest(initialState)) {
        console.log("Initial state is the goal state.");
        return [initialState];
    }

    fringe.enqueue = function (item) {
        let added = false;

        let heuristic = null;
        // Finding heuristic value
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === item.state) {
                heuristic = cities[i].h[cidadeAlvo];
                console.log("Heuristica", heuristic);
            }
        }

        function findHeuristic(item) {
            for (let i = 0; i < cities.length; i++) {
                if (cities[i].name === item.state) {
                    return cities[i].h[cidadeAlvo];
                }
            }
        }

        for (let i = 0; i < fringe.length; i++) {
            console.log("Iteration in fringe: ", fringe[i].state);
            console.log(
                "COST: ",
                fringe[i].pathCost(),
                "HEURISTIC COST: ",
                findHeuristic(fringe[i]),
                "TOTAL COST: ",
                fringe[i].pathCost() + findHeuristic(fringe[i])
            );
            if (
                item.pathCost() + heuristic <
                fringe[i].pathCost() + findHeuristic(fringe[i])
            ) {
                fringe.splice(i, 0, item);
                added = true;
                return;
            }
        }

        if (!added) {
            fringe.push(item);
        }
    };

    // Add the initialState to the fringe.
    fringe.enqueue(new searchNode(null, initialState, null));
    let expanded = [];
    let shortestPath = { state: null, pathCost: null, path: null };

    while (fringe.length !== 0) {
        console.log(
            "Fringe: " +
                fringe.map(function (city) {
                    return city.state;
                })
        );

        // Pop an element out of the queue to expand.
        let parent = fringe.shift();
        console.log("Popped: ", parent.state);
        let newChildStates = [];

        // Child states of the current node
        let actionsList = actions(parent.state);
        console.log(
            "Found " +
                actionsList.length +
                " successors of " +
                parent.state +
                " : " +
                actionsList.map(function (item) {
                    return item.name;
                })
        );

        // Add the node to the expanded list to prevent re-expansion.
        expanded.push(parent.state);
        console.log("Expanded list: ", expanded);
        console.log("\n");

        // Create successors of each node and push them onto the fringe.
        for (let i = 0; i < actionsList.length; i++) {
            let newS = successor(parent.state, actionsList[i]);
            let newN = new searchNode(actionsList[i], newS, parent);

            // If the goal is found,
            // returns the path to the goal.
            if (goalTest(newS)) {
                console.log(
                    "FOUND GOAL!",
                    newS,
                    " with path cost ",
                    newN.pathCost()
                );
                console.log("Continuing search to find optimal path.");
                if (
                    newN.pathCost() < shortestPath.pathCost ||
                    shortestPath.pathCost === null
                ) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path();
                    shortestPath.state = newS;
                }
            }

            // If the successor is already expanded,
            // don't add it to the fringe.
            else if (expanded.indexOf(newS) !== -1) {
                console.log(
                    "Successor " +
                        newS +
                        " of " +
                        parent.state +
                        " already expanded."
                );
                console.log("Not adding " + newS + " to the fringe.");
                console.log("\n");
            }

            // Push new successors to the fringe.
            else {
                console.log(
                    "Discovered " +
                        newN.state +
                        " with step cost " +
                        actionsList[i].cost +
                        " from " +
                        parent.state
                );
                console.log("Pushing to fringe: " + newS);
                newChildStates.push(newS);
                fringe.enqueue(newN);
                console.log("Path: ", newN.path());
                console.log(
                    "Current fringe: " +
                        fringe.map(function (city) {
                            return city.state;
                        })
                );
                console.log("\n");
            }
        }
    }

    if (shortestPath.pathCost === null) {
        return "Couldn't find path.";
    } else {
        return shortestPath.path + " with path cost " + shortestPath.pathCost;
    }
}

function goalTest(state) {
    return state === goalCity;
}

function actions(state) {
    // Returns an array of objects
    // [{ name: string, cost: integer }, ... ]
    return Romania.get(state);
}

function successor(state, action) {
    return action.name;
}

let goalCity = null;
let startCity = null;
let setResult = function (result) {
    let element = document.getElementById("search-result");
    while (element.firstChild !== null) {
        // remove all existing content
        element.removeChild(element.firstChild);
    }
    element.appendChild(document.createTextNode(result));
};

function setSearchInput() {
    startCity = null;
    goalCity = null;
    let start = document.getElementById("start");
    let goal = document.getElementById("goal");
    if (start.value.length > 0 && goal.value.length > 0) {
        startCity = start.value;
        goalCity = goal.value;
        return true;
    } else {
        setResult("Error: Please enter a valid city.");
        return false;
    }
}

function bfs() {
    document.getElementById("path").innerHTML = "Path:";
    if (setSearchInput()) {
        setResult(breadthFirstSearch(startCity, goalTest, actions, successor));
    }
}

function dfs() {
    document.getElementById("path").innerHTML = "Path:";
    if (setSearchInput()) {
        setResult(depthFirstSearch(startCity, goalTest, actions, successor));
    }
}

function ucs() {
    document.getElementById("path").innerHTML = "Optimal path:";
    if (setSearchInput()) {
        setResult(uniformCostSearch(startCity, goalTest, actions, successor));
    }
}

function astar() {
    document.getElementById("path").innerHTML =
        "Optimal path with straight-line distance heuristic:";
    if (setSearchInput()) {
        // if (goalCity !== "Bucharest") {
        //     setResult("Error: Heuristic values are only calculated for any start city to Bucharest. Please change the goal city to Bucharest and try again.");
        // } else {
        let cidadeAlvo = goalCity;
        setResult(
            aStarSearch(startCity, goalTest, actions, successor, cidadeAlvo)
        );
        // }
    }
}
