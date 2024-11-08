import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'; // Adjust path to your ThemeContext

export default function FAQ() {
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  const toggleAnswer = (questionId) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className={`max-w-3xl mx-auto p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>

      <div className={`mb-4 border rounded-md p-4 ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-purple-100'}`}>
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
          <p className={`p-2 rounded-md mt-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-200'}`}>
            This site is about providing information on our product collections, and more.
          </p>
        )}
      </div>

      <div className={`mb-4 border rounded-md p-4 ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-purple-100'}`}>
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
          <p className={`p-2 rounded-md mt-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-200'}`}>
            You can contact support via the contact page.
          </p>
        )}
      </div>

      <div className={`mb-4 border rounded-md p-4 ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-purple-100'}`}>
        <h2 className="font-semibold flex justify-between items-center">
          Question 3: How many different collections do you currently have?
          <button
            onClick={() => toggleAnswer(3)}
            className="text-purple-500 focus:outline-none"
          >
            {visibleAnswers[3] ? '-' : '+'}
          </button>
        </h2>
        {visibleAnswers[3] && (
          <p className={`p-2 rounded-md mt-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-200'}`}>
            We have three different collections right now. We plan to add more in the future.
          </p>
        )}
      </div>
    </div>
  );
}
