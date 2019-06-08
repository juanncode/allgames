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

  render() {
    return (
      <div>
        <h1>Agregar nueva cancha</h1>
        <div className="col-12">
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <label htmlFor="">Nombre</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="nombreCancha"
                value={this.props.formValues.nombreCancha}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Telefono</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="phoneCancha"
                value={this.props.formValues.phoneCancha}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Descripcion</label>
              <textarea
                rows="4"
                cols="100"
                onChange={this.props.onChange}
                className="form-control"
                name="descripcionCancha"
                value={this.props.formValues.descripcionCancha}
              >
                {this.props.formValues.descripcionCancha}
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="">Precio</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="precioCancha"
                value={this.props.formValues.precioCancha}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Encargado</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="ownerCancha"
                value={this.props.formValues.ownerCancha}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Latitud</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="latitudCancha"
                value={this.props.formValues.latitudCancha}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Longitud</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="longitudCancha"
                value={this.props.formValues.longitudCancha}
              />
            </div>
            {this.props.error && (
              <p className="text-danger"> {this.props.error.message}</p>
            )}
            <button onClick={this.handleClick} className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default GamesForm;
