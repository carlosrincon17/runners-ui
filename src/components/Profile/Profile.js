import React, {useEffect, useMemo, useState} from "react";

import {
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Spinner,
  Button, Modal
} from "reactstrap";
import Female from "assets/img/female.png";
import Male from "assets/img/male.png";

import Navbar from "components/Navbars/NavBar.js";
import UserService from "../../services/user.service";
import CardsFooter from "components/Footers/CardsFooter";
import {useHistory} from "react-router";
import EventRegistrationService from "../../services/event_registration.service";
import CurrencyFormat from "react-currency-format";
import {
  acceptStyle,
  activeStyle,
  baseStyle,
  imgStyle, rejectStyle,
  thumb,
  thumbInner,
  thumbsContainer
} from "../../util/data_table.util";
import {useDropzone} from "react-dropzone";

const Profile = () => {

  const [user, setUser] = useState();
  const [eventRegistration, setEventRegistration] = useState();
  const [files, setFiles] = useState([]);
  const history = useHistory();
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [notifyModal, setNotifyModal] = useState(false);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);


  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    loadUserData();
    getEventRegistration()

  }, []);

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  const uploadFile = () => {
    const eventRegistrationService = new EventRegistrationService();
    setLoadingUpload(true);
    eventRegistrationService.uploadFile(eventRegistration.id, {file: files[0]})
      .then(response => {
        if (response.data) {
          setNotifyModal(true)
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoadingUpload(false)
      })
  }

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={imgStyle}
        />
      </div>
    </div>
  ));

  const loadUserData = () => {
    const userService = new UserService();
    setLoadingUser(true);
    userService.getUser()
      .then(response => {
        setUser(response.data)
      })
      .catch(() => {
      })
      .finally(() => setLoadingUser(false))
  };

  const getEventRegistration = () => {
    const eventRegistrationService = new EventRegistrationService();
    setLoadingUser(true);
    eventRegistrationService.getEventRegistration()
      .then(response => {
        setEventRegistration(response.data)
      })
      .catch(() => {
      })
      .finally(() => setLoadingUser(false))
  };

  const onCloseSuccessModal = () => {
    getEventRegistration();
    setNotifyModal(false);
  }

  const validateStatusPayment = () => {
    if (eventRegistration?.status === 'PAGO PENDIENTE') {
      return (
        <Card className="shadow border-0 mt-3">
          <CardBody className="py-5">
            <Row>
              <div className="col-xs-12 col-md-1 text-center">
                <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                  <i className="fa fa-exclamation-triangle"/>
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
              <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Seleccione el archivo que desea cargar como evidencia de la transferencia.</p>
              </div>
              <aside style={thumbsContainer}>
                {thumbs}
              </aside>
              <div className="justify-content-end text-right">
                <Button
                  className="mt-4"
                  color="warning"
                  type="button"
                  onClick={uploadFile}
                  disabled={loadingUpload || !files.length}
                >
                  <i className="ni ni-cloud-upload-96"/>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className={loadingUpload ? '' : 'd-none'}
                  />
                  {' '}
                  Subir Archivo de Pago
                </Button>
              </div>

            </div>
          </CardBody>
        </Card>
      )
    }
  }

  const getUserCards = () => {
    if (loadingUser) {
      return (
        <section className="section">
          <Container className="text-center">
            <Spinner
              as="span"
              animation="grow"
              style={{width: '5rem', height: '5rem'}}
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
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">{eventRegistration?.distance}</span>
                      <span className="description">Distancia</span>
                    </div>
                    <div>
                      <span className="heading">
                        <CurrencyFormat value={eventRegistration?.amount} displayType={'text'} thousandSeparator={true}
                                        prefix={'$'}/>
                        </span>
                      <span className="description">Valor de inscripción</span>
                    </div>
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
          {validateStatusPayment()}
          <Card className="shadow border-0 mt-3">
            <CardBody className="py-5">
              <Row>
                <div className="col-xs-12 col-md-1 text-center">
                  <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                    <i className="fa fa-exclamation-triangle"/>
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
          <Modal
            className="modal-dialog-centered modal-success"
            contentClassName="bg-gradient-success"
            isOpen={notifyModal}
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
                <i className="ni ni-bell-55 ni-3x"/>
                <h4 className="heading mt-4">Inscripción de pago Exitosa!</h4>
                <p>
                  Tu registro ha de pago se ha finalizado correctamente, recibirás un e-mail de confirmación del pago
                  a la II CARRERA VIRTUAL.
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
      <CardsFooter/>
    </>
  );
}

export default Profile;
