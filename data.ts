import {Serie} from './serie.js';

export const serie1 = new Serie(1, "Breaking Bad", "AMC", 5);
export const serie2 = new Serie(2, "Orange Is the new Black", "Netflix", 6);
export const serie3 = new Serie(3, "Game of Thrones", "HBO", 7);
export const serie4 = new Serie(4, "The Big Bang Theory", "CBS", 12);
export const serie5 = new Serie(5, "Sherlock", "BBC", 4);
export const serie6 = new Serie(6, "A Very English Scandal", "BBC", 2);

let serieTable: HTMLElement = document.getElementById("serie")!;
let promediosTable: HTMLElement = document.getElementById("promedio")!;
let seriesList : Array<Serie> = [serie1, serie2, serie3, serie4, serie5, serie6];

showAll(seriesList);
darPromedioSeasons();


function showData(serie: Serie): void{
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tc><td>${serie.number}</td></tc>
    <tc><td>${serie.name}</td></tc>
    <tc><td>${serie.channel}</td></tc>
    <tc><td>${serie.seasons}</td></tc>`
    serieTable.appendChild(tbodySerie);
}

function darPromedioSeasons(): void{

    let serie1seasons: number = serie1.seasons;   
    let serie2seasons: number = serie2.seasons;
    let serie3seasons: number = serie3.seasons;
    let serie4seasons: number = serie4.seasons;
    let serie5seasons: number = serie5.seasons;
    let serie6seasons: number = serie6.seasons;


    let promedioSeries: number = (serie1seasons+serie2seasons+serie3seasons+serie4seasons+serie5seasons+serie6seasons)/6;
    let promedioSerie = document.createElement("tr");

    promedioSerie.innerHTML = `<tc><td>Seasons Average: </td><td>${promedioSeries}</td></tc>`
    promediosTable.appendChild(promedioSerie);
}

function showAll(series : Array<Serie>): void{
    for (let i = 0; i < 6; i++){
        let serie_actual : Serie = series[i];
        showData(serie_actual);
    }

}


