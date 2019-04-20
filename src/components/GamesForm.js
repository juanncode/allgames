import React from "react";

class GamesForm extends React.Component {
  state = {};
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    console.log("button was clicked");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Agregar nueva cancha</h1>
        <div className="row">
          <div className="col-6">
            <input type="text" />
          </div>
          <div className="col-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="nombreCancha"
                  value={this.state.nombreCancha}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Telefono</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="phoneCancha"
                  value={this.state.phoneCancha}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Encargado</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="ownerCancha"
                  value={this.state.ownerCancha}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Latitud</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="latitudCancha"
                  value={this.state.latitudCancha}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Longitud</label>
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  name="longitudCancha"
                  value={this.state.longitudCancha}
                />
              </div>
              <button onClick={this.handleClick} className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default GamesForm;
