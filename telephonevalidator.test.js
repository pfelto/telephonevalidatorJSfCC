/* eslint-disable no-undef */
const telephoneCheck = require("./telephonevalidator");

describe("Validating a bunch of different numbers", () => {
  test("555-555-5555", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
  });
  test("should 2", () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
  });
  test("should 3", () => {
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
  });
  test("should 4", () => {
    expect(telephoneCheck("5555555555")).toBe(true);
  });
  test("should 5", () => {
    expect(telephoneCheck("(555)555-5555")).toBe(true);
  });
  test("should 6", () => {
    expect(telephoneCheck("1(555)555-5555")).toBe(true);
  });
  test("should 7", () => {
    expect(telephoneCheck("555-5555")).toBe(true);
  });
  test("should 8", () => {
    expect(telephoneCheck("5555555")).toBe(true);
  });
  test("should 9", () => {
    expect(telephoneCheck("1 555)555-5555")).toBe(true);
  });
  test("should 10", () => {
    expect(telephoneCheck("1 555 555 5555")).toBe(true);
  });
  test("should 11", () => {
    expect(telephoneCheck("1 456 789 4444")).toBe(true);
  });
  test("should 12", () => {
    expect(telephoneCheck("123**&!!asdf#")).toBe(true);
  });
  test("should 13", () => {
    expect(telephoneCheck("55555555")).toBe(true);
  });
  test("should 14", () => {
    expect(telephoneCheck("(6054756961)")).toBe(true);
  });
  test("should 15", () => {
    expect(telephoneCheck("2 (757) 622-7382")).toBe(true);
  });
  test("should 16", () => {
    expect(telephoneCheck("0 (757) 622-7382")).toBe(true);
  });
  test("should 17", () => {
    expect(telephoneCheck("-1 (757) 622-7382")).toBe(true);
  });
  test("should 18", () => {
    expect(telephoneCheck("2 757 622-7382")).toBe(true);
  });
  test("should 19", () => {
    expect(telephoneCheck("10 (757) 622-7382")).toBe(true);
  });
  test("should 20", () => {
    expect(telephoneCheck("27576227382")).toBe(true);
  });
  test("should 21", () => {
    expect(telephoneCheck("(275)76227382")).toBe(true);
  });
  test("should 22", () => {
    expect(telephoneCheck("2(757)6227382")).toBe(true);
  });
  test("should 23", () => {
    expect(telephoneCheck("2(757)622-7382")).toBe(true);
  });
  test("should 24", () => {
    expect(telephoneCheck("555)-555-5555")).toBe(true);
  });
  test("should 25", () => {
    expect(telephoneCheck("(555-555-5555")).toBe(true);
  });
  test("should 26", () => {
    expect(telephoneCheck("(555)5(55?)-5555")).toBe(true);
  });
  test("should 27", () => {
    expect(telephoneCheck("55 55-55-555-5")).toBe(true);
  });
  test("should 28", () => {
    expect(telephoneCheck("11 555-555-5555")).toBe(true);
  });
});
