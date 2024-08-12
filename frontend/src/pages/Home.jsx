import React, { Suspense } from "react";
import Card from "../components/Card";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards, setFlashcards] = useState([]);
  const [flip, setFlip] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setFlip(!flip);
  };

  // Fetch flashcards from the backend API
  useEffect(() => {
    fetch("https://flashcard-fzgh.onrender.com/cards")
      .then((response) => response.json())
      .then((data) => {
        setFlashcards(data);
        setCurrentIndex(0); // Start with the first flashcard
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching flashcards:", error);
        setLoading(false);
      });
  }, []);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcards.length - 1);
    }
    setFlip(false);
  };

  const handleRightClick = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setFlip(false);
  };

  return (
    <>
      <div className="flex space-x-9 justify-center items-center mt-5">
        <FaArrowCircleLeft color="white" onClick={handleLeftClick} />

        {loading ? (
          <Loading />
        ) : (
          <Card
            flashcards={flashcards[currentIndex]}
            flip={flip}
            handleClick={handleClick}
          />
        )}

        <FaArrowCircleRight color="white" onClick={handleRightClick} />
      </div>
    </>
  );
}
