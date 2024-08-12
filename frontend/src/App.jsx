import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };

  useEffect(() => {
    setFlashcards(SAMPLE_FLASHCARDS[currentIndex]);
  }, [currentIndex]);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(SAMPLE_FLASHCARDS.length - 1);
    }
    setFlip(false);
  };

  const handleRightClick = () => {
    if (currentIndex < SAMPLE_FLASHCARDS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setFlip(false);
  };

  return (
    <>
      <Navbar />

      <div className="flex space-x-9 justify-center items-center mt-5">
        <div className="flex space-x-9 justify-center items-center mt-5">
          <FaArrowCircleLeft color="white" onClick={handleLeftClick} />
          <Card flashcards={flashcards} flip={flip} handleClick={handleClick} />

          <FaArrowCircleRight color="white" onClick={handleRightClick} />
        </div>
      </div>
    </>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    front: "DSA",
    back: "Data Structure and Algorithm",
  },
  {
    id: 2,
    front: "How to initialize vector?",
    back: "vector<int> vector_name",
  },
  {
    id: 3,
    front: "DBMS",
    back: "Database Management System",
  },
  {
    id: 4,
    front: "2+2 = ?",
    back: "4",
  },
  {
    id: 5,
    front: "TUF +",
    back: "Take You Forward +",
  },
  {
    id: 6,
    front: "MERN",
    back: "MongoDM Express React Nodejs",
  },
];
