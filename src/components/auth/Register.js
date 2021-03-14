import React, {useEffect, useState} from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, Badge
} from "reactstrap";

import Navbar from "components/Navbars/NavBar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import {renderFormInput} from "../../util/input.util";
import UserService from "../../services/user.service";
import {MASKS} from "../../util/mask.util";
import RegistrationTypeService from "../../services/registration_type.service";
import CurrencyFormat from 'react-currency-format';

const Register = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    addess: '',
    phone_number: '',
    birth_data: '',
    password: '',
    repeat_password: '',
    document_numner: '',
    country: '',
    birth_date: ''
  })
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const [selectedRegistrationType, setSelectedRegistrationType] = useState();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    loadRegistrationTypes();
  }, []);

  const loadRegistrationTypes = () => {
    const registrationTypeService = new RegistrationTypeService();
    registrationTypeService.getRegistrationTypes().then(
      response => setRegistrationTypes(response.data)
    )
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const submitRegisterForm = (event) => {
    event.preventDefault();
    const userService = new UserService();
    const requestData = Object.assign(formData, {registration_type_id: selectedRegistrationType})
    const createUserResponse = userService.createUser(requestData)
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  const renderInput = (name, label, options = {}) => {
    return renderFormInput(name, label, handleInputChange, options);
  }

  const renderRegistrationTypeDescriptionList = (description) => {
    return description.split('+').map(item => (
      <li className="py-2">
        <div className="d-flex align-items-center">
          <div>
            <Badge
              className="badge-circle mr-3"
              color="success"
            >
              <i className="ni ni-check-bold"/>
            </Badge>
          </div>
          <div>
            <span className="mb-0">
              {item}
            </span>
          </div>
        </div>
      </li>
    ))
  }

  const renderRegistrationTypeCards = () => {
    return registrationTypes.map(registrationType => (
      <Col lg="4" key={registrationType.id}>
        <Card className={`card-lift--hover shadow border-0 card-select-registration-type ${registrationType.id === selectedRegistrationType ? 'selected': ''}`}
           onClick={() => setSelectedRegistrationType(registrationType.id)}>
          <CardBody className="py-5">
            <div className="text-center">
              <span className="text-primary text-uppercase" style={{fontSize: '32px', fontWeight: 700}}>
                <CurrencyFormat value={registrationType.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /> (COP)
              </span>
            </div>
            <ul className="list-unstyled mt-3">
              {renderRegistrationTypeDescriptionList(registrationType.description)}
            </ul>
            <p className="description text-center bold">
              {registrationType.limits}
            </p>
          </CardBody>
        </Card>
      </Col>
    ));
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
              <Col lg="12">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/github.svg")}
                            />
                          </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Ingresa tus datos</small>
                    </div>
                    <Form role="form">
                      <Row>
                        {renderInput("first_name", "Nombres")}
                        {renderInput("last_name", "Apellidos")}
                        {renderInput("country", "Pais")}
                        {renderInput("city", "Ciudad")}
                        {renderInput("document_number", "Número de Documento", {pattern: '[0-9]*'})}
                        {renderInput("birth_date", "Fecha de Nacimiento", {mask: MASKS.date})}
                        {renderInput("phone_number", "Número Telefoníco", {mask: MASKS.phone})}
                        {renderInput("address", "Dirección", {size: 'full'})}
                        {renderInput("email", "Email", {size: 'full'})}
                        {renderInput("password", "Contraseña", {type: 'password'})}
                        {renderInput("repeat_password", "Repite tu contraseña", {type: 'password'})}
                      </Row>

                      <Row>
                        <Col md={12}>

                        </Col>
                        {renderRegistrationTypeCards()}
                      </Row>

                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                                <span>
                                  Estoy de acuerdo con {" "}
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Reglamento
                                  </a> {" "}
                                  de la competencia.
                                </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={submitRegisterForm}
                        >
                          Create account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter/>
    </>
  );

}

export default Register;
