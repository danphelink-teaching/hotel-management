import axios from "axios";

const postHotelData = async (hotelData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/hotels/create",
      hotelData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error posting hotel data:", error);
    throw error;
  }
};

export default postHotelData;
