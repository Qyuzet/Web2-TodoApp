import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { collectGenerateParams } from "next/dist/build/utils";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="max-w-full px-10 mx-0 mt-0 bg-gray-200">
      <div className="flex flex-col gap-0">
        <h1 className="pt-16 pl-4 mb-0 text-5xl font-medium ">TODO LIST</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
