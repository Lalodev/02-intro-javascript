import heroes, { owners } from '../data/heroes';

//find
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

//filter
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));

//console.log(owners);

export { getHeroeById, getHeroesByOwner };
