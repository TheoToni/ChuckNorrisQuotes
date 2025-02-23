"use client";
import React, { useEffect } from "react";
import { useQuote } from "../hooks/useQuote";

const Quote: React.FC = () => {
  const { quote, isLoading, error, fetchQuote } = useQuote();

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="min-h-16">
        {quote && <p className="text-lg italic">{quote}</p>}
      </div>
      <button
        className="bg-white text-black font-bold py-2 px-4 rounded mt-4 transition-colors duration-300 hover:bg-gray-200"
        onClick={fetchQuote}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Tell me Chuck"}
      </button>
    </div>
  );
};

export default Quote;
