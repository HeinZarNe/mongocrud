"use client";
import IdeaForm from "@/components/IdeaForm";
import { useRouter } from "next/navigation";

export default function AddIdea() {
  const postIdea = async (data) => {
    try {
      const res = await fetch(`http://localhost:3000/api/ideas`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: data?.title,
          description: data?.description,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to post new idea!");
      }

      return res;
    } catch (error) {
      console.error("Error posting new idea: ", error);
      throw error; // Re-throw the error to propagate it up
    }
  };

  const router = useRouter();
  let loading = false;
  const handleSubmit = async (values, { resetForm }) => {
    loading = true;
    const res = await postIdea(values);
    if (res.ok) {
      loading = false;
      router.push("/");
      resetForm();
    } else {
      alert("failed");
    }
  };

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <IdeaForm submitForm={handleSubmit} />
    </div>
  );
}
