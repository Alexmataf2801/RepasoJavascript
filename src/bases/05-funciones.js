/*function Saludar(nombre){
    return `Hola,${nombre}`;
}*/

/*const saludar = function(nombre){
    return `Hola,${nombre}`;
}*/

const saludar2 = (nombre) => {
    return `Hola,${nombre}`;
}

const saludar3 = (nombre) => `Hola,${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser =() => {
    return{
        uid:'ABC',
        username:'Alexillo'
    }
}

/*function getUsuarioActivo(nombre){
    return{
        uid:'ABC',
        username: nombre
    }
};*/


const getUsuarioActivo = (nombre)=>
    ({
        uid:'ABC',
        username: nombre
    } )

const user = getUser();
console.log(user);

const usuarioActivo = getUsuarioActivo('Alex33');

console.log(usuarioActivo);
