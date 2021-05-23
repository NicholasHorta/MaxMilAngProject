export class Recipes {
    public name: string;
    public description: string;
    public imageLink: string;

    constructor(name: string, desc: string, imageUrl: string){
        this.name = name;
        this.description = desc;
        this.imageLink = imageUrl;
    }

}