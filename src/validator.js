class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUserName(name) {
    return /^[0-9-_](?!.*\d{4})[A-Za-z0-9-_]+[0-9-_]$/.test(name);
  }
}

export const person = new Validator("Антошка");
