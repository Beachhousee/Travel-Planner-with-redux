import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "./tripsSlice";
import { v4 as uuidv4 } from "uuid";

const AddTripForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: uuidv4(),
      title,
      location,
    };
    dispatch(addTrip(newTrip));
    setTitle("");
    setLocation("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Trip title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddTripForm;
