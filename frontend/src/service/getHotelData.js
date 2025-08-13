import axios from "axios";

const getHotelData = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/hotels/all");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    throw error;
  }
};
const postHotelData = async (hotel) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/hotels/create",
      hotel,
    );
    return response.data;
  } catch (error) {
    console.error("Error posting hotel data:", error);
    throw error;
  }
};

export default getHotelData;
