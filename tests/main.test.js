import { addition, subtraction, multiplication, division } from '..';

describe('Sprawdzanie działania dodawania', () => {
  test('2 + 3 jest równe 5', () => {
    expect(addition(2, 3)).toBe(5);
  })

  test('2 + -3 jest równe 5', () => {
    expect(addition(2, -3)).toBe(-1);
  })

  test('2 + "3" jest równe NaN', () => {
    expect(addition(2, "3")).toBe(NaN);
  })

  test('2 + undefined jest równe 5', () => {
    expect(addition(2, undefined)).toBe(undefined);
  })
})

describe('Sprawdzanie działania odejmowania', () => {
  test('51 - 20 jest równe 31', () => {
    expect(subtraction(51, 20)).toBe(31);
  })

  test('-5 - -3 jest równe -8', () => {
    expect(subtraction(-5, -3)).toBe(-2);
  })

  test('122 - "3" jest równe NaN', () => {
    expect(subtraction(-122, "3")).toBe(NaN);
  })

  test('0 + undefined jest równe 5', () => {
    expect(subtraction(2, undefined)).toBe(undefined);
  })
})

describe('Sprawdzanie działania mnożenia', () => {
  test('1 * 5 jest równe 5', () => {
    expect(multiplication(1, 5)).toBe(5);
  })

  test('100 * -4 jest równe -400', () => {
    expect(multiplication(100, -4)).toBe(-400);
  })

  test('52 * "3" jest równe NaN', () => {
    expect(multiplication(52, "3")).toBe(NaN);
  })

  test('6 * undefined jest równe 5', () => {
    expect(multiplication(6, undefined)).toBe(undefined);
  })
})

describe('Sprawdzanie działania dzielenia', () => {
  test('9 / 3 jest równe 3', () => {
    expect(division(9, 3)).toBe(3);
  })

  test('-30 / -3 jest równe 5', () => {
    expect(division(-30, -3)).toBe(10);
  })

  test('2 / "3" jest równe NaN', () => {
    expect(division(2, "3")).toBe(NaN);
  })

  test('2 / undefined jest równe 5', () => {
    expect(division(2, undefined)).toBe(undefined);
  })
})