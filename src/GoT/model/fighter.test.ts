import { Fighter } from '../model/fighter';

describe('Given the object Fighter', () => {
  test('Then result should be of skill is 10', () => {
    const characterFighter = new Fighter(
      'Jaime',
      'Lannister',
      30,
      'Dragones',
      10
    );
    const expected = 10;
    const result = characterFighter.skill;
    expect(result).toBe(expected);
  });
});

describe('Given the object Fighter', () => {
  test('Then result should be of message is "Primero pego y luego pregunto"', () => {
    const characterFighter = new Fighter(
      'Jaime',
      'Lannister',
      30,
      'Dragones',
      10
    );
    const expected = 'Primero pego y luego pregunto';
    const result = characterFighter.talk();
    expect(result).toBe(expected);
  });
});

describe('Given the Fighter object with the dead method', () => {
  test('Then result should be to false', () => {
    const characterFighter = new Fighter(
      'Jaime',
      'Lannister',
      30,
      'Dragones',
      10
    );
    const killFighter = characterFighter.dead();
    const expected = false;
    const result = characterFighter.isAlive;
    expect(result).toStrictEqual(expected);
  });
});
