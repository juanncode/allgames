import React from "react";
import Navbar from "./Navbar";
//layout props.children nos permite devolver todo lo que esta dentro de layout, que seria cada pagina
function Layout(props) {
  // const children = props.children;
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
