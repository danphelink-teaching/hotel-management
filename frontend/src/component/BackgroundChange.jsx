import React, { useEffect, useState } from "react";
import getHotelData from "../service/getHotelData";
import postHotelData from "../service/postHotelData";

const BackgroundChange = ({ background, setBackground }) => {
  const [hotelData, setHotelData] = useState([]);
  const [newHotel, setNewHotel] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const data = await getHotelData();
        console.log("API Response:", data);
        setHotelData(data); // Use data.hotels based on your backend response
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotelData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHotel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Creating hotel with data:", newHotel);
      const response = await postHotelData(newHotel);
      console.log("Hotel created successfully:", response);
      setHotelData([...hotelData, response.hotel]); // Update local state with the new hotel
      setNewHotel({ name: "", address: "", contact: "", email: "" }); // Reset form
    } catch (error) {
      console.error("Error creating hotel:", error);
    }
  };

  // Log hotelData whenever it changes
  useEffect(() => {
    console.log("Hotel data updated:", hotelData);
  }, [hotelData]);

  return (
    <>
      <div>List of Hotel</div>
      {hotelData && hotelData.length > 0 ? (
        hotelData.map((hotel, index) => <div key={index}>{hotel.name}</div>)
      ) : (
        <div>No hotels found</div>
      )}
      <div>
        <h1>Create a hotel</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Hotel Name"
            name="name"
            value={newHotel.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Hotel Location"
            name="address"
            value={newHotel.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            value={newHotel.contact}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={newHotel.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Create Hotel</button>
        </form>
      </div>
    </>
  );
};

export default BackgroundChange;
