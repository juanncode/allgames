import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Games-card.css";
class Games extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="img_avatar1.png" alt="Card img" />
        <div className="card-body">
          <h4 className="card-title">
            {this.props.firstName} {this.props.lastName}
          </h4>
          <p className="card-text">Some example text.</p>
          <a
            href="https://platzi.com"
            className="btn btn-primary stretched-link"
          >
            See Profile
          </a>
        </div>
      </div>
    );
  }
}
export default Games;
