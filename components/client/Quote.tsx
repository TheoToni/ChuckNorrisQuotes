"use client"; // Marks the file as a client component in Next.js
import React, { useState, useEffect } from "react";

// Defines the interface for quote data
interface QuoteData {
  value: string;
}

const Quote: React.FC = () => {
  // State for the quote, loading status, and error
  const [quote, setQuote] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch the quote on initial render
  useEffect(() => {
    fetchQuote();
  }, []);

  // Function to fetch a new quote
  const fetchQuote = async () => {
    setIsLoading(true); // Sets loading state to true
    setError(null); // Resets error state to null

    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: QuoteData = await response.json();
      setQuote(data.value); // Sets the quote in the state
    } catch (err: any) {
      setError(err.message); // Sets the error message in the state
      console.error("Error fetching the quote:", err);
    } finally {
      setIsLoading(false); // Sets loading state to false
    }
  };

  return (
    <div className="p-4 ">
      {isLoading && <p>Loading quote...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {quote && <p className="text-lg italic">{quote}</p>}
      <button
        className="bg-white text-black font-bold py-2 px-4 rounded mt-4 transition-transform duration-300 transform hover:scale-105"
        onClick={fetchQuote}
        disabled={isLoading}
      >
        New Quote
      </button>
    </div>
  );
};

export default Quote;
