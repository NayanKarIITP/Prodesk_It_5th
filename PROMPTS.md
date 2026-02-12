# AI Collaboration & Manual Logic
This document outlines the collaborative process between Developer (Me) and AI (Gemini) to build this Level 3 Kanban Board.

# My Manual Contributions (Human Logic)
While AI helped generate snippets, I manually architected and implemented the following:

Project Architecture: Decided on a modular component structure (Separating AddTask, Column, TaskCard, and Utils).

State Management Strategy: Designed the "Single Source of Truth" in App.jsx to ensure all columns stayed synced.

UI/UX Design: Manually styled the Glassmorphism look using Tailwind CSS v4.0 and custom CSS gradients in index.css.

Status Management: Created the moveTask logic to allow status updates via both buttons and Drag-and-Drop.

Persistence Integration: Manually connected the useEffect hooks to localStorage to ensure zero data loss [cite: 2025-08-24].

Debugging: Identified and fixed a critical blank-screen error related to Vite import paths and dnd-kit sensor constraints.

# Key AI Prompts & Assistance
I used AI to accelerate the development of complex library integrations and boilerplate code.

1. The Foundation (Level 1 & 2)
Prompt: "I want to build a Kanban board with 3 columns using React and Vite. Give me a starting state structure where each task has an ID, text, status, and priority."

AI Contribution: Suggested an array-of-objects state shape which I then refined to handle multiple columns.

2. Drag and Drop Integration (Level 3)
Prompt: "Integrate @dnd-kit into my existing Column/TaskCard structure. I need the tasks to update their status property when dropped into a new column."

AI Contribution: Provided the DndContext wrapper and handleDragEnd boilerplate. I then manually modified this to work with my filteredTasks logic.

3. Search & Filter (Level 3)
Prompt: "I have a tasks state. How can I create a search bar that filters these tasks by text without deleting them from the main state?"

AI Contribution: Helped write the derived state logic using .filter(), which I styled and placed into a separate UI component.

# Learning Outcomes
Through this AI-assisted workflow, I deepened my understanding of:

Declarative UI: Moving away from document.getElementById to state-driven rendering.

Pointer Sensors: Learning how to keep button clicks functional while using drag listeners.

Persistence Patterns: Managing JSON.parse safely within the React lifecycle [cite: 2025-08-24].
