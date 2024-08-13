import React, { useContext } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import {
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import displayToast from "../utils/displayToast";

function Sidenav() {
  const history = useHistory();
  const { isLoggedIn, setUserData } = useContext(AuthContext);
  console.log("Userdata - Test Sidebar");
  const logoutUser = () => {
    displayToast("Logged out successfully!", "success");
    setTimeout(() => {
      setUserData(null);
      history.push("/");
    }, 1000);
  };

  if (!isLoggedIn) {
    return null;
  } else {
    return (
      <Navbar
        style={{
          backgroundColor: "#2C3E50", // Dark grey/blue shade
          padding: "10px",
          margin: "0",
          width: "100%",  // Ensures the Navbar takes up the full viewport width
          position: "fixed",  // Keeps the Navbar at the top of the page
          top: 0,  // Aligns the Navbar at the very top of the viewport
          left: 0,  // Ensures there is no horizontal space on the sides
          zIndex: 1000,  // Ensures the Navbar stays above other content
        }}
      >
        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ECF0F1",
          }}
        >
          Ecommerce Management System
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ marginRight: "25px" }}>
            <Link to="/" onClick={logoutUser}>
              <FontAwesomeIcon
                icon={faUser}
                className="side-nav-icons"
                style={{ cursor: "pointer", color: "#3498DB" }} // Blue for interactive icons
              />
            </Link>
          </Navbar.Text>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="side-nav-icons"
              style={{ color: "#3498DB", cursor: "pointer" }} // Blue for interactive icons
            />
          </Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Sidenav;
