"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const TodoCard: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
  return (
    <div
      key={task.id}
      className="bg-white p-4 my-4 mx-4 w-96 h-48 shadow-md rounded-xl relative flex flex-col justify-center"
    >
      <label
        onClick={() => {
          handleDeleteTask(task.id);
        }}
        className="btn btn-sm btn-circle btn-ghost absolute text-red-600 right-2 top-2"
      >
        ✕
      </label>
      <div className="flex items-center justify-center">
        <p
          onClick={() => setOpenModalEdit(true)}
          className="text-gray-800 text-center align-center overflow-auto max-h-32"
        >
          {task.text}
        </p>
      </div>

      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className="font-bold text-lg">Edit task</h3>
          <div className="modal-action">
            <input
              value={taskToEdit}
              onChange={(e) => setTaskToEdit(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TodoCard;
