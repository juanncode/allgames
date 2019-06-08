import React from "react";
import "./styles/SetGames.css";
import GamesForm from "../components/GamesForm";
import GamesMaps from "../components/GamesMaps";
import Loading from "../components/Loading";
import NotFound from "./NotFound";
class SetGames extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      nombreCancha: "",
      phoneCancha: "",
      precioCancha: "",
      descripcionCancha: "",
      ownerCancha: "",
      latitudCancha: 0,
      longitudCancha: 0
    },
    lat: -13.628058,
    lng: -72.879988
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.setState({
      form: {
        ...this.state.form,
        latitudCancha: lat,
        longitudCancha: lng
      }
    });

    // this.setState(prevState => {
    //   const markers = [...this.state.markers];
    //   markers[index] = { ...markers[index], position: { lat, lng } };
    //   return { markers };
    // });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
    this.setState({ error: null, loading: true });

    try {
      // throw new Error("error asdasd");
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
      this.props.history.push("/mapa"); //para redirigir a una pag
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <div className="container-setgames">
          <div className="mapSetGames">
            {/* <label htmlFor="">{this.state.form.nombreCancha}</label> */}
            <GamesMaps
              lat={this.state.lat}
              lng={this.state.lng}
              onMarkerDragEnd={this.onMarkerDragEnd}
            />
          </div>
          <div className="formSetGames">
            <GamesForm
              onChange={this.handleChange}
              formValues={this.state.form}
              onSubmit={this.handleSubmit}
              error={this.state.error}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SetGames;
