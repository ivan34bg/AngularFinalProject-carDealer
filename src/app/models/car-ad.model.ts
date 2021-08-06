export class carAd{
    private id!: string;
    constructor(
        private imageLink: string,
        private brand: string,
        private model: string,
        private year: number,
        private mileage: number,
        private horsepower: number,
        private description: string,
        private price: number,
        private phoneNumber: string,
        private location: string,
        private isNew: boolean
    ){}
}