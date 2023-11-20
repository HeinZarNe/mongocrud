import EditTopicForm from "./../../../components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/ideas/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default async function EditIdeaId({ params }) {
  const { id } = params;
  const { idea } = await getTopicById(id);
  const { title, description } = idea || {};
  return (
    <h1>
      <EditTopicForm id={id} title={title} description={description} />
    </h1>
  );
}
