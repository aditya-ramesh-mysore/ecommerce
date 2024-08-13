import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import displayToast from '../utils/displayToast';
import { validateInputField } from '../utils/validations';
import { useHistory } from 'react-router';

function CreateUser() {

    const [fullName, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const submitForm = async (e) => {
        e.preventDefault();
        if (validateInputField({ field: fullName, fieldName: "full name" }) &&
            validateInputField({ field: username, fieldName: "user name" }) &&
            validateInputField({ field: dateOfBirth, fieldName: "dob" }) &&
            validateInputField({ field: age, fieldName: "age" }) &&
            validateInputField({ field: password, fieldName: "password" })) {

            fetch("http://localhost:8080/v1/user/create", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    person: {
                        fullName: fullName,
                        age: age,
                        dateOfBirth: dateOfBirth
                    }
                }),
            })
                .then((response) => {
                    if (response.status == 200) {
                        displayToast({ type: "success", msg: "User added successfully!" });
                        setTimeout(() => {
                            history.push("/");
                        }, 1000);
                    }
                })
                .catch((err) => {
                    displayToast({ type: "error", msg: "User addition unsuccessful." });
                    console.log(err);
                });
        }
    }

    return (
        <React.Fragment>
            <Container fluid="lg">
                <Row className="container-main">
                    <Col>
                        <h3 className="center-align">{"Add"} Employee</h3>
                    </Col>
                </Row>
                <Row className="container-main">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" value={fullName} onChange={(e) => setFullname(e.target.value)} placeholder="Enter Full Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicUserName">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter User Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicDob">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="text" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Enter Date of birth" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRating">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={submitForm}>Save</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default CreateUser;
