


const preostali_kamencici = document.getElementById("preostali");
const button = document.getElementById("button");
const broj = document.getElementById("text");


const rezultat = document.getElementById("rezultat");
let brojac = 0;

let igrac1 = 0;
let igrac2 = 0;


let listaPoteza = [];

let pocetni_broj_kamencica =  Math.floor(Math.random() * (25 - 10) + 10);

let pocetni_broj_kamencica1 = pocetni_broj_kamencica;

preostali_kamencici.innerHTML = "Preostali broj kamencica: " + pocetni_broj_kamencica;


function Odigraj() {
    const unos = parseInt(broj.value);

    if (unos < 1 || unos > pocetni_broj_kamencica1/2) {
        alert("Unos nije validan");
    }


    else {

        if (brojac%2 == 0) {
            igrac1 += unos;
            listaPoteza.pop();
            listaPoteza.push("Igrac 1 bira " + unos + " kamencica");
        }
        else  {
            igrac2 += unos;
            listaPoteza.pop();
            listaPoteza.push("Igrac 2 bira " + unos + " kamencica");
        } 

        pocetni_broj_kamencica -= unos;

        if (pocetni_broj_kamencica < 1) {
            ZavrsiIgru();
        }
        else {
            brojKamenja();
        }
    }
}


function brojKamenja() {
    preostali_kamencici.innerHTML = "Preostali broj kamencica: " + pocetni_broj_kamencica;
    brojac++;
    IgracPoRedu();
}

function ZavrsiIgru() {

    if (igrac1 > igrac2) {
        listaPoteza.push("Pobjedio je igrac 1");
    }
    else if (igrac1 < igrac2) {
        listaPoteza.push("Pobjedio je igrac 2");
    }
    else listaPoteza.push("Nerjeseno je");
    prikaziRezultat();
}


function prikaziRezultat() {
    const rezultat = document.getElementById("rezultat");
    let rezultatHTML = "";
    for(let i = 0 ; i < listaPoteza.length ; i++) {
        rezultatHTML += listaPoteza[i] + "<br>";
    }
    rezultat.innerHTML = rezultatHTML;
}

function IgracPoRedu() {
    if (brojac%2 == 0) {
        listaPoteza.push( "Prvi igrac je na potezu");
    }
    else listaPoteza.push("Drugi igrac je na potezu");
    prikaziRezultat();
}


button.addEventListener("click" , Odigraj);
IgracPoRedu();