import { person } from "../validator.js";

test("Проверка только латинских букв", () => {
  const name = "DGkjsdghkJadghd";
  const correct = false;
  expect(person.validateUserName(name)).toEqual(correct);
});

test("Проверка только латинских букв и окончания/начала цифрами и символами -_", () => {
  const name = "-DGkjsdghkJadghd_";
  const correct = true;
  expect(person.validateUserName(name)).toEqual(correct);
});

test("Проверка подряд более 3-ёх цифр", () => {
  const name = "-DGkjsdghe5454kJadghd_";
  const correct = false;
  expect(person.validateUserName(name)).toEqual(correct);
});

test("Проверка подряд 3-ёх цифр", () => {
  const name = "-DGkjsdghe544kJadghd_";
  const correct = true;
  expect(person.validateUserName(name)).toEqual(correct);
});
