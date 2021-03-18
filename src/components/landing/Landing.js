
import React from "react";
import barqueros from "assets/img/patrocinadores/baqueros.jpeg"
import vida_fit from "assets/img/patrocinadores/vida fit.jpeg"
import color_creativo from "assets/img/patrocinadores/color_creativo.png"
import arroz_zulia from "assets/img/patrocinadores/arroz_zulia.png"
import daimont from "assets/img/patrocinadores/daimont.png"
import epicc from "assets/img/patrocinadores/epicc.png"
import rentabien from "assets/img/patrocinadores/rentabien.png"
import samuel from "assets/img/patrocinadores/samuel.png"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

import Navbar from "components/Navbars/NavBar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Carousel from "../../views/IndexSections/Carousel";
import {Link} from "react-router-dom";

class Landing extends React.Component {
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
            <section className="section section-lg section-shaped section-background pb-250">
              <div className="shape shape-style-1 shape-background-image">
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
                      <br/>
                      <br/>
                      <br/>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className=" text-center py-5">
                          <div className=" icon-card icon-shape icon-shape-primary rounded-circle mb-4">
                            <h6 className=" title-runners text-uppercase">
                              5K
                            </h6>
                          </div>
                          <p className="text-muted mt-3">
                            <strong>CAMINELA O CORRELA PERO DISFRUTALA</strong>
                          </p>
                          <Button
                            className="mt-4 text-center"
                            color="primary"
                            to={'/registro/5K'}
                            tag={Link}
                          >
                            Inscribete Aqui!
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center py-5">
                          <div className="icon-card icon-shape icon-shape-danger rounded-circle mb-4">
                            <h6 className="text-danger title-runners text-uppercase">
                              10k
                            </h6>
                          </div>
                          <p className="text-muted mt-3">
                            <strong> CORRELA Y SUMA TUS MEJORES TIEMPOS </strong>
                          </p>
                          <Button
                            className="mt-4"
                            color="danger"
                            to={'/registro/10K'}
                            tag={Link}
                          >
                            Inscribete Aqui!
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center py-5">
                          <div className="icon-card icon-shape icon-shape-info rounded-circle mb-4">
                            <h6 className="title-runners text-info text-uppercase">
                              21k
                            </h6>
                          </div>
                          <p className="text-muted mt-3">
                            <strong>TU DISCIPLINA Y DEDICACION HARAN DE ESTOS KILOMETROS TU MEJOR EXPERIENCIA</strong>
                          </p>
                          <Button
                            className="mt-4"
                            color="info"
                            to={'/registro/20K'}
                            tag={Link}
                          >
                            Inscribete Aqui!
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
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
                        RECUERDA!
                      </h4>
                      <p className="lead text-italic text-white">
                        Una vez completado el registro las personas recibirán un e-mail de confirmación
                        de la inscripción: Por favor verifique que toda la información es correcta, en caso de
                        algún dato erróneo por favor envíe un correo runnerscucuta@gmail.com solicitando los cambios.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-info shadow rounded-circle mb-5">
                      <i className="ni ni-user-run" />
                    </div>
                    <h3
                      className="title-h3"
                    >Ten Presente!</h3>
                    <p className="lead">
                      Desde el día 20 de marzo del 2021 hasta el 30 de junio del 2021 fecha de cierre de inscripciones,
                      estas estarán abiertas las 24 horas del día, a través de la página web
                    </p>
                    <a
                      className="font-weight-bold text-info mt-5"
                      href=""
                      onClick={e => e.preventDefault()}
                    >
                      www.runnerscucuta.com
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Carousel />
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3 title-h3">Patrocinado por:</h2>
                  <p className="lead text-muted">
                   Gracias a ellos podemos hacer posible esta carrera
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={barqueros}
                      />
                    </div>

                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Baqueros</span>
                        <small className="h6 text-muted">Basketball Club</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={color_creativo}
                      />
                    </div>

                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Color Creativo</span>
                        <small className="h6 text-muted">
                         Agencia de Publicidad
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={arroz_zulia}
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Arroz Zulia</span>
                        <small className="h6 text-muted">Arrocera</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={vida_fit}
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Vida Fit</span>
                        <small className="h6 text-muted">Qtar GYM</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={daimont}
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Daimont</span>
                        <small className="h6 text-muted">
                          Calzado
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={epicc}
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Epicco</span>
                        <small className="h6 text-muted">
                          Restaurante - Bar
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={samuel}
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Samuel Suarez</span>
                        <small className="h6 text-muted">
                          Medicina con corazón
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <div
                      className="img-sponsor"
                    >
                      <img
                        alt="..."
                        className="img-center img-fluid shadow shadow-lg--hover"
                        src={rentabien}
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title-h3">
                        <span className="d-block mb-1">Rentabien</span>
                        <small className="h6 text-muted">
                          Inmobiliaria
                        </small>
                      </h5>
                    </div>
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

export default Landing;
