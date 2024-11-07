/* Personas en un Bar

El gerente de una discoteca desea tener un registro del número de personas que ingresan al local. Para mantener un 
ambiente seguro y controlado, solo se permite la entrada a personas de entre 18 y 40 años. Actualmente, el total de 
personas en el local es de 270.

El gerente necesita saber:

* Cuántas personas menores de 21 años han ingresado.
* Cuántas personas de 21 años o más han ingresado
* El promedio de edad de las personas que ingresaron al local.
Para la simulación de las edades de los asistentes, puedes utilizar la siguiente función que genera 
un número aleatorio entre un valor mínimo y máximo:
*/

let totalPersonas: number = 270;
let mayoresVeintiuno: number = 0;
let menoresVeintiuno: number = 0;
let arr: number[] = new Array()
let sumaEdadesArr: number = 0;
let promedio: number = 0;

//Crea los nros aleatorios
function aleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funcion para cargar el arreglo de dimension 270
function llenarArreglo(arreglo: number[], dimension: number) {
    for (let i = 0; i < dimension; i++) {
        arreglo[i] = aleatorio(18, 40);
    }
}

(llenarArreglo(arr, totalPersonas));

// Funcion para mostrar arreglo
function mostrarArr(v: number[], cantidad: number) {
    for (let i = 0; i < cantidad; i++) {
        console.log(v[i], ``)
    }
}
mostrarArr(arr, totalPersonas)

//For para recorrer el arreglo y determinar menor o mayor de 21
for (let i = 0; i < totalPersonas; i++) {
    if (arr[i] < 21) {
        menoresVeintiuno += 1;
    } else {
        mayoresVeintiuno += 1
    }
}

console.log(`La cantidad de personas menores de 21 años es: ${menoresVeintiuno}
La cantidad de personas menores de 21 años es: ${mayoresVeintiuno}    `)

//For para sumar todas las edades dek arreglo
for (let i = 0; i < totalPersonas; i++) {
    sumaEdadesArr += arr[i]
}

promedio = sumaEdadesArr / totalPersonas;
console.log(`El promedio de edades dentro del bar es de ${Math.floor(promedio)} años.`)