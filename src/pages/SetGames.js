import React from "react";
import "./styles/SetGames.css";
import GamesForm from "../components/GamesForm";
import GamesMaps from "../components/GamesMaps";
class SetGames extends React.Component {
  state = {
    form: {
      nombreCancha: "",
      phoneCancha: "",
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
  render() {
    return (
      <React.Fragment>
        <div className="containerSetGames">
          <div className="row">
            <div className="col-6">
              <label htmlFor="">{this.state.form.nombreCancha}</label>
              <GamesMaps
                lat={this.state.lat}
                lng={this.state.lng}
                onMarkerDragEnd={this.onMarkerDragEnd}
              />
            </div>
            <div className="col-6">
              <GamesForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SetGames;
