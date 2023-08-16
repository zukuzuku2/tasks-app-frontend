import { useAuth } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const { isAuthenticated, logout, currentUser } = useAuth();

  return (
    <nav className="navbar">
      <Link
        to={isAuthenticated ? "/tasks" : "/"}
        className="navbar__link navbar__link_main"
      >
        <h1 className="navbar__title">Gestor de Tareas</h1>
      </Link>
      <ul className="navbar__list">
        {isAuthenticated ? (
          <>
            <li>{currentUser.username}</li>
            <li>
              <Link className="navbar__link" to="/add-task">
                Agregar
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="navbar__link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/register">
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
