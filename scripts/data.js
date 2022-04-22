import { Serie } from './serie.js';
export var serie1 = new Serie(1, "Breaking Bad", "AMC", 5);
export var serie2 = new Serie(2, "Orange Is the new Black", "Netflix", 6);
export var serie3 = new Serie(3, "Game of Thrones", "HBO", 7);
export var serie4 = new Serie(4, "The Big Bang Theory", "CBS", 12);
export var serie5 = new Serie(5, "Sherlock", "BBC", 4);
export var serie6 = new Serie(6, "A Very English Scandal", "BBC", 2);
var serieTable = document.getElementById("serie");
var promediosTable = document.getElementById("promedio");
var seriesList = [serie1, serie2, serie3, serie4, serie5, serie6];
showAll(seriesList);
darPromedioSeasons();
function showData(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tc><td>".concat(serie.number, "</td></tc>\n    <tc><td>").concat(serie.name, "</td></tc>\n    <tc><td>").concat(serie.channel, "</td></tc>\n    <tc><td>").concat(serie.seasons, "</td></tc>");
    serieTable.appendChild(tbodySerie);
}
function darPromedioSeasons() {
    var serie1seasons = serie1.seasons;
    var serie2seasons = serie2.seasons;
    var serie3seasons = serie3.seasons;
    var serie4seasons = serie4.seasons;
    var serie5seasons = serie5.seasons;
    var serie6seasons = serie6.seasons;
    var promedioSeries = (serie1seasons + serie2seasons + serie3seasons + serie4seasons + serie5seasons + serie6seasons) / 6;
    var promedioSerie = document.createElement("tr");
    promedioSerie.innerHTML = "<tc><td>Seasons Average: </td><td>".concat(promedioSeries, "</td></tc>");
    promediosTable.appendChild(promedioSerie);
}
function showAll(series) {
    for (var i = 0; i < 6; i++) {
        var serie_actual = series[i];
        showData(serie_actual);
    }
}
