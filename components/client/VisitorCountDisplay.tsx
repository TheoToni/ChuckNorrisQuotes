"use client";

import React, { useState, useEffect, JSX } from "react";

export default function VisitorCountDisplay(): JSX.Element {
  const [visitorCount, setVisitorCount] = useState<number>(0);

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

  return <div>Besucher: {visitorCount}</div>;
}
