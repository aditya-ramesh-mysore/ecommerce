import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEuroSign,
  faPeopleCarry,
  faMoneyBill,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import bg from "../assets/landingPage.png";

function Home() {
  return (
    <div
      className="landinPage"
      style={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "100vh", // Set height of the container to fill the viewport vertically
        // marginTop: "537px",
      }}
    >
      <Link to="/shopping">
        <Button
          style={{
            fontSize: "1.5em", // Increase font size for bigger button
            backgroundColor: "#2C3E50", // Set background color
            color: "white",
            height: "73px",
            width: "700px", // Set text color
          }}
        >
          Start Shopping
        </Button>
      </Link>
    </div>
  );
}

export default Home;
