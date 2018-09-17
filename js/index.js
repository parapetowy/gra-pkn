'use strict';

var output = document.getElementById('output');

output.innerHTML = 'Zagrajmy!' + '<br><br>' + output.innerHTML;

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var newGameButton = document.getElementById('newGame');

var wynikGracz = 0;
var wynikKomputer = 0;
var runda = 0;
var liczbaRund = 0;
var gracz = 0;

var result = document.getElementById('result');
result.innerHTML = 'Gramy do ' + liczbaRund + ' zwycięstw!' + '<br><br>' + ' WYNIK - Gracz = ' + wynikGracz + ' Komputer = ' + wynikKomputer + '<br><br>' + result.innerHTML;

var wynik = function(text) {
    result.innerHTML = text + '<br><br>';
};

var napisz = function(text) {
    output.innerHTML = text + '<br><br>' + output.innerHTML;
};

function losuj() {
    var mozliwosci = ["kamień", "papier", "nożyce"];
    var indeks = Math.floor(Math.random() * 3);
    return mozliwosci[indeks];
}

var playerMove = function(gracz) {
    var komputer = losuj();
    napisz('Gracz zagrał ' + gracz + '!');
    napisz('Komputer zagrał ' + komputer + '!');

    if (
        (gracz == 'papier' && komputer == 'kamień') ||
        (gracz == 'kamień' && komputer == 'nożyce') ||
        (gracz == 'nożyce' && komputer == 'papier')
    ) {
        napisz('WYGRYWA Gracz!');
        wynikGracz++;
    } else if (
        (komputer == 'papier' && gracz == 'kamień') ||
        (komputer == 'kamień' && gracz == 'nożyce') ||
        (komputer == 'nożyce' && gracz == 'papier')
    ) {
        napisz('WYGRYWA Komputer!');
        wynikKomputer++;
    } else {
        napisz('REMIS!');
    }
    wynik('Gramy do ' + liczbaRund + ' zwycięstw!' + '<br><br>' + ' WYNIK - Gracz = ' + wynikGracz + ' - Komputer = ' + wynikKomputer);
    runda++;
    napisz('---------------' + ' Runda ' + runda + ' ---------------');
    gra();
};

var isDisabled = false;

var buttony = [button1, button2, button3];

var buttonOff = function(isDisabled) {
    for (var i = 0; i < buttony.length; i++) {
        buttony[i].disabled = isDisabled;
        buttony[i].classList.toggle('disabled');
    };
};

var gra = function() {
    if (liczbaRund == wynikGracz) {
        napisz('GRE WYGRYWA GRACZ!');
        napisz('ROZPOCZNIJ NOWĄ GRE');
        buttonOff(true);

    } else if (liczbaRund == wynikKomputer) {
        napisz('GRE WYGRYWA KOMPUTER!');
        napisz('ROZPOCZNIJ NOWĄ GRE');
        buttonOff(true);
    }
};

button1.addEventListener('click', function() {
    playerMove('papier');
});

button2.addEventListener('click', function() {
    playerMove('kamień');
});

button3.addEventListener('click', function() {
    playerMove('nożyce');
});

newGameButton.addEventListener('click', function() {
    wynikGracz = 0;
    wynikKomputer = 0;
    runda = 0;
    liczbaRund = window.prompt('Podaj liczbę rund');
    wynik('Gramy do ' + liczbaRund + ' zwycięstw!' + '<br><br>' + ' WYNIK - Gracz = ' + wynikGracz + ' Komputer = ' + wynikKomputer);
    buttonOff(false);
});

buttonOff(true);