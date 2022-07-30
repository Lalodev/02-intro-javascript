/*const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('https://ajdhbfjds.com');
  });

  return promesa;
};*/

const getImagen = async () => {
  try {
    const apiKey = 'IHStNSicQYmpAic1LB28i0seo6J0L3p2';
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await res.json();

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
};

getImagen();
