 //import heroes from './data/heroes'
import {getHeroeById} from './bases/08-imp-exp'


// // const promesa = new Promise((resolve,reject)=>{

// //     // setTimeout(() => {
// //     //     resolve();
// //     // }, 2000);

// // setTimeout(() => {
// //     const heroe = getHeroeById(2);///getHeroeById(2);
// //     resolve(heroe);
// // }, 2000);

// // });

// // const getHeroeById = (id)=>{
// //     return heroes.find(hero => hero.id === id);
// // }

// promesa.then((heroe) => {
//     console.log('heroe',heroe)
// })
// .catch(err => console.warn(err))

const getHeroeByAsync = (id) => {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se encontro el heroe con el valor ' + id)
            }
        }, 2000);

    });
}

getHeroeByAsync(3)
.then(console.log)
.catch(console.warn)