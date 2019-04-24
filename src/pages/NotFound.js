import React from "react";
import "./styles/NotFound.css";
function NotFound(params) {
  return (
    <div className="container">
      <div class="error-template">
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div class="error-details">
          <p>
            Lo sentimos, ha ocurrido un error, ¡No se encontró la página
            solicitada!
          </p>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
