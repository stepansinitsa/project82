import { person } from "../app.js";

test("personLevelUp", () => {
  const result = person.levelUp(1, 1, 25, 25);
  expect(result).toEqual([
    100,
    2,
    30,
    30])}
);

test("personDamage", () => {
  const result = person.damage(15, 15, 5);
  expect(result).toBe(0.75)}
);