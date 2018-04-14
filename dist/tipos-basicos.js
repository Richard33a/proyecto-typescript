"use strict";
var numeroEstudiantes;
numeroEstudiantes = 35;
console.log('numeroEstudiantes', numeroEstudiantes);
var cursoIniciado = true;
var nombreCurso = 'Angular desde Cero';
// Cadenas multilinea usando ``.
var contenidoCurso = "\n    Herramientas de Desarrollo\n    Introduccion a TypeScript\n    Introduccion a Angular\n";
console.log('nombreCurso:', nombreCurso);
console.log('contenidoCurso:', contenidoCurso);
var bienbenida = "Bienvenidos al curso " + nombreCurso;
console.log(bienbenida);
var bienbenidaDos = 'Bienvenidos al curso ' + nombreCurso;
console.log(bienbenidaDos);
// Arrays
var arregloA = [1, 2, 3, 4, 5, 6];
console.log('arregloA: ', arregloA);
var arregloB = ['a', 'b', 'c', 'd'];
console.log('arregloB: ', arregloB);
var arregloC;
arregloC = ['a', 'b', 'c', 'd', 'e'];
console.log('arregloC: ', arregloC);
// TypeScript Enums
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["MARTES"] = 0] = "MARTES";
    DiaCurso[DiaCurso["VIERNES"] = 1] = "VIERNES";
})(DiaCurso || (DiaCurso = {}));
;
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["LUNES"] = 0] = "LUNES";
    DiasSemana[DiasSemana["MARTES"] = 1] = "MARTES";
    DiasSemana[DiasSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiasSemana[DiasSemana["JUEVES"] = 3] = "JUEVES";
    DiasSemana[DiasSemana["VIERNES"] = 4] = "VIERNES";
})(DiasSemana || (DiasSemana = {}));
;
var primerDia;
primerDia = DiaCurso.MARTES;
console.log('primerDia: ', primerDia);
console.log('primerDia(string): ', DiaCurso[0]);
console.log('primerDia(string): ', DiaCurso[DiaCurso.MARTES]);
// any guarda cualquier tipo de dato (no es recomendado)
var miVariable;
miVariable = 5;
miVariable = 'hola';
miVariable = true;
// Constantes
var PI = 3.14;
console.log('Constante PI: ', PI);
var PERSONA = {
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
function holaMundo() {
    return "Hola Mundo";
}
// Procedimiento
function saludar(mensaje) {
    console.log('Saludo: ', mensaje);
}
saludar('Me gusta TypeScript');
