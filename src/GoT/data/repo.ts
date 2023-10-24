import { Character, CharacterStructure } from '../model/character';
import { King } from '../model/king';
import { Fighter } from '../model/fighter';
import { Squire } from '../model/squire';
import { Advisor } from '../model/advisor';

//Repo serializado
//tipado array de personajes, devuelve un array de objetos sin metodos
//al serializarlo depasarecen los metodos.
export function repoSerial(): CharacterStructure {
  //el repo devuelve (return) al serializarse CharacterStructure
  //se especifica el tipo Character para poder aumentar el tamaño del array de objetos.
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  //se indican fuera para poder llamar primero al array
  //characters[2] no da alerta porque puede ser cualquiera de los characters
  //especifica al character al que pertenece unicamente Fighter
  characters.push(
    new Advisor('Tyrion', 'Lannister', 40, characters[2]),
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  //ENVIAR DATOS SERIALIZADOS, añadir una propiedad que indique la categoria para entender cada elemento del js
  //const reponse: CharacterStructure = JSON.parse(JSON.stringify(characters));
  return JSON.parse(JSON.stringify(characters));
}

//Repo sin serializar
//tipado array de personajes
export function repo() {
  //el repo devuelve (return) al serializarse CharacterStructure
  //se especifica el tipo Character para poder aumentar el tamaño del array de objetos.
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2),
    new Fighter('Jaime', 'Lannister', 30, 'Dragones', 10),
    new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10),
  ];

  //se indican fuera para poder llamar primero al array
  //characters[2] no da alerta porque puede ser cualquiera de los characters
  //especifica al character al que pertenece unicamente Fighter
  characters.push(
    new Advisor('Tyrion', 'Lannister', 40, characters[2]),
    new Squire('Bronn', 'AguasNegras', 54, 0, characters[1] as Fighter)
  );

  //ENVIAR DATOS SERIALIZADOS, añadir una propiedad que indique la categoria para entender cada elemento del js
  //const reponse: CharacterStructure = JSON.parse(JSON.stringify(characters));
  return JSON.parse(JSON.stringify(characters));
}
