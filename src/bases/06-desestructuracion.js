////Desestructuracion
//// Asignacion desestructurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango:'Lider'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const Contexto = ({clave,nombre,edad, rango = 'capitan'}) => {
    // console.log(nombre,edad,rango);

    return {
        nombreClave:clave,
        anios:edad,
        latlng: {
            lat: 14.1589,
            lng:-12.4848
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = Contexto(persona);

console.log(nombreClave,anios);
console.log(lat,lng);