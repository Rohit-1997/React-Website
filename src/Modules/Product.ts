export class Product {
    id: string;
    image: string;
    url: string;
    title: string;
    description: string;
    ratings: Array<Int16Array>;
    
    constructor(id: string, image: string, url: string, title: string, description: string, ratings: Array<Int16Array>) {
    this.id = id;
    this.image = image;
    this.url = url;
    this.title = title;
    this.description = description;
    this.ratings= ratings;
 }
}
