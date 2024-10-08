import React, { useState, useContext } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "../../styles/Login.css";
import displayToast from "../../utils/displayToast";
import { validateInputField } from "../../utils/validations";
import { AuthContext } from "../../components/Auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const { setUserData } = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        {console.log("isloggedin")}

        if (
            validateInputField({ field: username, fieldName: "user name" }) &&
            validateInputField({ field: password, fieldName: "password" })
        ) {
            console.log(username);
            console.log(password);
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
                        displayToast({ type: "success", msg: "Login successfully!" });
                        setTimeout(() => {
                            history.push("/admin");
                        }, 1000);
                        setUserData(response);
                    }
                })
                .catch((err) => {
                    displayToast({ type: "error", msg: "Login unsuccessful." });
                    console.log(err);
                });
        };
    }

    return (
        <div className="login-bg">
            <Row className="login--row">
                <Col md={{ span: 8, offset: 2 }}>
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ color: "white", fontweight: "bold" }}>
                            Ecommerce Management System
                        </h1>
                    </div>
                    <br />
                    <Form>
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
                        <Link to="/admin">
                            <Button size="lg" variant="dark" type="submit" onClick={submitForm}>
                                Login
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
