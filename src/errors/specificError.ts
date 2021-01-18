export class SpecificError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.message = message;
    this.name = 'SpecificError';
    this.status = status;
  }

  toJson() {
    return {
      name: this.name,
      status: this.status,
      message: this.message,
    };
  }
}
