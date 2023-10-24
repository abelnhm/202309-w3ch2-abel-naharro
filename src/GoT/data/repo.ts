import { Character, CharacterStructure } from '../model/character';
import { King } from '../model/king';
import { Fighter } from '../model/fighter';
import { Squire } from '../model/squire';
import { Advisor } from '../model/advisor';

export function repoSerial(): CharacterStructure {
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  characters.push(
    new Advisor('Tyrion', 'Lannister', 40, characters[2]),
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  return JSON.parse(JSON.stringify(characters));
}

export function repo() {
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  characters.push(
    new Advisor('Tyrion', 'Lannister', 40, characters[2]),
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  return JSON.parse(JSON.stringify(characters));
}
