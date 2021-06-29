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
import AuthService from "services/auth.service";
import {useHistory, useParams} from "react-router";

const RecoveryPassword = () => {

  const [formData, setFormData] = useState({
    verifyPassword: '',
    password: ''
  });
  let { token } = useParams();
  const history = useHistory();
  const [errorResponse, setErrorResponse] = useState({});
  const [errorToken, setErrorToken] = useState({});
  const [notificationModal, setNotificationModal] = useState(false);
  const authService = new AuthService();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    authService.validateToken(token)
      .then(() => {})
      .catch(onValidateTokenError)
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const submitUpdatePasswordForm = (event) => {
    event.preventDefault();
    setErrorResponse({})
    authService.validateToken(token)
      .then(() => {})
      .catch(onValidateTokenError)
  };

  const onValidateTokenError = (error) => {
    const errorResponse = error.response ? error.response.data : {};
    if (errorResponse.detail) {
      setErrorToken(errorResponse)
    } else {
      setErrorToken({detail: 'Ha ocurrido un error inesperado.'})
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

  const getTokenErrorAlert = () => {
    if (errorToken.detail) {
      return (
        <Alert color="danger" className="text-center">
          <strong>Error:</strong> {errorToken.detail}
        </Alert>
      )
    }
    return null;
  }

  const onCloseSuccessModal = () => {
    setNotificationModal(false); 
  }

  const getUpdatePasswordModal = () => {
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

  const getRecoveryPasswordContainerForm = () => {
    return (
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <h4>Actualiza tu contraseña</h4>
                  <small>Ingresa una nueva contraseña para seguir ingresando a nuestro portal.</small>
                </div>
                <Form role="form" className={errorToken.detail ? 'hidden': ''}>
                  <FormGroup className="mb-3">
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
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Repite la constraseña"
                        type="password"
                        autoComplete="off"
                        onChange={handleInputChange}
                        name="repeatPassword"
                      />
                    </InputGroup>
                  </FormGroup>
                  {getErrorAlert()}
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="info"
                      type="button"
                      onClick={submitUpdatePasswordForm}
                    >
                      Actualizar Contraseña
                    </Button>
                  </div>
                </Form>
                {getTokenErrorAlert()}
              </CardBody>
            </Card>
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
          {getRecoveryPasswordContainerForm()}
          {getUpdatePasswordModal()}
        </section>
      </main>
      <CardsFooter/>
    </>
  );
}

export default RecoveryPassword;
