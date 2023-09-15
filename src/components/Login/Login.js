import { useForm } from "react-hook-form";
import "./Login.css";
import { useAuth } from "../../contexts/CurrentUserContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: authErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((values) => {
    signin(values);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  return (
    <div className="login">
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form__title">Iniciar Sesión</h2>

        {authErrors && (
          <div className="form__message-error">{authErrors.message}</div>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          className="form__input"
          placeholder="Email"
        />
        {errors.email && <p className="form__error">Se requiere email</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="form__input"
          placeholder="Password"
        />
        {errors.password && (
          <p className="form__error">Se requiere contraseña</p>
        )}
        <button className="form__button">
          <p className="form__button-text">Ingresar</p>
        </button>
        <p className="form__count">
          No tienes cuenta?
          <Link to="/register" className="form__link">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
