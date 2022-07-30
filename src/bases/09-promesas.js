import { getHeroeById, getHeroesByOwner } from './bases/08-imp-exp';

/*const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    resolve(heroe);
    //reject('No se pudo encontrar el héroe');
  }, 2000);
});

promesa
  .then((heroe) => {
    console.log('heroe', heroe);
  })
  .catch((err) => console.warn(err));*/

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el héroe');
      }
    }, 2000);
  });

  //const promesa =
  //return promesa
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
