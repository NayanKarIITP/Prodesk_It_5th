
import { useState, useEffect } from "react";
import { DndContext, closestCorners, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { loadTasks, saveTasks } from "./utils/localStorage";
import AddTask from "./components/AddTask";
import Column from "./components/Column";

export default function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  useEffect(() => saveTasks(tasks), [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const overId = over.id; // Target column ID

    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: overId } : task
    ));
  };

  const filteredTasks = tasks.filter(t => 
    t.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-black text-white text-center mb-8 drop-shadow-md">Kanban Task Board</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <AddTask setTasks={setTasks} />
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          className="p-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/70 outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="flex flex-wrap gap-6">
          <Column id="todo" title="To Do" tasks={filteredTasks.filter(t => t.status === "todo")} setTasks={setTasks} />
          <Column id="progress" title="In Progress" tasks={filteredTasks.filter(t => t.status === "progress")} setTasks={setTasks} />
          <Column id="done" title="Done" tasks={filteredTasks.filter(t => t.status === "done")} setTasks={setTasks} />
        </div>
      </DndContext>
    </div>
  );
}