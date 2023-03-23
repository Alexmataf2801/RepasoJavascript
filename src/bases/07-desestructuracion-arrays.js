const personajes = ['Goku','Vegeta','Trunks']

const [,,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return['ABC',123];
}

const [Letra,Numero] = retornaArreglo();
console.log(Letra,Numero);


const Estado = (valor) =>{
    return [valor, ()=>{console.log('Hola Perrillos')}]
}

const [Nombre,NombreSet] = Estado('Goku'); 

console.log(Nombre);
NombreSet();