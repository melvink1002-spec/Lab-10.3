import React, { useContext } from "react";
import { FilterContext } from "../contexts/FilterContext";

function FilterButtons() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div>
      <button disabled={filter === "all"} onClick={() => setFilter("all")}>All</button>
      <button disabled={filter === "active"} onClick={() => setFilter("active")}>Active</button>
      <button disabled={filter === "completed"} onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}

export default FilterButtons;