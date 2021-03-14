import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";

import Navbar from "components/Navbars/NavBar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import React, {useEffect, useState} from "react";
import AuthService from "services/auth.service"

const Login = () => {

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorResponse, setErrorResponse] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const submitLoginForm = (event) => {
    event.preventDefault();
    setErrorResponse({})
    const authService = new AuthService();
    authService.authenticateUser(formData)
      .then(onAuthenticateUserSuccess)
      .catch(onAuthenticateUserError)
  };

  const onAuthenticateUserSuccess = (response) => {
    console.log(response)
  };

  const onAuthenticateUserError = (error) => {
    const errorResponse = error.response ? error.response.data : {};
    if (errorResponse.detail) {
      setErrorResponse(errorResponse)
    } else {
      setErrorResponse({detail: 'Ha ocurrido un error inesperado.'})
    }
  };

  const getErrorAlert = () => {
    if (errorResponse.detail) {
      return (
        <Alert color="danger" className="text-center">
          <strong>Error!</strong> {errorResponse.detail}
        </Alert>
      )
    }
    return null;
  }

  return (
    <>
      <Navbar/>
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Ingresa tus credenciales</small>
                    </div>
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" onChange={handleInputChange} name="email"/>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contraseña"
                            type="password"
                            autoComplete="off"
                            onChange={handleInputChange}
                            name="password"
                          />
                        </InputGroup>
                      </FormGroup>
                      {getErrorAlert()}
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="button"
                          onClick={submitLoginForm}
                        >
                          Iniciar Sesión
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      onClick={e => e.preventDefault()}
                    >
                      <small>Olvidaste tu contraseña?</small>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter/>
    </>
  );
}

export default Login;
