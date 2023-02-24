const API_herokuapp = "https://legacy--api.herokuapp.com/api/v1";
const API_onrender ="https://harry-potter-api.onrender.com";
export async function getAllHouses() {
  try {
    const response = await fetch(`${API_herokuapp}/houses`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllPersons(){
  try {
    const response = await fetch(`${API_onrender}/personajes`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}