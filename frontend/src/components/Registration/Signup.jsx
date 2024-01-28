import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Signup.css'





import signup from '../../assets/signup.png'

const Signup = () => {

    const history = useNavigate();

    const [Inputs, setInputs] = useState({
        email: "",
        username: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9134/api/v1/register", Inputs);
            if (response.data.message == "User with this email or username already exists") {
                toast.error("User with this email or username already exists !");
            }
            if (response.data.message == "Sign Up successfull") {
                toast.success("Sign Up successfull");
                setInputs({
                    email: "",
                    username: "",
                    password: ""
                });
                history("/signin");
            }
        } catch (error) {
            console.error("Axios Error:", error);
        }
    };

    return (
        <div className="signup">
            <Container>
                <ToastContainer autoClose={2500} />
                <Row className='form-wrapper'>
                    <Col xs={12} md={6}>
                        <Form className='d-flex flex-column justify-content-center h-100 gap-3 custom-form-style'>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={change} value={Inputs.email} type="email" placeholder="Enter email" name="email" />
                            </Form.Group>

                            <Form.Group controlId="formUsername" className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={change} value={Inputs.username} type="text" placeholder="Enter username" name="username" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={change} value={Inputs.password} type="password" placeholder="Enter password" name="password" />
                            </Form.Group>

                            <Button className='p-2' variant="primary" type="submit" onClick={submit}>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>

                    <Col xs={12} md={5}>
                        <img
                            src={signup}
                            alt="Signup Image"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;
