
const nombre = "ALex";
const apellido = "Mata";

//onst nombreCompleto = nombre + ' ' + apellido;
const persona = {
    nombre: 'Alex',
    apellido:'Mata',
    edad:32,
    direccion:{
        ciudad:'San Jose',
        ZipCode: 123,
        lat: 456,
        lng:698
    }
};

//console.table(persona)

//... operador spread
const persona2 = {...persona}

persona2.nombre = 'Manuel'

console.log(persona)
console.log(persona2);