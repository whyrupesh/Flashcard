import React, { useState } from "react";

export default function Card({ flashcards, flip, handleClick }) {
  return (
    <>
      <div className="flex justify-center">
        <div className={`card ${flip ? "flip" : ""}`} onClick={handleClick}>
          <div className="front">{flashcards.front}</div>
          <div className="back">{flashcards.back}</div>
        </div>
      </div>
    </>
  );
}
