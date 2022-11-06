
// OBJETIVO String a devolver: Viernes 4 de Noviembre de 2022

//notas:
//let date = new Date(); //en el momento que corro el script me tira la fecha

// devuelve de 0 a 6 - (domingo a sábado)
//let day = date.getDay();

/*
//CÓMO RESOLVERLO USANDO UN ARRAY
const dias = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
];

console.log(dias[day]);
*/

/*
//CÓMO RESOLVERLO USANDO UN SWITCH

switch(day) {
    case 0: console.log("Domingo");
    break;

    case 1: console.log("Lunes");
    break;

    case 2: console.log("Martes");
    break;

    case 3: console.log("Miércoles");
    break;

    case 4: console.log("Jueves");
    break;

    case 5: console.log("Viernes");
    break;

    case 6: console.log("Sábado");
    break;
}
*/


//CON EL PROTOTIPADO VAMOS A INVENTAR UN METODO PARA EL OBJETO DATE QUE YA DEVUELVA DIRECTAMENTE EL STRING DEL DIA ACTUAL


let date = new Date();


/** Método que imprime la fecha actual
 * @returns fecha completa con la siguiente estructura DIA N° de MES de AÑO
 */
//Date.prototype.obtenerFechaCompleta() = function() {
    /**
     * Método para que traduzca el número de día a su nombre
     * @returns el nombre del día de la semana
     */
    Date.prototype.obtenerNombreDia = function() {
        const dias = [
            "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
        ];

        return dias[this.getDay()]; //el this permite llamar al método. La única forma que tiene la clase de referenciar al objeto que lo está invocando es el this.

    }

    /**
     * Método para que traduzca el número de mes a su nombre
     * @returns el nombre del mes del año
     */
    Date.prototype.obtenerNombreMes = function() {
        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        return meses[this.getMonth()];

    }


    console.log(`${date.obtenerNombreDia()} ${date.getDate()} de ${date.obtenerNombreMes()} de ${date.getFullYear()}`);

//}

//console.log(date.obtenerFechaCompleta());




//DUDA
//en la línea 56 intento encerrar todo en un método llamado obtenerFechaCompleta, pero me tira el error Uncaught TypeError: Date.prototype.obtenerFechaCompleta is not a function

//y en la linea 84 cambiaba el console por un return