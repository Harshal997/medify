import axios from "axios";

const baseUrl = "https://meddata-backend.onrender.com";

export const getAllStates = async () => {
  try {
const response = await axios.get(`${baseUrl}/states`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("Error fetching data: ", e);
  }
};

export const getCitiesByState = async (state) => {
  try {
    const response = await axios.get(`${baseUrl}/cities/${state}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("Error fetching data: ", e);
  }
};

export const getCentersByStatesAndCities = async (state, city) => {
  try {
    const response = await axios.get(
      `${baseUrl}/data?state=${state}&city=${city}`
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("Error fetching data: ", e);
  }
};
