import './CookiePolicy.css';

function CookiePolicy() {
  return (
    <div className="cookie-page">
      <div className="container">
        <div className="cookie-content fade-in">
          <h1>Política de Cookies</h1>

          <div className="cookie-section">
            <h2>1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario para mejorar la experiencia de navegación.</p>
          </div>

          <div className="cookie-section">
            <h2>2. Tipos de cookies utilizadas</h2>
            <p>La plataforma puede utilizar:</p>
            <ul>
              <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio, gestión de sesiones y seguridad.</li>
              <li><strong>Cookies analíticas (si aplica):</strong> Permiten analizar el uso de la web (Ejemplo: Google Analytics). Estas cookies solo se instalan con el consentimiento del usuario.</li>
            </ul>
          </div>

          <div className="cookie-section">
            <h2>3. Gestión de cookies</h2>
            <p>El usuario puede:</p>
            <ul>
              <li>Aceptar o rechazar cookies desde el banner.</li>
              <li>Configurarlas desde su navegador.</li>
            </ul>
          </div>

          <div className="cookie-section">
            <h2>4. Consentimiento</h2>
            <p>Al acceder por primera vez, se muestra un banner de cookies que permite aceptar, rechazar o configurar las cookies no necesarias.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
