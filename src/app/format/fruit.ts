export class Fruit {
    id: number;
    nom: string;
    categorie: string;
    type: string;
    power: string;
    picture: string; //vue que c'est un URL donc on aura une chaine
    detenteur: string;

    constructor(
        id: number = 0,
        nom: string = '',
        categorie: string = '',
        type: string = '',
        power: string = '',
        picture: string = '', //vue que c'est un URL donc on aura une chaine
        detenteur: string= ''
    ) {
        this.id = id;
        this.nom = nom;
        this.categorie = categorie;
        this.type= type;
        this.power = power;
        this.picture = picture;
        this.detenteur = detenteur;
    }
}
