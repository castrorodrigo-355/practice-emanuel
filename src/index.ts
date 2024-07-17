import { evenNumber, processDouble, processTriple } from './utils/numbers';

console.clear();
// TYPESCRIPT !!!
// REUTILIZACION !!!

// EJ 1: Definir una FUNCION que reciba 3 numeros y retorne la suma
// EJ 3: Definir una FUNCION que reciba 1 numero y retorne el doble

// CONDICIONAL IF (Decision)

// EJ 4: Imprimir los 10 primeros numeros natulares
// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }

const a = 1011;
const b = 512;
// if (a > b) {
//   console.log('10 es mayor a 5');
// } else {
//   console.log('10 NO es mayor a 5');
// }
// const result = a > b ? `${a} es mayor que ${b}` : `${a} NO es mayor que ${b}`;
const result = `${a} ${a > b ? '' : 'NO'} es mayor que ${b}`;
// console.log('RESULT: ', result);

// CICLO FOR (Iteracion DETERMINADA, Vos sabes cuantas veces se itera)
// EJ 5: Imprimir los 10 primeros numeros naturales indicando si son pares o impares,
// tambien imprimir sus dobles y los triples.

// for (let index = 1; index <= 10; index++) {
//   console.log(
//     index,
//     evenNumber(index) ? 'Par' : 'Impar',
//     processDouble(index),
//     processTriple(index)
//   );
// }

const names: Array<string> = [
  'Rodrigo',
  'Fernando',
  'Giovani',
  'Damaris',
  'Emanuel',
];

// // EJ de strings
// const person: string = 'emanuel';
// // EJ 1. Longitud de un string.
// console.log('EJ 1: ', person.length);
// // EJ 2. Convertir un string a mayusculas.
// console.log('EJ 2: ', person.toUpperCase());
// // EJ 3. Capturar la primera letra de un string.
// console.log('EJ 3: ', person[0]);
// // EJ 4. Determinar si un string arranca con una vocal.
// console.log(
//   'EJ 4: ',
//   person.startsWith('a') ||
//     person.startsWith('e') ||
//     person.startsWith('i') ||
//     person.startsWith('o') ||
//     person.startsWith('u')
//     ? 'Arranca con vocal'
//     : 'No arranca con vocal'
// );
// console.log(
//   'EJ 4 Bis: ',
//   ['A', 'E', 'I', 'O', 'U'].includes(person[0].toUpperCase())
//     ? 'Arranca con vocal'
//     : 'No arranca con vocal'
// );

// EJ 5. Dado la coleccion de names indicar la longitud de cada element.
//       convertilo a mayusculas, capturar la primera letra
//       y determinar si arranca con una vocal

names.forEach((name) => {
  console.log(
    name,
    name.length,
    name.toUpperCase(),
    name[0],
['A', 'E', 'I', 'O', 'U'].includes(name[0].toUpperCase())
  ? 'Arranca con vocal'
  : 'No arranca con vocal'
  );
});
console.log("")
const size = names.length;
for (let index = 0; index < size; index++) {
  const currentName = names[index];
  console.log(
    currentName,
    currentName.length,
    currentName.toUpperCase(),
    currentName[0],
    ['A', 'E', 'I', 'O', 'U'].includes(currentName[0].toUpperCase())
      ? 'Arranca con vocal'
      : 'No arranca con vocal'
  );
}
