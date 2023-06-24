import { ITask } from "@/types/tasks";
import TodoCard from "./TodoCard";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="">
      <div className=" flex flex-wrap items-center">
        {tasks
          .slice()
          .reverse()
          .map((task) => (
            <TodoCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
