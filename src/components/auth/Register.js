import React, {useEffect, useState} from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col, Badge, Modal, Spinner
} from "reactstrap";

import Navbar from "components/Navbars/NavBar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import {renderFormInput} from "../../util/input.util";
import UserService from "../../services/user.service";
import {MASKS} from "../../util/mask.util";
import RegistrationTypeService from "../../services/registration_type.service";
import CurrencyFormat from 'react-currency-format';
import {useHistory, useParams} from "react-router";

const Register = () => {
  let { distance } = useParams();
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
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const history = useHistory();

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
    const requestData = Object.assign(formData, {
      registration_type_id: selectedRegistrationType,
      distance: distance
    });
    setLoadingRegister(true);
    userService.createUser(requestData)
      .then(data => {
        setNotificationModal(true);
        setLoadingRegister(false);
      })
      .catch(error => {
        console.error(error)
        setLoadingRegister(false);
      });
  }

  const renderInput = (name, label, options = {}) => {
    return renderFormInput(name, label, handleInputChange, options);
  }

  const onCloseSuccessModal = () => {
    history.push('/');
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
              <small>{registrationType.limits}</small>
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
                      Te estás registrando a la carrera:
                    </div>
                    <div className="text-center">
                      <div className="icon-card icon-shape icon-shape-warning rounded-circle mb-4">
                        <h6 className="title-runners text-warning text-uppercase">
                          {distance}
                        </h6>
                      </div>
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
                          disabled={loadingRegister}
                        >
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className={loadingRegister ? '': 'd-none'}
                          />
                          {' '}
                          Inscribirse
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Modal
              className="modal-dialog-centered modal-success"
              contentClassName="bg-gradient-success"
              isOpen={notificationModal}
              backdrop="static"
              toggle={onCloseSuccessModal}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Confirmación
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={onCloseSuccessModal}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">Registro exitoso!</h4>
                  <p>
                    Tu registro ha finalizado correctamente, recibirás un e-mail de confirmación de la inscripción:
                    Por favor verifique que toda la información es correcta, en caso de algún dato erróneo por favor
                    envíe un correo runnerscucuta@gmail.com solicitando los cambios.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button" onClick={onCloseSuccessModal}>
                  Entendido!
                </Button>
              </div>
            </Modal>
          </Container>
        </section>
      </main>
      <SimpleFooter/>
    </>
  );

}

export default Register;
