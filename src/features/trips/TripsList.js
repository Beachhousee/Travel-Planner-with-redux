import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTrip } from "./tripsSlice";

const TripsList = () => {
  const dispatch = dispatchEvent();
  const handleDelete = (id) => {
    dispatch(deleteTrip());
  };
  const trips = useSelector((state) => state.trips);
  return (
    <div>
      <h2>Planned Trips</h2>
      {trips.length === 0 && <p>No trips added yet.</p>}
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <strong>{trip.title}</strong> - {trip.location}
            <button
              onClick={() => handleDelete(trip.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripsList;
