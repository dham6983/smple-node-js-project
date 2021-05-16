const {add, multi} = require("./my-code.js")

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });


test('Product 1 * 2 to equal 2', () => {
    expect(multi(1, 2)).toBe(2);
  });