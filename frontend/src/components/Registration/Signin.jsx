import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import signup from '../../assets/signup.png'
import './Signin.css'

function Signin() {
    return (
        <div className="signin">
            <Container>
                <Row className='form-wrapper'>
                    <Col xs={12} md={6}>
                        <Form className='d-flex flex-column justify-content-center h-100 gap-3 custom-form-style'>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Button className='p-2' variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </Col>

                    <Col xs={12} md={5}>
                        <img
                            src={signup}
                            alt="Signin Image"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signin;