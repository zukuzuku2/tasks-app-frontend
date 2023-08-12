import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Tasks from "../Tasks/Tasks";
import TaskForm from "../TaskForm/TaskForm";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { TasksProvider } from "../../contexts/TasksContext";
import Navbar from "../Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <CurrentUserProvider>
      <TasksProvider>
        <BrowserRouter>
          <main className="page">
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/add-task" element={<TaskForm />} />
                <Route path="/tasks/:id" element={<TaskForm />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </CurrentUserProvider>
  );
}

export default App;
