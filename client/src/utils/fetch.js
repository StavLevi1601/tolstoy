import axios from "axios";

export const fetchUrls = async (data) => {
  try {
    const response = await axios.post(`http://localhost:3000/url`, data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
