export class User{        
    private favoriteAdsIds: string[] | undefined
    constructor(
        private id: number,
        private email: string,
        private username: string,
        private password: string,
        private phoneNumber: string,
    ){}

    addAdAsFavorite(){
        console.log('not implemented yet')
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
    changeUserInfo(password: string, phoneNumber: string){
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}