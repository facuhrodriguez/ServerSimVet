export class AuthError extends Error {
    constructor() {
        super('You do not access');
        this.name = 'AuthError';
    }

    toJson(){
        return {
            name: this.name,
            status: 401,
            message: this.message,
        }
    }
}
