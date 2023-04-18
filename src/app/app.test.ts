import { expect, test } from "@jest/globals";
import { sayHello } from "./app.service";

test("say hello should print Hello World!", () => {
  expect(sayHello()).toBe("Hello World!");
});
