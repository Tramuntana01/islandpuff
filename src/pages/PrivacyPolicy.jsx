import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-content fade-in">
          <h1>Política de Privacidad</h1>

          <div className="privacy-section">
            <h2>1. Responsable del tratamiento</h2>
            <p><strong>Responsable:</strong> Adrián T.P.</p>
            <p><strong>Correo electrónico:</strong> islandpuffmallorca@gmail.com</p>
            <p><strong>País:</strong> España</p>
          </div>

          <div className="privacy-section">
            <h2>2. Datos personales que se recogen</h2>
            <p>La plataforma puede recopilar los siguientes datos:</p>
            <ul>
              <li>Correo electrónico</li>
              <li>Nombre de usuario (puede ser anónimo)</li>
              <li>Dirección IP</li>
              <li>Comentarios y valoraciones</li>
              <li>Datos técnicos de navegación (cookies)</li>
            </ul>
            <p>No se recogen datos especialmente sensibles.</p>
          </div>

          <div className="privacy-section">
            <h2>3. Finalidad del tratamiento</h2>
            <p>Los datos se utilizan para:</p>
            <ul>
              <li>Gestionar cuentas de usuario</li>
              <li>Permitir comentarios y valoraciones</li>
              <li>Emitir pases o salvoconductos</li>
              <li>Moderar contenido</li>
              <li>Garantizar la seguridad y prevenir abusos</li>
              <li>Cumplir obligaciones legales</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Base legal del tratamiento</h2>
            <p>El tratamiento se basa en:</p>
            <ul>
              <li>El consentimiento del usuario</li>
              <li>El interés legítimo del responsable (seguridad y funcionamiento)</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>5. Conservación de los datos</h2>
            <p>Los datos se conservarán:</p>
            <ul>
              <li>Mientras la cuenta esté activa</li>
              <li>O durante el tiempo necesario para cumplir obligaciones legales</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>6. Cesión de datos a terceros</h2>
            <p>Los datos podrán ser tratados por proveedores necesarios para el funcionamiento del servicio (hosting, analítica, correo).</p>
            <p>No se venden ni ceden datos a terceros con fines comerciales.</p>
          </div>

          <div className="privacy-section">
            <h2>7. Derechos del usuario</h2>
            <p>El usuario puede ejercer los derechos de:</p>
            <ul>
              <li>Acceso</li>
              <li>Rectificación</li>
              <li>Supresión</li>
              <li>Oposición</li>
              <li>Limitación</li>
              <li>Portabilidad</li>
            </ul>
            <p>Solicitudes a: islandpuffmallorca@gmail.com</p>
          </div>

          <div className="privacy-section">
            <h2>8. Seguridad</h2>
            <p>Se aplican medidas técnicas y organizativas razonables para proteger los datos personales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
