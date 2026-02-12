import { useState } from "react";

export default function AddTask({ setTasks }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");

  const addTask = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: text.trim(),
      status: "todo",
      priority: priority
    };

    setTasks(prev => [...prev, newTask]);

    // clear input
    setText("");
  };

  // press Enter to add
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-4 flex gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a new task..."
        className="flex-1 p-2 rounded-lg bg-white/80 text-black"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 rounded-lg bg-white/80 text-black"
      >
        <option value="high">🔴 High</option>
        <option value="medium">🟡 Medium</option>
        <option value="low">🟢 Low</option>
      </select>

      <button
        onClick={addTask}
        className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-xl hover:bg-indigo-100 active:scale-95 transition"
      >
        Add
      </button>
    </div>
  );
}