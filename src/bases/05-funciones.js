//Funciones

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => `Hola ${nombre}`;

//saludar = 30;

//console.log(saludar);
console.log(saludar2('Goku'));

console.log('-------------------------');

//React
const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502',
});

console.log(getUser());

//Tarea
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC456',
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
