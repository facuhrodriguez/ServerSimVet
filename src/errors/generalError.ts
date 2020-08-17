export class GeneralError extends Error {
    constructor() {
        super('An error has occurred');
        this.name = 'GeneralError';
    }

    toJson(){
        return {
            name : this.name,
            status : 500,
            message : this.message
        }
    }
}
