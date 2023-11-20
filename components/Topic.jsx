import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

export default function Topic({ data, handleDelete }) {
  return (
    <div className="flex flex-col gap-3 shadow-md">
      <div className="p-4 border border-slate-300 flex justify-between">
        <div>
          <h2 className="font-bold text-3xl">{data.title}</h2>
          <div className="text-gray-900">{data.description}</div>
        </div>
        <div>
          <RemoveBtn onDelete={handleDelete} id={data._id} />
          <Link href={`/edit-idea/${data._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
