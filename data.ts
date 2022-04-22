import {Serie} from './serie.js';

export const serie1 = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
"https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg");
export const serie2 = new Serie(2, "Orange Is the new Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
"https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg");
export const serie3 = new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
"https://i.imgur.com/TDCEV1S.jpg");
export const serie4 = new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
"https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg");
export const serie5 = new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
"https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg");
export const serie6 = new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
"https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg");

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


