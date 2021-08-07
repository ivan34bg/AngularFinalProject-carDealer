export class User{        
    private favoriteAdsIds: string[] | undefined
    private postedAdsIds: string[] | undefined
    constructor(
        private email: string,
        private username: string,
        private password: string,
        private phoneNumber: string,
    ){}

    postAd(){
        console.log('not implemented yet')
    }
    addAdAsFavorite(){
        console.log('not implemented yet')
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
}