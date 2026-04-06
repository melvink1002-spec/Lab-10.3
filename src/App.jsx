import React, { useContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Todo App</h1>
        <ThemeToggleButton />
      </header>
      <main>
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </main>
    </div>
  );
}

export default App;




