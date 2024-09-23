import { Team } from "../app.js";

test("Проверка на добавление персонажа", () => {
  const newTeam = new Team();
  const person = { name: "Oliver", type: "Ogr" };
  newTeam.add(person);

  const newSet = new Set();
  newSet.add({ name: "Oliver", type: "Ogr" });

  expect(newTeam.members).toEqual(newSet);
});

test("Проверка на добавление cуществующего персонажа", () => {
  const newTeam = new Team();

  const person = { name: "Oliver", type: "Ogr" };
  newTeam.add(person);

  expect(function () {
    newTeam.add(person);
  }).toThrowError("Персонаж уже существует в команде");
});

test("Проверка на преобразование в массив", () => {
  const newTeam = new Team();

  const person1 = { name: "Oliver", age: 34 };
  const person2 = { name: "Anna", age: 43 };
  const person3 = { name: "Igor", age: 1412 };

  newTeam.addAll(person1, person2, person3);

  newTeam.toArray();

  const correct = [
    { name: "Oliver", age: 34 },
    { name: "Anna", age: 43 },
    { name: "Igor", age: 1412 },
  ];

  expect(newTeam.members).toEqual(correct);
});
