import React from "react";
import "./styles/NotFound.css";
function NotFound(props) {
  return (
    <div className="container">
      <div class="error-template">
        <h1>Oops!</h1>
        {props.error ? (
          <div>
            <h2>Error</h2>
            <div class="error-details">
              <p>Lo sentimos, ha ocurrido un error, {props.error}</p>
            </div>
          </div>
        ) : (
          <div>
            <h2>404 Not Found</h2>
            <div class="error-details">
              <p>
                Lo sentimos, ha ocurrido un error, ¡No se encontró la página
                solicitada!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default NotFound;
