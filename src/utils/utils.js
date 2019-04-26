import React from "react";

export function load_googlemaps() {
  return new Promise((resolve, reject) => {
    window.resolveGoogleMapsPromise = () => {
      resolve(window.google);
      delete window.resolveGoogleMapsPromise;
    };

    const script = document.createElement("script");
    const API_KEY = "AIzaSyA0sKdfIBbZ9d-SXavC4IsRXcWKnMIiGz0";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}
export function load_places() {
  //   const apiURL = "url-mongodb-lugares";
  //   fetch(apiURL).then(resp => resp.json());
  const data = [
    {
      id: 1,
      nombre: "San Carlos 1 ",
      phone: "829",
      direccion: "jr lima",
      latitud: -13.645262,
      longitud: -72.88485
    },
    {
      id: 2,
      nombre: "San Carlos2 ",
      phone: "828",
      direccion: "jr lima",
      latitud: -13.355262,
      longitud: -72.88485
    },
    {
      id: 3,
      nombre: "San Carlos 3 ",
      phone: "827",
      direccion: "jr lima",
      latitud: -13.665262,
      longitud: -72.88485
    },
    {
      id: 4,
      nombre: "San Carlos 4",
      phone: "826",
      direccion: "jr lima",
      latitud: -13.585262,
      longitud: -72.88485
    }
  ];
  return data;
}
