"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id, onDelete }) => {

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/ideas?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        onDelete();
      }
    }
  };
  return (
    <button onClick={removeTopic}>
      <HiOutlineTrash size={24} className="text-red-400" />
    </button>
  );
};

export default RemoveBtn;
