
import React from "react";
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
import Tabs from "../../views/IndexSections/Tabs";
import {Link} from "react-router-dom";

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
                      <p className="text-white description d-none d-md-inline-block mb-0">
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
          <br/>
          <Tabs />
          <br/>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-danger shadow border-0">
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
                          className="fill-danger"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-danger"
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
                    <h3>Ten Presente!</h3>
                    <p className="lead">
                      Desde el día 1 de marzo del 2021 hasta el 30 de junio del 2021 fecha de cierre de inscripciones,
                      estas estarán abiertas las 24 horas del día, a través de la página web
                    </p>
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
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
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Regulation;
