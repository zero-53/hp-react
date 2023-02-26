const API_herokuapp = "https://legacy--api.herokuapp.com/api/v1";
const API_onrender = "https://harry-potter-api.onrender.com";

/**
 * GetAllHouses() es una función asíncrona que obtiene datos de la API y los devuelve como un objeto
 * JSON.
 * @returns Una matriz de objetos.
 */
export async function getAllHouses() {
  try {
    const response = await fetch(`${API_herokuapp}/houses`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Esta función devolverá una promesa que se resolverá en una matriz de objetos, cada objeto
 * representando a una persona.
 * @returns Una matriz de objetos.
 */
export async function getAllPersons() {
  try {
    const response = await fetch(`${API_onrender}/personajes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Obtiene datos de dos API diferentes, luego combina los datos en una matriz.
 * @returns Una matriz de objetos.
 */
export async function getAllBooks() {
  try {
    const info = await fetch(`${API_onrender}/libros`).then((response) =>
      response.json()
    );
    const data2 = await fetch(`${API_herokuapp}/books`).then((response) =>
      response.json()
    );
    let data = [];
    for (let index = 0; index < info.length; index++) {
      data[index] = info[index];
      data[index].image_url =
        data2[index] !== undefined
          ? data2[index].image_url
          : `https://dummyimage.com/600x900/000000/fff.png&text=${data[
              index
            ].libro.replaceAll(" ", "+")}`;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function gelAllSpell(){
  try {
    const response = await fetch(`${API_onrender}/hechizos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Obtiene datos de dos API diferentes, luego combina los datos en un objeto.
 * @returns una promesa.
 */
export async function getBookById(id) {
  try {
    const info = await fetch(`${API_onrender}/libros/${id}`).then((response) =>
      response.json()
    );
    const data2 = await fetch(`${API_herokuapp}/books/${id}`).then((response) =>
      response.json()
    );
    info.image_url =
      data2.error === undefined
        ? data2.image_url
        : `https://dummyimage.com/600x900/000000/fff.png&text=${info.libro.replaceAll(
            " ",
            "+"
          )}`;
    info.pages = data2.error === undefined ? data2.pages : 0;
    info.editorial = data2.error === undefined ? data2.publisher : null;

    return info;
  } catch (error) {}
}
/**
 * Esta función devolverá una promesa que se resolverá con los datos de la llamada a la API, o la
 * rechazará con un error.
 * @returns Los datos se devuelven como un objeto.
 */
export async function getPersonById(id) {
  try {
    const response = await fetch(`${API_onrender}/personajes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
