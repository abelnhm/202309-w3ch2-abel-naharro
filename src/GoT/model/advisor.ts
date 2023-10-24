import { Character } from './character';

export class Advisor extends Character {
  /*
  Conejero de una identidad, delación de dependencia entre 2 objetos.ç
  Es de tipo Character para crear una relación entre objetos.
  
  */
  advisorBoss: Character;

  constructor(
    name: string,
    family: string,
    age: number,
    advisorBoss: Character
  ) {
    super(name, family, age);
    this.category = 'Advisor';
    this.advisorBoss = advisorBoss;
  }
}
