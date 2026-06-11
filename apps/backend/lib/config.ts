class Config {
    public readonly environment: string;
    public readonly port: number;

    constructor() {
        this.environment = process.env.ENVIRONMENT || "development";
        this.port = parseInt(process.env.PORT || "5000", 10);
    }
}

// Freezing the instance to prevent changes at runtime
export const config = Object.freeze(new Config());
