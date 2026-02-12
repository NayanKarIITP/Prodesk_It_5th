Kanban Pro – Task Management Board
A high-performance, Trello-inspired Kanban board built with React.js, Vite, and Tailwind CSS. This project demonstrates advanced state management, component architecture, and professional drag-and-drop interactions.

🚀 Features
Level 1: The Core Foundation
Dynamic Columns: Three-stage workflow including "To Do", "In Progress", and "Done".

Task Management: Create new tasks instantly and remove them with a single click.

Manual Controls: Quick-move buttons on every card for easy status updates without dragging.

Level 2: The Polish
Priority System: Visual color-coding (Red, Yellow, Green) based on task urgency.

Data Persistence: Integrated with localStorage so your tasks remain available even after refreshing the page [cite: 2025-08-24].

Responsive UI: Built with a "glassmorphism" aesthetic that adapts to different screen sizes.

Level 3: The Professional Touch
Drag and Drop: Smooth, native-feeling card movement powered by @dnd-kit.

Real-time Filtering: A search engine that filters tasks by title as you type.

Optimized Performance: Built with Vite for lightning-fast development and production builds.

🛠️ Tech Stack
Framework: React.js

Build Tool: Vite

Styling: Tailwind CSS v4.0

Drag & Drop: @dnd-kit/core

State Management: React Hooks (useState, useEffect)

📦 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/kanban-board.git
Navigate to the project folder:

Bash
cd kanban-board
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open your browser: Navigate to http://localhost:5173

📂 Project Structure
Plaintext
src/
├── components/
│   ├── AddTask.jsx      # Task creation & priority selection
│   ├── Column.jsx       # Droppable column containers
│   ├── TaskCard.jsx     # Draggable task items with move logic
│   └── SearchBar.jsx    # Search filter implementation
├── utils/
│   └── localStorage.js  # Persistence logic [cite: 2025-08-24]
├── App.jsx              # Main application logic & DndContext
└── main.jsx             # Entry point