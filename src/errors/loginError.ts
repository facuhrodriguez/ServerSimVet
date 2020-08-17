
export class LoginError extends Error {
    constructor() {
        super('The data entered is wrong');
        this.name = 'AuthError';
        this.message = "The data entered is wrong";
    }

    toJson(){
        return {
            name: this.name,
            status: 401,
            message: this.message,
        }
    }
}
