"use client";

import { useEffect, useState } from "react";
import Topic from "./Topic";

export default function TopicsList() {
  const [ideas, setIdeas] = useState(null);
  const fetchData = async () => {
    try {
      const data = await getIdeasList();

      setIdeas(data?.ideas?.reverse());
    } catch (error) {
      console.error("Error Loading Ideas: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!ideas) return "Loading";
  if (ideas?.length == 0)
    return (
      <p className="w-full text-center text-md text-slate-500">
        Please add some ideas.
      </p>
    );
  return (
    <div className="flex flex-col gap-3">
      {ideas.map((idea) => (
        <Topic handleDelete={fetchData} data={idea} key={idea._id} />
      ))}
    </div>
  );
}

async function getIdeasList() {
  try {
    const res = await fetch(`http://localhost:3000/api/ideas`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch idea list!");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error Loading Ideas: ", error);
    throw error;
  }
}
