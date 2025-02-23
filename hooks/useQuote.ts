import { useState } from "react";

interface QuoteData {
  value: string;
}

export const useQuote = () => {
  const [quote, setQuote] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return {
    quote,
    isLoading,
    error,
    fetchQuote,
  };
};
