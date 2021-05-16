const {add, multi, minus} = require("./my-code.js")

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });


test('Product 1 * 2 to equal 2', () => {
    expect(multi(1, 2)).toBe(2);
  });

  test('Minus of 1 - 2 to equal to -1', () => {
    expect(minus(1,2)).toBe(-1)
  });

  test('Minus of 4 - 2 to equal to 2', () => {
    expect(minus(4,2)).toBe(2)
  });