import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/TasksContext";
import TaskCard from "../TaskCard/TaskCard";
import "./Tasks.css";

function Tasks() {
  const { getTasks, tareas, deleteTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {}, [tareas]);

  if (tareas.length === 0) {
    return <h1 className="principal__title">No hay tareas</h1>;
  } else {
    return (
      <div className="tasks">
        {tareas.map((item) => {
          return <TaskCard task={item} key={item._id} delete={deleteTasks} />;
        })}
      </div>
    );
  }
}

export default Tasks;
