export class Serie {
    /* Atributos */

    number : number;
    name: string;
    channel: string;
    seasons: number;
    /* Constructor */
    constructor(newNumber : number, newName : string, newChannel : string, newSeasons : number)
    {
        this.number = newNumber;
        this.name = newName;
        this.channel = newChannel;
        this.seasons = newSeasons;
    }
}