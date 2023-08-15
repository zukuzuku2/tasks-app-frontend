import { createContext, useContext, useState } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  getTaskRequest,
  updateTasksRequest,
} from "../utils/api";

const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks debe usarse dentro de un TasksProvider");
  }
  return context;
};

export function TasksProvider({ children }) {
  const [tareas, setTareas] = useState([]);

  const createTask = (task) => {
    createTasksRequest(task).catch((err) => {
      console.log(err);
    });
  };

  const getTasks = () => {
    getTasksRequest().then((res) => {
      const sortedTasks = [...res].sort((a, b) => a.priority - b.priority);
      setTareas(sortedTasks);
    });
  };
  const deleteTasks = (id) => {
    deleteTasksRequest(id)
      .then((res) => {
        if (res.status === 204)
          setTareas(tareas.filter((tarea) => tarea._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTask = (id) => {
    return getTaskRequest(id);
  };

  const updateTask = (id, task) => {
    updateTasksRequest(id, task).catch((err) => {
      console.log(err);
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tareas,
        createTask,
        getTasks,
        deleteTasks,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
