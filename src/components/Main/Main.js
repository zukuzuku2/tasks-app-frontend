import "./Main.css";

function Main() {
  return (
    <div className="principal">
      <h1 className="principal__title">Gestor de Tareas</h1>
      <h2 className="principal__description">
        ¡Bienvenido a nuestra plataforma de gestión de tareas! Aquí, en un solo
        lugar, puedes tomar el control total de tus actividades diarias,
        proyectos personales y tareas pendientes. Nuestra página principal te
        ofrece una experiencia perfectamente diseñada para optimizar tu
        productividad y mantenerte organizado.
      </h2>
      <p className="principal__subtitle">
        En la página principal de nuestro proyecto HTML de creación y gestión de
        tareas, encontrarás:
      </p>
      <p className="principal__subtitle">
        <span className="principal__subtitle--bold">
          1. Interfaz Intuitiva:
        </span>{" "}
        Nuestra interfaz de usuario limpia y moderna hace que sea fácil para
        cualquier persona empezar a utilizar la plataforma de inmediato. No
        importa si eres un novato en tecnología o un experto en la gestión de
        tareas; nuestra interfaz está diseñada para ser intuitiva y amigable.
        <br />
        <span className="principal__subtitle--bold">
          {" "}
          2. Listas de Tareas Personalizadas:
        </span>{" "}
        Crea y organiza tus tareas en listas personalizadas. Ya sea que
        necesites administrar tus tareas laborales, proyectos escolares o tareas
        domésticas, nuestras listas flexibles se adaptan a tus necesidades
        únicas.
      </p>
      <p className="principal__subtitle">
        ¡Empieza a tomar el control de tu tiempo y a maximizar tu eficiencia con
        nuestra plataforma de gestión de tareas! Nunca ha sido tan fácil
        mantenerse organizado y lograr tus objetivos.
      </p>
    </div>
  );
}

export default Main;
