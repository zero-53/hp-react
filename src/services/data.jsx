const API_herokuapp = "https://legacy--api.herokuapp.com/api/v1";
const API_onrender = "https://harry-potter-api.onrender.com";

export async function getAllHouses() {
  try {
    const response = await fetch(`${API_herokuapp}/houses`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllPersons() {
  try {
    const response = await fetch(`${API_onrender}/personajes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

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
