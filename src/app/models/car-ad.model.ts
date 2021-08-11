export class carAd{


    constructor(
        private id: number,
        private imageLink: string,
        private brand: string,
        private model: string,
        private year: number,
        private mileage: number,
        private horsepower: number,
        private description: string,
        private price: number,
        private location: string,
        private isNew: boolean,
        private posterId: number
    ){}

    getId(){
        return this.id;
    }
    getImageLink(){
        return this.imageLink;
    }
    getBrand(){
        return this.brand;
    }
    getModel(){
        return this.model;
    }
    getYear(){
        return this.year;
    }
    getMileage(){
        return this.mileage;
    }
    getHorsepower(){
        return this.horsepower;
    }
    getDescription(){
        return this.description;
    }
    getPrice(){
        return this.price;
    }
    getLocation(){
        return this.location;
    }
    getIsNew(){
        return this.isNew;
    }
    getPosterId(){
        return this.posterId;
    }

    editAd(imageLink: string, brand: string, model: string, year: number, mileage: number, horsepower: number, price: number, description: string, location: string){
        this.imageLink = imageLink;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.horsepower = horsepower;
        this.price = price;
        this.description = description;
        this.location = location;
    }
}