import { King } from '../model/king';

describe('Given the object King', () => {
  test('Then result should be of kingdomYears is 2', () => {
    const characterKing = new King('Joffrey', 'Baratheon', 16, 2);
    const expected = 2;
    const result = characterKing.kingdomYears;
    expect(result).toBe(expected);
  });
});

describe('Given the object King', () => {
  test('Then result should be of message is "Vais a morir todos"', () => {
    const characterKing = new King('Joffrey', 'Baratheon', 16, 2);
    const expected = 'Vais a morir todos';
    const result = characterKing.talk();
    expect(result).toBe(expected);
  });
});

describe('Given the King object with the dead method', () => {
  test('Then result should be to false', () => {
    const characterKing = new King('Joffrey', 'Baratheon', 16, 2);
    const killKing = characterKing.dead();
    const expected = false;
    const result = characterKing.isAlive;
    expect(result).toStrictEqual(expected);
  });
});
