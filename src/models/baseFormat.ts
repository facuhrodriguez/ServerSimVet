export abstract class BaseFormat {
    protected query: any;

    constructor(query: any) {
        this.query = query;
    }

    public abstract formatQuery(): any;
}