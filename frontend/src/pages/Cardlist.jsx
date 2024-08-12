import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cardlist() {
  const [cards, setcards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((response) => setcards(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteCard = (id) => {
    axios
      .delete(`http://localhost:5000/cards/${id}`)
      .then(() => {
        setcards(cards.filter((card) => card._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="text-white font-bold mb-3 mt-2">Add Cards List</div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center rtl:text-right text-white-500">
          <thead className="text-xs text-white-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                Answer
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="mt-2 text-white">
            {cards.map((card) => {
              return (
                <tr key={card._id} className="border-b">
                  <td>{card.front}</td>
                  <td>{card.back}</td>
                  <td>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 me-2 mb-2"
                      onClick={() => deleteCard(card._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
