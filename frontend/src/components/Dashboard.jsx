import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardlist from "../pages/Cardlist";

export default function Dashboard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/cards", {
        front,
        back,
      });
      alert("new card added");
    } catch (error) {
      console.error("Error submitting form", error);
    }
    window.location.reload();
  };

  return (
    <div className="p-3">
      <div className="text-white font-bold mb-3">Add New Card</div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={front}
          onChange={(e) => setFront(e.target.value)}
          placeholder="Front side"
          className="p-2 border border-gray-300 rounded md:w-1/3"
          required
        />
        <input
          type="text"
          value={back}
          onChange={(e) => setBack(e.target.value)}
          placeholder="Back side"
          className="p-2 border border-gray-300 rounded md:w-1/3"
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-[80px]"
        >
          Save
        </button>
      </form>

      <Cardlist />
    </div>
  );
}
