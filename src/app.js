export class ErrorRepository {
  constructor() {
    this.errorsMapArray = new Map([
      [400, "Bad Request"],
      [404, "Not Found"],
      [500, "Internal Server Error"],
    ]);
  }

  translate(code) {
    return this.errorsMapArray.get(code) || "Unknown error";
  }
}
