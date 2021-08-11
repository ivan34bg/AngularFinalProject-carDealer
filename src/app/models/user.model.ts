export class User{        
    constructor(
        private id: number,
        private email: string,
        private username: string,
        private password: string,
        private phoneNumber: string,
        private favoriteAdsIds: number[]
    ){}

    addAdAsFavorite(adId: number){
        this.favoriteAdsIds.push(adId);
    }
    removeAdFromFavorites(adId: number){
        this.favoriteAdsIds.splice(this.favoriteAdsIds.indexOf(adId), 1);
    }
    getUserId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    getFavoriteAds(){
        return this.favoriteAdsIds;
    }
    changeUserInfo(password: string, phoneNumber: string){
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}