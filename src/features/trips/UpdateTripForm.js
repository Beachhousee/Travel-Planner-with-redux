import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTrip } from "./tripsSlice";

const UpdateTripForm = ({ tripId, closeEdit }) => {
  const dispatch = useDispatch();
  const trip = useSelector((state) => state.trips.find((t) => t.id === tripId));
  const [title, setTitle] = useState(trip.title);
  const [location, setLocation] = useState(trip.location);
  const handleUpdate =(e)=>{
      e.preventDefault();
      dispatch(updateTrip({id:tripId,updatedTrip:{title,location}}))
      closeEdit()

  }
    return (
    <form onSubmit={handleUpdate}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={location} onChange={(e) => setLocation(e.target.value)} />
      <button type="submit">Update Trip</button>
    </form>
  );
};

export default UpdateTripForm;
