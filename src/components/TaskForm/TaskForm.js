import { set, useForm } from "react-hook-form";
import "./TaskForm.css";
import { useTasks } from "../../contexts/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  function cargarTask() {
    if (params.id) {
      getTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
        setValue("priority", task.priority);
      });
    }
  }

  useEffect(() => {
    cargarTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, {
        ...data,
        date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
      });
    } else {
      createTask({
        ...data,
        date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
      });
    }
    navigate("/tasks");
  });

  return (
    <div className="tasks_form">
      <form onSubmit={onSubmit} className="form">
        <h1 className="form__title">
          {params.id ? "Editar Tarea" : "Nueva Tarea"}
        </h1>
        <label htmlFor="title">Titulo de la tarea</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="form__input"
          autoFocus
        />
        <label htmlFor="description">Descripción de la tarea</label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="form__input"
        ></textarea>
        <label htmlFor="date">Date</label>
        <input type="date" {...register("date")} className="form__input" />
        <label className="task-card__label">Prioridad</label>
      <select className="form__input" type="number" {...register("priority")}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

        <button className="form__button">
          <p className="form__button-text">{params.id ? "Editar" : "Crear"}</p>
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
