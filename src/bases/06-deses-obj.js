//Desestructuración
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const context = ({ nombre, edad, clave, rango = 'Capitán' }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.5545,
      lng: -12.5454,
    },
  };
};

const avenger = context(persona);

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = avenger;

//const { lat, lng } = latlng;

console.log(nombreClave, anios);

console.log(lat);
console.log(lng);
