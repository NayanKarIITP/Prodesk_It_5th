
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TaskCard({ task, setTasks }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = 
    useSortable({ id: task.id });

  // dnd-kit styling for smooth movement
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
    zIndex: isDragging ? 50 : 1,
  };

  // Level 2: Priority Border Mapping
  const priorityColors = {
    high: "border-red-500",
    medium: "border-yellow-500",
    low: "border-green-500"
  };

  // Helper function to manually switch columns
  const moveTask = (e, newStatus) => {
    e.stopPropagation(); // Prevents the drag listener from firing
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      className={`p-4 mb-3 bg-white rounded-xl shadow-md border-l-8 ${priorityColors[task.priority]} flex flex-col gap-3 group cursor-grab active:cursor-grabbing transition-all`}
    >
      {/* Top Section: Text and Delete Button */}
      <div className="flex justify-between items-center w-full">
        <span className="text-slate-800 font-semibold">{task.text}</span>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setTasks(prev => prev.filter(t => t.id !== task.id));
          }} 
          className="text-slate-300 hover:text-red-500 font-bold transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Bottom Section: Manual Status Move Buttons (User Accessibility) */}
      <div className="flex flex-wrap gap-2 mt-1">
        {task.status !== 'todo' && (
          <button 
            onClick={(e) => moveTask(e, 'todo')}
            className="text-[10px] uppercase tracking-tighter bg-slate-100 hover:bg-slate-200 text-slate-500 px-2 py-1 rounded-md font-bold transition-colors"
          >
            ← To Do
          </button>
        )}
        
        {task.status !== 'progress' && (
          <button 
            onClick={(e) => moveTask(e, 'progress')}
            className="text-[10px] uppercase tracking-tighter bg-blue-50 hover:bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-bold transition-colors"
          >
            In Progress
          </button>
        )}

        {task.status !== 'done' && (
          <button 
            onClick={(e) => moveTask(e, 'done')}
            className="text-[10px] uppercase tracking-tighter bg-green-50 hover:bg-green-100 text-green-600 px-2 py-1 rounded-md font-bold transition-colors"
          >
            Done ✓
          </button>
        )}
      </div>
    </div>
  );
}