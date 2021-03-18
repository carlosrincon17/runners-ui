import React from "react";
import grupo from "assets/img/runners/grupo.jpg"
import grupo_2 from "assets/img/runners/grupo2.jpg"
import grupo_3 from "assets/img/runners/grupo3.jpg"
import grupo_4 from "assets/img/runners/grupo4.jpg"
import grupo_5 from "assets/img/runners/grupo5.jpg"

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: grupo,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: grupo_2,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: grupo_3,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: grupo_4,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: grupo_5,
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Quienes Somos
                </h1>
                <p className="lead text-white mt-4">
                  Somos un equipo de running aficionado y recreativo, que fomenta habitos de vida saludable e impulsa
                  la cultura running en nuestra región.
                  <br/>
                  Tenemos como lema <strong>#YOCORROPORSALUD</strong>.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  Contactanos
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
