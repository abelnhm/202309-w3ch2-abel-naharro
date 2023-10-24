//export abstract class Character implements CharacterStructure {
//con implements da error al tener una propiedad protected
export abstract class Character {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  //other option isAlive: 'live' | 'dead' | 'zombi' = 'live';

  /*PROTECTED
  - publica a nivel de herencia de clases, cerrada/privada para exterior
  - Si se crea una instancia de rey no se puede ver la propiedad del mensaje.
  para visualizarlo tendriamos que utilizar un metodo que devuelva la propiedad
  */

  protected message: string;
  category!: 'Kings' | 'Figther' | 'Advisor' | 'Squire';
  //! indicamos que no queremos inicializarla
  // lo hacemos porque es una clase abstracta y las inicializaciones las hace la clase hija

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.message = '';
  }

  talk() {
    return this.message;
  }

  dead() {
    this.isAlive = false;
  }
}

//usando type
//export type CharacterStructure = {

//usando interface (definir el conjunto de cosas que quiero que tenga un elemento)
//estructura final de cada personaje
export interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  message: string;
  category: 'Kings' | 'Figther' | 'Advisor' | 'Squire';

  //(?)opcional porque no todos los personajes lo tienen que tener
  kingdomYears?: number;
  skill?: number;
  weapon?: string;
  patron?: CharacterStructure; //decir que puede ser un conjunto de caracters de un personaje
  servilityGrade?: number;
  advisorBoss?: CharacterStructure;
}
