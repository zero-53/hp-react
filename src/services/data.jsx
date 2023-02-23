const API_herokuapp = "https://legacy--api.herokuapp.com/api/v1/";

export async function getAllHouses() {
  try {
    const response = await fetch(`${API_herokuapp}/houses`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
