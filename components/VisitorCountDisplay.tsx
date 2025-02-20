/* This is the VisitorCountDisplay component, it displays the visitor count. (Frontend logic)
    The Data is fetched from the backend and displayed in the footer.
    The visitor count is updating on page refresh due to the useEffect hook.
    It´s also possible to use websockets or Sever Side Events for real-time updates.
  */

"use client";

import React, { useState, useEffect } from "react";

export default function VisitorCountDisplay() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchAndIncrement(): Promise<void> {
      try {
        const postResponse = await fetch("/api/visitorCount", {
          method: "POST",
        });
        if (!postResponse.ok) {
          throw new Error("Failed to increment visitor count");
        }

        const getResponse = await fetch("/api/visitorCount");
        if (!getResponse.ok) {
          throw new Error("Failed to fetch visitor count");
        }

        const data = await getResponse.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error updating/fetching count:", error);
      }
    }

    fetchAndIncrement();
  }, []);

  // Show loading state instead of 0
  if (visitorCount === null) {
    return <div>Besucher: ...</div>;
  }

  return <div>Besucher: {visitorCount}</div>;
}
