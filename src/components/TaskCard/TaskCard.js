import { useTasks } from "../../contexts/TasksContext";
import { Link } from "react-router-dom";
import "./TaskCard.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTasks } = useTasks();

  return (
    <div className="task-card">
      <h1 className="task-card__title">{task.title}</h1>
      <p className="task-card__description">{task.description}</p>
      <p className="task-card__date">
        {dayjs.utc(task.date).format("DD/MM/YYYY")}
      </p>
      <p className="task-card__priority">Prioridad: {task.priority}</p>
      <div className="task-card__buttons">
        <button
          className="task-card__button"
          onClick={() => {
            deleteTasks(task._id);
          }}
        >
          Eliminar
        </button>
        <Link className="task-card__link" to={`/tasks/${task._id}`}>
          Editar
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
