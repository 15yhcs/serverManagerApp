export class AuthService {
    LoggedIn = false;
    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.LoggedIn)
                }, 100)
            }
        )
        return promise
    }
    login(){
        this.LoggedIn = true;
    }

    logout(){
        this.LoggedIn = false;
    }
}