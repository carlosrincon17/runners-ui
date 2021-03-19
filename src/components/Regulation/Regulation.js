
import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

import Navbar from "components/Navbars/NavBar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Carrera from "assets/img/brand/carrera_runners.jpeg"

class Regulation extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-shaped">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col className="offset-3 text-center" lg="6">
                      <br/>
                      <br/>
                      <br/>
                      <h1 className="text-white title-runners font-weight-light">
                        Nuestro Reglamento
                      </h1>
                      <p className="text-white text-muted d-none d-md-inline-block mb-0">
                        Acá podras encontrar el reglamento para nuestra carrera.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
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
          </div>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={Carrera}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mb-5">
                      <i className="ni ni-trophy" />
                    </div>
                    <h3>¿Quienes Pueden Participar?</h3>
                    <p className="text-muted">
                      Todas las personas sin distinción de edad, ni condición física, solo personas que quieran
                      <strong> CAMINAR, TROTAR O CORRER POR SALUD</strong>. Ya que es una carrera recreativa e inclusiva.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-info shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-2-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-info"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-info"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        INSCRIPCIONES
                      </h4>
                      <p className="lead text-italic text-white">
                        Las inscripciones se realizarán únicamente en la página web <a
                        className="font-weight-bold text-white mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        www.runnerscucuta.com
                      </a> a
                        través del formulario de inscripción habilitado para este efecto.
                      </p>
                      <p className="lead text-italic text-white">El pago se podrá realizar mediante una consignación
                        a la cuenta AUTORIZADA de ahorro a la mano Bancolombia  03115148995 </p>
                      <p className="lead text-italic text-white">
                        Una vez completado el registro  y realizado el pago de la inscripción las personas recibirán
                        un e-mail de confirmación de la inscripción: Por favor verifique que toda la información sea
                        correcta, en caso de algún dato erróneo por favor envíe un correo
                        <strong> runnerscucuta@gmail.com</strong> solicitando los cambios.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6" className="mb-9">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mb-5">
                      <i className="ni ni-user-run" />
                    </div>
                    <h3>Ten Presente!</h3>
                    <p className="lead">
                      Desde el día 20 de marzo del 2021 hasta el 30 de junio del 2021 fecha de cierre de inscripciones,
                      estas estarán abiertas las 24 horas del día, a través de la página web
                    </p>
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="http://www.runnerscucuta.com/"
                      onClick={e => e.preventDefault()}
                    >
                      www.runnerscucuta.com
                    </a>
                    <p className="lead">
                      <strong>
                        Las inscripciones NO son transferibles, ni los pagos re-imputables, ni para otros eventos ni para
                        otros participantes.
                      </strong>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-shaped">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col className="offset-3 text-center" lg="6">
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="text-white title-runners font-weight-light">
                      Costo de las inscripciones
                    </h1>
                    <p className="text-white text-muted d-none d-md-inline-block mb-0">
                      Las tarifas son de acuerdo a la opción escogida:
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </Col>
                </Row>
              </div>
            </Container>
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center py-5">
                            <div className="  icon-card icon-shape icon-shape-info rounded-circle mb-4">
                            <h6 className=" title-runners title-h3 text-uppercase">
                              $35.000
                            </h6>
                          </div>
                          <ul className="list-unstyled">
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="info"
                                  >
                                    <i className="ni ni-trophy" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">
                                    Medalla
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="info"
                                  >
                                    <i className="ni ni-badge" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">Número de corredor</h6>
                                </div>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="info"
                                  >
                                    <i className="ni ni-box-2" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">
                                    Tula
                                  </h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <p className="description">
                            Envio incluido
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center py-5">
                          <div className="icon-card icon-shape icon-shape-danger rounded-circle mb-4">
                            <h6 className="text-danger title-runners text-uppercase">
                              $70.000
                            </h6>
                          </div>
                          <ul className="list-unstyled">
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="danger"
                                  >
                                    <i className="ni ni-trophy" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">
                                    Medalla
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="danger"
                                  >
                                    <i className="ni ni-badge" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">Número de corredor</h6>
                                </div>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="danger"
                                  >
                                    <i className="ni ni-satisfied" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">
                                    Camisa Finisher
                                  </h6>
                                </div>
                              </div>
                            </li>
                            <li className="py-2">
                              <div className="d-flex align-items-center">
                                <div>
                                  <Badge
                                    className="badge-circle mr-3"
                                    color="danger"
                                  >
                                    <i className="ni ni-box-2" />
                                  </Badge>
                                </div>
                                <div>
                                  <h6 className="mb-0">
                                    Tula
                                  </h6>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <p className="description">
                            Envio incluido
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-danger shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg=" text-center 8">
                      <h3 className="text-white">
                        NOTA
                      </h3>
                      <p className="lead text-white mt-3">
                        las personas en situación de discapacidad que deseen participar tendrán un descuento especial
                        en el valor del kit de competencia (opción $70.000), deben comunicarse con la organización de
                        Runnerscucuta por medio de  un mensaje al e-mail <strong> runnerscucuta@gmail.com</strong>
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">

                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5 mb-9">
                    <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mb-5">
                      <i className="ni ni-user-run" />
                    </div>
                    <h3>RECORRIDO</h3>
                    <p>
                      El recorrido por ser un evento virtual, es de libre escogencia del corredor en los días
                      establecidos por el evento del 05 al 08 de agosto. Cada corredor es responsable de
                      cumplir las normas de Bioseguridad y de movilización establecidas por la autoridad local.
                    </p>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mb-5">
                      <i className="ni ni-single-copy-04" />
                    </div>
                    <h3>DESCARGO DE RESPONSABILIDADES</h3>
                    <p>
                      Por el solo hecho de inscribirse y completar el proceso de inscripción en la página web,
                      el participante declara haber leído y aceptado los términos y condiciones, así como encontrarse
                      en óptimo estado de salud y en condiciones físicas para participar en la II CARRERA VIRTUAL
                      RUNNERSCUCUTA 2021, eximiendo de toda responsabilidad a la Organización, auspiciadores,
                      patrocinadores y otras instituciones participantes de cualquier accidente o lesión que
                      pudiere sufrir antes, durante y/o después del evento deportivo.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Regulation;
