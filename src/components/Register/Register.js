import { useForm } from "react-hook-form";
import "./Register.css";
import { useAuth } from "../../contexts/CurrentUserContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: authErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((values) => {
    signup(values);
  });

  return (
    <div className="register">
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form__title">Regístrate</h2>
        {authErrors && (
          <div className="form__message-error">{authErrors.message}</div>
        )}
        <input
          type="text"
          {...register("username", { required: true })}
          className="form__input"
          placeholder="Username"
        />
        {errors.username && (
          <p className="form__error">Se requiere nombre de usuario</p>
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
          <p className="form__button-text">Registrarse</p>
        </button>
        <p className="form__count">
          Ya tienes una cuenta?
          <Link to="/login" className="form__link">
            Inicia Sesión
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
