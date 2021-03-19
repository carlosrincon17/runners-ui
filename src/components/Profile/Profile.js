import React, {useEffect, useState} from "react";

import { Card, Container, Row, Col, Badge} from "reactstrap";
import Female from "assets/img/female.png";
import Male from "assets/img/male.png";

import Navbar from "components/Navbars/NavBar.js";
import UserService from "../../services/user.service";
import CardsFooter from "components/Footers/CardsFooter";

const Profile = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    loadUserData();
  }, []);

  const loadUserData = () => {
    const userService = new UserService();
    userService.getUser()
      .then(response => setUser(response.data))
      .catch(() => {});
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
                </div>
              </div>
            </Card>

            <Card className="card-profile shadow mt-3">
              <div className="px-4">
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
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
}

export default Profile;
