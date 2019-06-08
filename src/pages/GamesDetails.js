import React from "react";
import "./styles/GamesDetails.css";

import pelota from "../images/deporte.jpg";
import Loading from "../components/Loading";
import NotFound from "./NotFound";

class GamesDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true });
    try {
      // throw new Error("error2");
      // const data = await
      this.setState({ loading: false, data: {} });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <NotFound error={this.state.error.message} />;
    }
    return (
      <React.Fragment>
        <div className="containerDetail">
          <div className="fotosDetail">foto</div>
          <div className="information">
            <div className="titleDetail">
              <h1>{this.props.match.params.itemId}</h1>
              <p>Abancay</p>
            </div>
            <div className="direccionDetail">
              <h6>direccion de la cancha</h6>
            </div>
            <hr />
            <div className="descriptionDetail">
              <p>Descripcion de la cancha ym as</p>
              <p>Telefonos</p>
              <p>Incluye: Chalecos, Pelotas</p>
              <p>Tribuna: Para 100 personas.</p>
              <p>Estacionamiento interno: Para 6 vehículos</p>
              <p>Servicios higiénicos: Damas y Caballeros</p>

              <p>322556</p>
              <p>457898</p>
            </div>
          </div>
          <div className="barrioMapa">
            <div className="titleBarrio">
              <h2>El barrio</h2>
            </div>
            <div className="mapaBarrio">
              <h6>direccion de la cancha</h6>
            </div>
            <hr />
            <div className="descriptionBarrio">
              <p>Descripcion de la cancha ym as</p>
            </div>
          </div>
          <div className="footerDetail"> Est es un pie de pagina</div>
        </div>
      </React.Fragment>
    );
  }
}
export default GamesDetails;
