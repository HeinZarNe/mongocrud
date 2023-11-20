"use client";
import { useRouter } from "next/navigation";
import IdeaForm from "./IdeaForm";

export default function EditTopicForm({ id, title, description }) {
  const router = useRouter();

  const handleUpdate = async (data) => {
    try {
      const res = await fetch(`http://localhost:3000/api/ideas/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          newTitle: data?.title,
          newDescription: data?.description,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return (
    <div>
      <IdeaForm
        defaultValues={{ title, description }}
        submitForm={handleUpdate}
      />
    </div>
  );
}
