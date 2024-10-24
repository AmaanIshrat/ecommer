// src/components/FAQ.js
import React, { useState } from 'react';

export default function FAQ() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="mb-4 border border-gray-300 rounded-md bg-light-purple-100 p-4">
        <h2 className="font-semibold flex justify-between items-center">
          Question 1: What is this site about?
          <button
            onClick={() => toggleAnswer(1)}
            className="text-purple-500 focus:outline-none"
          >
            {visibleAnswers[1] ? '-' : '+'}
          </button>
        </h2>
        {visibleAnswers[1] && (
          <p className="bg-light-purple-200 p-2 rounded-md mt-2">
            This site is about providing information on our product collections, and more.
          </p>
        )}
      </div>
      <div className="mb-4 border border-gray-300 rounded-md bg-light-purple-100 p-4">
        <h2 className="font-semibold flex justify-between items-center">
          Question 2: How can I contact support?
          <button
            onClick={() => toggleAnswer(2)}
            className="text-purple-500 focus:outline-none"
          >
            {visibleAnswers[2] ? '-' : '+'}
          </button>
        </h2>
        {visibleAnswers[2] && (
          <p className="bg-light-purple-200 p-2 rounded-md mt-2">
            You can contact support via the contact page.
          </p>
        )}
      </div>
      {/* Add more questions as needed with similar structure */}
      
      <div className="mb-4 border border-gray-300 rounded-md bg-light-purple-100 p-4">
        <h2 className="font-semibold flex justify-between items-center">
          Question 3: How many different collections you are currently have?
          <button
            onClick={() => toggleAnswer(3)}
            className="text-purple-500 focus:outline-none"
          >
            {visibleAnswers[3] ? '-' : '+'}
          </button>
        </h2>
        {visibleAnswers[3] && (
          <p className="bg-light-purple-200 p-2 rounded-md mt-2">
            We have three different collections right now in fututre we add more categories .
          </p>
        )}
      </div>
    </div>
  );
}
