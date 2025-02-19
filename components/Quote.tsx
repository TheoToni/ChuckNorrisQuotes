/* This is the Quote component, it fetches a random quote from the Chuck Norris API and displays it.
   It also has a button to fetch a new quote. */

"use client";
import React, { useState, useEffect } from "react";

interface QuoteData {
  value: string;
}

const Quote: React.FC = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  /* It´s also possible to create a new route in our api folder for this fetch here
      but I wanted to show how to fetch data directly from the client side and also keep it simple.
  */

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: QuoteData = await response.json();
      setQuote(data.value);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error fetching the quote:", err);
      } else {
        setError("An unexpected error occurred.");
        console.error("An unexpected error occurred:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-500">Error: {error}</p>}
      {quote && <p className="text-lg italic">{quote}</p>}
      <button
        className="bg-white text-black font-bold py-2 px-4 rounded mt-4 transition-transform duration-300 transform hover:scale-105"
        onClick={fetchQuote}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "New Quote"}
      </button>
    </div>
  );
};

export default Quote;
