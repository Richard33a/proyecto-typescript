let numeroEstudiantes:number;
numeroEstudiantes = 35;
console.log('numeroEstudiantes',numeroEstudiantes);

let cursoIniciado:boolean = true;

let nombreCurso: string = 'Angular desde Cero';
// Cadenas multilinea usando ``.
let contenidoCurso: string = `
    Herramientas de Desarrollo
    Introduccion a TypeScript
    Introduccion a Angular
`;

console.log('nombreCurso:',nombreCurso);
console.log('contenidoCurso:',contenidoCurso);

let bienbenida:string = `Bienvenidos al curso ${nombreCurso}`;
console.log(bienbenida);
let bienbenidaDos:string = 'Bienvenidos al curso ' + nombreCurso;
console.log(bienbenidaDos);

// Arrays
let arregloA:number[] = [1,2,3,4,5,6];
console.log('arregloA: ',arregloA);
let arregloB:string[] = ['a','b','c','d'];
console.log('arregloB: ',arregloB);
let arregloC: Array<string>;
arregloC = ['a','b','c','d','e'];
console.log('arregloC: ',arregloC);

// TypeScript Enums
enum DiaCurso {MARTES, VIERNES};
enum DiasSemana {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES};

let primerDia: DiaCurso;
primerDia = DiaCurso.MARTES;
console.log('primerDia: ',primerDia);
console.log('primerDia(string): ', DiaCurso[0]);
console.log('primerDia(string): ', DiaCurso[DiaCurso.MARTES]);

// any guarda cualquier tipo de dato (no es recomendado)
let miVariable:any;
miVariable = 5;
miVariable = 'hola';
miVariable = true;

// Constantes
const PI = 3.14;
console.log('Constante PI: ',PI);

const PERSONA:any = {
    nombre: 'Luis',
    curso: 'Angular'
};
console.log('PERSONA:', PERSONA);
// Mutacion del objeto (Se puede)
PERSONA.nombre = 'Juan';
PERSONA.curso = 'AngularJS';
console.log('PERSONA:', PERSONA);

// Funciones
//  retorna un ojeto espesifico
function holaMundo():string {
    return "Hola Mundo";
}
// Procedimiento
function saludar(mensaje:string):void {
    console.log('Saludo: ', mensaje);
}
saludar('Me gusta TypeScript');