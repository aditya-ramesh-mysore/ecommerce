import React, { useState, useContext } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../styles/Login.css";
import displayToast from "../utils/displayToast";
import { validateInputField } from "../utils/validations";
import { AuthContext } from "../components/Auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const { setUserData } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    if (
      validateInputField({ field: username, fieldName: "user name" }) &&
      validateInputField({ field: password, fieldName: "password" })
    ) {
      fetch("http://localhost:8080/v1/user/login", {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => {
          if (response.status == 200) {
            displayToast({ type: "success", msg: "Login successfull!" });
            setUserData(response);
          }
        })
        .catch((err) => {
          displayToast({ type: "error", msg: "Login error" });
        });
    };
  }

  return (
    <div className="login-bg">
      <Row className="login--row">
        <Col md={{ span: 8, offset: 2 }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontweight: "bold" }}>
              Ecommerce Management System
            </h1>
          </div>
          <br />
          <Form onSubmit={submitForm}>
            <Form.Group>


              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Enter user name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button size="lg" variant="dark" type="submit">
                Login
              </Button>
              <Link to="/add-employee" style={{ marginRight: "20px"}}>
                {/* <Button size="lg" type="submit"> */}
                  SignUp
                {/* </Button> */}
              </Link>
              <Link to="/admin-login">
                {/* <Button size="lg" type="submit"> */}
                  Admin
                {/* </Button> */}
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;