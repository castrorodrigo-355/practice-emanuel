// EJ 1: Forma tradicional (tipos de arguments y tipo de retorno) TIPO DE DATO !!!
export function addition(v1: number, v2: number, v3: number): number {
  return v1 + v2 + v3;
}

// EL LENGUAJE INFIERE (INFERENCIA) EL TIPO DE DATO QUE RETORNA
// EJ 3:
export function processDouble(value: number): number {
  return value * 2;
}

export function processTriple(value: number): number {
  return value * 3;
}

// console.log((10 % 2) == "0") // Comparacion entre distintos tipos de datos
// console.log(10 % 2 === 0); // Comparacion entre iguales tipos de datos
export function evenNumber(value: number): boolean {
  return value % 2 === 0;
}