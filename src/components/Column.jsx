import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

export default function Column({ title, id, tasks, setTasks }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className="flex-1 min-w-[300px] bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 min-h-[500px]">
      <h2 className="text-white font-bold text-lg mb-4 flex justify-between items-center">
        {title}
        <span className="text-xs bg-black/20 px-2 py-1 rounded-md">{tasks.length}</span>
      </h2>

      <div ref={setNodeRef} className="flex flex-col min-h-[400px]">
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} setTasks={setTasks} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}