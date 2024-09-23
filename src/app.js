export class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error("Персонаж уже существует в команде");
    } else {
      this.members.add(person);
    }
  }

  addAll(...persons) {
    persons.forEach((person) => {
      this.members.add(person);
    });
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
