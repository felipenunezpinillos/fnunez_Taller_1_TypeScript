export class Serie {
    /* Atributos */

    number : number;
    name: string;
    channel: string;
    seasons: number;
    descripcion : string;
    link : string;
    img : string;
    /* Constructor */
    constructor(newNumber : number, newName : string, newChannel : string, newSeasons : number, newDescripcion : string, newLink :string, newImg : string)
    {
        this.number = newNumber;
        this.name = newName;
        this.channel = newChannel;
        this.seasons = newSeasons;
        this.descripcion = newDescripcion;
        this.link = newLink;
        this.img = newImg;
    }
}