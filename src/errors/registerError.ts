export class RegisterError extends Error {
    constructor() {
        super('The entered email already exists');
        this.name = 'RegisterError';
    }

    toJson(){
        return {
            name: this.name,
            status: 403,
            message: this.message,
        }
    }
}
