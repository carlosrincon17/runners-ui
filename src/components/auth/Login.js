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
  Alert,
  Modal,
  Spinner
} from "reactstrap";

import Navbar from "components/Navbars/NavBar.js";
import CardsFooter from "components/Footers/CardsFooter";
import React, {useEffect, useState} from "react";
import AuthService from "services/auth.service"
import LocalStorageUtil from "../../util/localstorage.util";
import {useHistory} from "react-router";
import { 
  LOGIN_FORM, 
  RECOVERY_PASSWORD_FORM 
} from "util/forms_constants";

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [formRecoveryData, setFormRecoveryData] = useState({
    email: ''
  });
  const history = useHistory();
  const [errorResponse, setErrorResponse] = useState({});
  const [currentForm, setCurrentForm] = useState(LOGIN_FORM);
  const [notificationModal, setNotificationModal] = useState(false);
  const [loadingRecovery, setLoadingRecovery] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const handleRecoveryInputChange = (event) => {
    setFormRecoveryData({
      ...formRecoveryData,
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

  const submitRecoveryPasswordForm = (event) => {
    event.preventDefault();
    setErrorResponse({})
    setLoadingRecovery(true);
    const authService = new AuthService();
    authService.recoveryPassword(formRecoveryData)
      .then(response => setNotificationModal(true))
      .catch(onAuthenticateUserError)
      .finally(() => setLoadingRecovery(false))
  };

  const onAuthenticateUserSuccess = (response) => {
    const {data} = response;
    LocalStorageUtil.setItem(LocalStorageUtil.TOKEN_KEY, data.access_token);
    LocalStorageUtil.setItem(LocalStorageUtil.ACCESS_TIME, new Date());
    LocalStorageUtil.setItem(LocalStorageUtil.IS_ADMIN, data.is_admin);
    if (data.is_admin) {
      history.push('/admin');
    } else {
      history.push('/profile-page');
    }
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

  const onRecoveryPasswordClick = (e) => {
    e.preventDefault();
    setCurrentForm(RECOVERY_PASSWORD_FORM);
  }

  const onBackToLoginClick = (e) => {
    e.preventDefault();
    setCurrentForm(LOGIN_FORM);
  }
  const onCloseSuccessModal = () => {
    setNotificationModal(false); 
  }

  const getRecoveryPasswordModal = () => {
    return (
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
            <p>
              Hemos enviado un enlace a tu email <strong>{formRecoveryData.email}</strong> con las instrucciones para cambiar tu contraseña. Recuerda que este enlance solo el válido por 24 horas.
              En caso de que no lo puedas usar, no te preocupes, puedes realizar este proceso nuevamente
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <Button className="btn-white" color="default" type="button" onClick={onCloseSuccessModal}>
            Entendido!
          </Button>
        </div>
      </Modal>
    )
  }

  const getLoginContainerForm = () => {
    return (
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5" >
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
                      color="info"
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
                  onClick={onRecoveryPasswordClick}
                >
                  <small>Olvidaste tu contraseña?</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }

  const getRecoveryPasswordContainer = () => {
    return (
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="6">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5" >
                <div className="text-center text-muted mb-4">
                  Recupera tu contraseña: <br />
                  <small>Ingresa tu email y te enviaremos un email para iniciar el proceso de recuperar tu contraseña.</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" onChange={handleRecoveryInputChange} name="email"/>
                    </InputGroup>
                  </FormGroup>
                  {getErrorAlert()}
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="info"
                      type="button"
                      onClick={submitRecoveryPasswordForm}
                    disabled={loadingRecovery}
                      >
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className={loadingRecovery ? '': 'd-none'}
                        />
                      {' '}  
                      Enviar email de recuperación
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a
                  className="text-light"
                  onClick={onBackToLoginClick}
                >
                  <small>Volver al inicio de sesión</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Navbar/>
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 shape-default">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
          {currentForm === LOGIN_FORM ? getLoginContainerForm() : getRecoveryPasswordContainer()}
          {getRecoveryPasswordModal()}
        </section>
      </main>
      <CardsFooter/>
    </>
  );
}

export default Login;
