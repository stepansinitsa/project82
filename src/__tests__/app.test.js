import { ErrorRepository } from "../app";

const errors = new ErrorRepository();

test("Ошибка 400 - success", () => {
  expect(errors.translate(400)).toBe("Bad Request");
});

test("Ошибка 404 - success", () => {
  expect(errors.translate(404)).toBe("Not Found");
});

test("Ошибка 500 - success", () => {
  expect(errors.translate(500)).toBe("Internal Server Error");
});

test("Ошибки 700 - false", () => {
  expect(errors.translate(700)).toBe("Unknown error");
});
