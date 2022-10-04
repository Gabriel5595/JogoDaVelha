let texto = document.getElementById("texto");
let contadorDeJogadas = 9;

let casa1 = true;
let casa2 = true;
let casa3 = true;
let casa4 = true;
let casa5 = true;
let casa6 = true;
let casa7 = true;
let casa8 = true;
let casa9 = true;

let casa1Dono = "";
let casa2Dono = "";
let casa3Dono = "";
let casa4Dono = "";
let casa5Dono = "";
let casa6Dono = "";
let casa7Dono = "";
let casa8Dono = "";
let casa9Dono = "";

function selecionaCasa(event, casa) {
    const tile = event.target;
    
    if (verificaCasa(casa) === true) {
        modificaCasa(casa);
        if (contadorDeJogadas % 2 != 0) {
            contadorDeJogadas--;
            if (contadorDeJogadas == 0){
                texto.innerText = "Fim do Jogo!";
            } else {
                texto.innerText = "Vez do jogador 2!";
            }
            tile.style.background = "wheat";
            tile.innerHTML = "<img src='./O.png'>";
            alert(`A casa clicada foi a casa ${casa}`);
            modificaTitularidadeP1(casa)
            verificaVitColuna();
            verificaVitLinha();
            verificaVitDiagonal();
        } else if (contadorDeJogadas % 2 == 0) {
            contadorDeJogadas--;
            texto.innerText = "Vez do jogador 1!";
            tile.style.background = "white";
            tile.innerHTML = "<img src='./X.png'>";
            alert(`A casa clicada foi a casa ${casa}`);
            modificaTitularidadeP2(casa)
            verificaVitColuna();
            verificaVitLinha();
            verificaVitDiagonal();
        }
    } else {
        exit;
    }



    
}

function verificaCasa(casa) {
    switch (casa) {
        case 1: 
            if (casa1 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 2:
            if (casa2 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 3:
            if (casa3 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 4:
            if (casa4 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 5:
            if (casa5 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 6:
            if (casa6 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 7:
            if (casa7 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 8:
            if (casa8 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
        case 9:
            if (casa9 === true) {
                modificaCasa(casa);
                return true;
            } else {
                alert (`A casa ${casa} já foi clicada, tente outra vez.`);
                return false;
            }
    }
}

function modificaCasa(casa) {
    switch (casa){
        case 1:
            casa1 = false;
            break;
        case 2:
            casa2 = false;
            break;
        case 3:
            casa3 = false;
            break;
        case 4:
            casa4 = false;
            break;
        case 5:
            casa5 = false;
            break;
        case 6:
            casa6 = false;
            break;
        case 7:
            casa7 = false;
            break;
        case 8:
            casa8 = false;
            break;
        case 9:
            casa9 = false;
            break;
    }
}

function modificaTitularidadeP1(casa) {
    switch (casa){
        case 1:
            casa1Dono = "Jogador1";
            break;
        case 2:
            casa2Dono = "Jogador1";
            break;
        case 3:
            casa3Dono = "Jogador1";
            break;
        case 4:
            casa4Dono = "Jogador1";
            break;
        case 5:
            casa5Dono = "Jogador1";
            break;
        case 6:
            casa6Dono = "Jogador1";
            break;
        case 7:
            casa7Dono = "Jogador1";
            break;
        case 8:
            casa8Dono = "Jogador1";
            break;
        case 9:
            casa9Dono = "Jogador1";
            break;
    }
}

function modificaTitularidadeP2(casa) {
    switch (casa){
        case 1:
            casa1Dono = "Jogador2";
            break;
        case 2:
            casa2Dono = "Jogador2";
            break;
        case 3:
            casa3Dono = "Jogador2";
            break;
        case 4:
            casa4Dono = "Jogador2";
            break;
        case 5:
            casa5Dono = "Jogador2";
            break;
        case 6:
            casa6Dono = "Jogador2";
            break;
        case 7:
            casa7Dono = "Jogador2";
            break;
        case 8:
            casa8Dono = "Jogador2";
            break;
        case 9:
            casa9Dono = "Jogador2";
            break;
    }
}

function verificaVitLinha() {
    if ((casa1Dono === "Jogador1" && casa2Dono === "Jogador1" && casa3Dono === "Jogador1") || (casa1Dono === "Jogador2" && casa2Dono === "Jogador2" && casa3Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    } else if ((casa4Dono === "Jogador1" && casa5Dono === "Jogador1" && casa6Dono === "Jogador1") || (casa4Dono === "Jogador2" && casa5Dono === "Jogador2" && casa6Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    } else if ((casa7Dono === "Jogador1" && casa8Dono === "Jogador1" && casa9Dono === "Jogador1") || (casa7Dono === "Jogador2" && casa8Dono === "Jogador2" && casa9Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    }
}

function verificaVitColuna() {
    if ((casa1Dono === "Jogador1" && casa4Dono === "Jogador1" && casa7Dono === "Jogador1") || (casa1Dono === "Jogador2" && casa4Dono === "Jogador2" && casa7Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    } else if ((casa2Dono === "Jogador1" && casa5Dono === "Jogador1" && casa8Dono === "Jogador1") || (casa2Dono === "Jogador2" && casa5Dono === "Jogador2" && casa8Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    } else if ((casa3Dono === "Jogador1" && casa6Dono === "Jogador1" && casa9Dono === "Jogador1") || (casa3Dono === "Jogador2" && casa6Dono === "Jogador2" && casa9Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    }
}

function verificaVitDiagonal() {
    if ((casa1Dono === "Jogador1" && casa5Dono === "Jogador1" && casa9Dono === "Jogador1") || (casa1Dono === "Jogador2" && casa5Dono === "Jogador2" && casa9Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    } else if ((casa3Dono === "Jogador1" && casa5Dono === "Jogador1" && casa7Dono === "Jogador1") || (casa3Dono === "Jogador2" && casa5Dono === "Jogador2" && casa7Dono === "Jogador2")) {
        alert("Parabéns, você venceu!");
    }
}