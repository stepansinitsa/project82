export class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  };
  levelUp (health, level, attack , defence) {
    if (health > 0) {
      level = level + 1;
      attack = attack * 1.2;
      defence = defence * 1.2;
      health = 100;
      return [health, level, attack, defence];
    } else {
      throw new Error("Нельзя повысить level умершего");
    }
  };
  damage(points, health, defence) {
    if (health >= 0) {
      health -= points * (1 - defence / 100)
      return health;
    } else {
      throw new Error("Значение health < 0");
    }
  }
};


export class Bowerman extends Character {
  constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
  }
};


export const person = new Bowerman(13, 1, 25, 25);
