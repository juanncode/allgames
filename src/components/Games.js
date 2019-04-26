import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Games.css";
import { Carousel } from "react-responsive-carousel";
import pelota from "../images/deporte.jpg";

class Games extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.lista.map((cancha, index) => {
          return (
            <li key={cancha.id} className="card-game">
              <div className="card cardContainer ">
                <div className="row no-gutters">
                  {/* div para imagenes */}
                  <div className="col-md-4">
                    <Carousel infiniteLoop showThumbs={false}>
                      <div>
                        <img src={pelota} alt="..." />
                      </div>
                      <div>
                        <img src={pelota} alt="..." />
                      </div>
                      <div>
                        <img src={pelota} alt="..." />
                      </div>
                    </Carousel>
                  </div>

                  {/* div para informacion de la cancha */}
                  <div className="col-md-8">
                    <div
                      className="card-body"
                      onClick={() => {
                        this.props.itemClick(cancha);
                      }}
                      onMouseOver={() => {
                        this.props.itemOver(cancha);
                      }}
                    >
                      <h5 className="card-title">{cancha.nombre}</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className=" card-texttext-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                      <a href="https://platzi.com" className="btn btn-primary">
                        Ver cancha
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Games;
