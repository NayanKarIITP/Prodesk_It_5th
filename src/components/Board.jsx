import { DndContext } from "@dnd-kit/core";
import Column from "./Column";
import AddTask from "./AddTask";

export default function Board({ tasks, setTasks, search }) {

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const newStatus = over.id;

    setTasks(prev =>
      prev.map(task =>
        task.id === active.id
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter(t =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>

      <div className="max-w-7xl mx-auto">

        <AddTask setTasks={setTasks} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Column title="📝 To Do" status="todo" tasks={filteredTasks} setTasks={setTasks}/>
          <Column title="⚙ In Progress" status="progress" tasks={filteredTasks} setTasks={setTasks}/>
          <Column title="✅ Done" status="done" tasks={filteredTasks} setTasks={setTasks}/>
        </div>

      </div>

    </DndContext>
  );
}
