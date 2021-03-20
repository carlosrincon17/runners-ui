import React, {useEffect, useState} from "react";

import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  CardBody,
  Spinner,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import Female from "assets/img/female.png";
import Male from "assets/img/male.png";

import Navbar from "components/Navbars/NavBar.js";
import UserService from "../../services/user.service";
import CardsFooter from "components/Footers/CardsFooter";

const Profile = () => {

  const [user, setUser] = useState();
  const [loadingRegister, setLoadingRegister] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    loadUserData();

  }, []);

  const uploadFile = () => {
    const userService = new UserService();


  }

  const loadUserData = () => {
    const userService = new UserService();
    setLoadingRegister(true);
    userService.getUser()
      .then(response => {
        setUser(response.data)
      })
      .catch(() => {})
      .finally(() => setLoadingRegister(false))
  };

  const getUserCards = () => {
    if(loadingRegister) {
      return (
        <section className="section">
          <Container className="text-center">
            <Spinner
              as="span"
              animation="grow"
              style={{ width: '5rem', height: '5rem' }}
              role="status"
            />
          </Container>
        </section>
      )
    }
    return (
      <section className="section">
        <Container>
          <Card className="card-profile shadow mt--400">
            <div className="px-4">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={user?.gender === 'Mujer' ? Female : Male}
                      />
                    </a>
                  </div>
                </Col>
                <Col
                  className="order-lg-3 text-lg-right align-self-lg-center"
                  lg="4"
                >
                  <div className="card-profile-actions py-4 mt-lg-0">
                    <Badge color="success" pill>Activo</Badge>
                    <Badge color="warning" pill>Pendiente Pago</Badge>
                  </div>
                </Col>
                <Col className="order-lg-1" lg="4">
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">{user?.gender}</span>
                      <span className="description">Genero</span>
                    </div>
                    <div>
                      <span className="heading">{user?.shirt_size}</span>
                      <span className="description">Talla</span>
                    </div>
                    <div>
                      <span className="heading">27</span>
                      <span className="description">Edad</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5 mb-5">
                <h3>
                  {`${user?.first_name} ${user?.last_name}`}
                </h3>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2"/>
                  {user?.address}
                </div>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2"/>
                  {user?.city}, {user?.state}
                </div>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2"/>
                  Email: {user?.email}
                </div>
                <div>
                  <i className="ni education_hat mr-2"/>
                  Celular: {user?.phone_number}
                </div>
                <div className="h6 mt-4">
                  <i className="ni education_hat mr-2"/>
                  Tipo de inscripción: {user?.amount}
                </div>
                <div>
                  <Badge color="info" pill className="mr-1">
                    Medalla
                  </Badge>
                  <Badge color="info" pill className="mr-1">
                    Número de corredor
                  </Badge>
                  <Badge color="info" pill className="mr-1">
                    Tula
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
          <Card className="shadow border-0 mt-3">
            <CardBody className="py-5">
              <Row>
                <div className="col-xs-12 col-md-1 text-center">
                  <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                    <i className="fa fa-exclamation-triangle" />
                  </div>
                </div>
                <div className={"col-xs-12 col-md-11"}>
                  <h6 className="text-warning text-uppercase title-runners" style={{fontSize: '35px'}}>
                    Inscripción Pendiente de pago
                  </h6>
                </div>
              </Row>
              <p className="description mt-3">
                Recuerda que para finalizar la inscripción debes realizar una consignación
                a la cuenta AUTORIZADA de ahorro a la mano Bancolombia 03115148995
              </p>
              <div>
                <FormGroup>
                  <Input className="text-right" type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    Seleccione acá el comprobante de pago de la inscripción
                  </FormText>
                </FormGroup>
                <div className="justify-content-end text-right">
                  <Button
                    className="mt-4"
                    color="warning"
                    type="button"
                    onClick={uploadFile}
                    disabled={loadingRegister}
                  >
                    <i className="ni ni-cloud-upload-96" />
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className={loadingRegister ? '': 'd-none'}
                    />
                    {' '}
                    Subir Archivo de Pago
                  </Button>
                </div>

              </div>
            </CardBody>
          </Card>
          <Card className="shadow border-0 mt-3">
            <CardBody className="py-5">
              <Row>
                <div className="col-xs-12 col-md-1 text-center">
                  <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                    <i className="fa fa-exclamation-triangle" />
                  </div>
                </div>
                <div className={"col-xs-12 col-md-11"}>
                  <h6 className="text-info text-uppercase title-runners" style={{fontSize: '35px'}}>
                    Ten Presente!
                  </h6>
                </div>
              </Row>
              <p className="text-muted mt-3">
                Desde el día 20 de marzo del 2021 hasta el 30 de junio del 2021 fecha de cierre de inscripciones,
                estas estarán abiertas las 24 horas del día, a través de la página web
              </p>
            </CardBody>
          </Card>
        </Container>
      </section>
    )
  };

  return (
    <>
      <Navbar/>
      <main className="profile-page">
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span/>
            <span/>
            <span/>
            <span/>
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        {getUserCards()}
      </main>
      <CardsFooter />
    </>
  );
}

export default Profile;
