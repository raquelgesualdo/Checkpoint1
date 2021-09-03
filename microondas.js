//Resolução 1:

let tempoPipoca=10
let tempoMacarrao=8
let tempoCarne=15
let tempoFeijao=12
let tempoBrigadeiro=8

function microondas(menu, prato){
    switch (menu) {
        case "Pipoca": 
            if (prato >= 2*tempoPipoca && prato <=3*tempoPipoca){
                console.log("Comida queimou!")}
            else if (prato < tempoPipoca){
                console.log("Tempo insuficiente")}
            else if (prato > 3*tempoPipoca){
                console.log("Kabumm")}
            else {
                console.log("Prato pronto, bom apetite")}
            break;
        
        case "Macarrão": 
            if (prato >= 2*tempoMacarrao && prato <=3*tempoMacarrao){
                console.log("Comida queimou!")}
            else if (prato < tempoMacarrao){
                console.log("Tempo insuficiente")}
            else if (prato > 3*tempoMacarrao){
                console.log("Kabumm")}
            else {
                console.log("Prato pronto, bom apetite")}
            break;
        
        case "Carne": 
            if (prato >= 2*tempoCarne && prato <=3*tempoCarne){
                console.log("Comida queimou!")}
            else if (prato < tempoCarne){
                console.log("Tempo insuficiente")}
            else if (prato > 3*tempoCarne){
                console.log("Kabumm")}
            else {
                console.log("Prato pronto, bom apetite")}
            break;
        
        case "Feijão": 
            if (prato >= 2*tempoFeijao && prato <=3*tempoFeijao){
                console.log("Comida queimou!")}
            else if (prato < tempoFeijao){
                console.log("Tempo insuficiente")}
            else if (prato > 3*tempoFeijao){
                console.log("Kabumm")}
            else {
                console.log("Prato pronto, bom apetite")}
            break;

        case "Brigadeiro": 
            if (prato >= 2*tempoBrigadeiro && prato <=3*tempoBrigadeiro){
                console.log("Comida queimou!")}
            else if (prato < tempoBrigadeiro){
                console.log("Tempo insuficiente")}
            else if (prato > 3*tempoBrigadeiro){
                console.log("Kabumm")}
            else {
                console.log("Prato pronto, bom apetite")}
            break;
            default: console.log ("Prato Inexistente");
    }
}

microondas("Pipoca", 8);
microondas("Macarrão", 18);
microondas("Carne", 28);
microondas("Feijão", 38);
microondas("Brigadeiro", 49);
microondas("Arroz", 13);

//Resolução 2 - testes pelo DevTools:

let tempo;
let padrao;
let opcao;
let msgInicio;
let msgAcao = `Utilize aumentar() ou reduzir() para alterar o tempo em 5 segundos. Utilize ligar() para iniciar o aquecimento.`; 
let msgTempoAtual;

function updateMsgs() {
    msgInicio = `Você escolheu a opção ${opcao}, tempo padrão ${tempo} segundos.`;
    msgTempoAtual = `Tempo atual: ${tempo} segundos.`;
    padrao == tempo ? console.log(msgInicio) : console.log(msgTempoAtual);
    console.log(msgAcao);
}

function microondas(alimento) {
    switch (alimento) {
        case 'Pipoca':
            padrao = 10;
            tempo = padrao;
            opcao = alimento;    
            updateMsgs()        
            break;
        case 'Macarrão':
        case 'Brigadeiro':
            padrao = 8;
            tempo = padrao;
            opcao = alimento;
            updateMsgs()
            break;
        case 'Carne':
            padrao = 15;
            tempo = padrao;
            opcao = alimento;
            updateMsgs()
            break;
        case 'Feijão':
            padrao = 12;
            tempo = padrao;
            opcao = alimento;
            updateMsgs()
            break;
        default:
            console.log('Prato inexistente');
            break;
    }
}

function aumentar() {
    tempo += 5;
    updateMsgs()
}

function reduzir() {
    tempo -= 5;
    updateMsgs()
}

function ligar() {
    if (tempo < padrao) {
        msg = 'Tempo insuficiente.';
    } else if (tempo >= padrao*3) {
        msg = 'Kabumm!!';
    } else if (tempo >= padrao*2) {
        msg = 'A comida queimou!';
    } else {
        msg = 'Prato pronto, bom apetite!!!'
    }
    console.log(msg);
}