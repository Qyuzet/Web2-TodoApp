"use client";

import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (newTaskValue.trim() !== "") {
      await addTodo({
        id: uuidv4(),
        text: newTaskValue,
      });
    }
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <form className="pl-4 mb-9 max-w-sm" onSubmit={handleSubmitNewTodo}>
        <div className="modal-action  ">
          <input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            type="text"
            placeholder="Add Task..."
            className="input input-bordered w-full h-9"
          />
          <button
            style={{ textTransform: "capitalize" }}
            type="submit"
            className="btn btn-sm btn-active bg-blue-500 text-white font-light text-xs w-20 h-9"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
