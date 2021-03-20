import React, {useEffect, useState} from "react";

import {Card, Container, Row, Col, CardBody, Alert, Button, UncontrolledTooltip} from "reactstrap";
import DataTable from 'react-data-table-component';

import Navbar from "components/Navbars/NavBar.js";
import CardsFooter from "components/Footers/CardsFooter";
import EventRegistrationService from "../../services/event_registration.service";
import CurrencyFormat from "react-currency-format";
import {customStyles} from "../../util/data_table.util";

const Admin = () => {

  const [eventRegistrationSummary, setEventRegistrationSummary] = useState([]);
  const [inscriptions, setInscriptions] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("PAGO PENDIENTE");
  const eventRegistrationService = new EventRegistrationService();
  const eventNames = [
    "PAGO PENDIENTE",
    "VALIDACIÓN DE PAGO PENDIENTE",
    "INSCRIPCIÓN FINALIZADA",
  ];


  const columns = React.useMemo(() => [
    {
      name: 'Nombres',
      selector: 'first_name',
      sortable: true,
    },
    {
      name: 'Apellidos',
      selector: 'last_name',
      sortable: true,
    },
    {
      name: 'Distancia',
      selector: 'distance',
      sortable: true,
    },
    {
      name: 'Tipo de inscripción',
      selector: 'registration_type_amount',
      sortable: true,
      cell: row => (<CurrencyFormat value={row.registration_type_amount} displayType={'text'} thousandSeparator={true}
                                    prefix={'$'}/>)
    },
    {
      name: 'Documento',
      selector: 'document_number',
      sortable: true,
    },
    {
      name: 'Talla',
      selector: 'shirt_size',
      sortable: true,
    },
    {
      name: 'Genero',
      selector: 'gender',
      sortable: true,
    },
    {
      name: 'Opciones',
      selector: '',
      sortable: true,
      cell: row => getApproveButton(row),
      omit: selectedStatus !== "VALIDACIÓN DE PAGO PENDIENTE"
    }
  ], [selectedStatus]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    loadSummary();
    getInscriptions(eventNames[0])
  }, []);

  const loadSummary = () => {
    eventRegistrationService.getSummary()
      .then(response => setEventRegistrationSummary(response.data))
      .catch(() => {
      });
  };

  const approveEventRegistration = (id) => {
    const eventRegistrationService = new EventRegistrationService();
    eventRegistrationService.approve(id)
      .then(response => {
        loadSummary();
        getInscriptions(selectedStatus);
      })
      .catch(error => console.log(error));
  }

  const getApproveButton = (row) => {
    return (
      <>
        <Button className={"btn btn-icon"} color="primary" size="sm" type="button"
                id="approve-button" onClick={() => approveEventRegistration(row.event_registration_id)}>
        <span className="btn-inner--icon">
            <i className="ni ni-check-bold"/>
        </span>
        </Button>
        <UncontrolledTooltip
          delay={0}
          placement="top"
          target="approve-button"
        >
          Aprobar
        </UncontrolledTooltip>
      </>
    )
  };

  const getInscriptions = (status) => {
    const filterData = {
      status: status
    };
    setSelectedStatus(status);
    eventRegistrationService.getRegistrationByFilter(filterData)
      .then(response => setInscriptions(response.data))
      .catch(() => {
      });
  };

  const selectStatus = (eventName) => {
    getInscriptions(eventName);
  };

  const getEventTypeContainer = (eventName) => {
    const eventSummary = eventRegistrationSummary.find(
      eventRegistrationSummaryItem => eventRegistrationSummaryItem.status === eventName
    );
    return (
      <Col lg="4">
        <Card
          className={`card-lift--hover shadow border-0 card-select-registration-type ${eventName === selectedStatus ? 'selected-info' : ''}`}
          onClick={() => selectStatus(eventName)}>
          <CardBody className="text-center py-5">
            <div className={`icon-card icon-shape icon-shape-info rounded-circle mb-4`}>
              <h6 className={`text-info title-runners text-uppercase`}>
                {eventSummary?.total || 0}
              </h6>
            </div>
            <div className={"text-center"}>
              {eventName}
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }

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
            <div className={"mt--400"}>
              <Row>
                {eventNames.map(getEventTypeContainer)}
              </Row>
            </div>

            <Card className="shadow border-0 mt-3">
              <CardBody className="py-5">
                <Row>
                  <Col lg="12">
                    <DataTable
                      title={selectedStatus}
                      columns={columns}
                      data={inscriptions}
                      pagination
                      customStyles={customStyles}
                      noDataComponent={<Alert color="default" className={"mt-3"}>
                        No existen inscripciones en el estado: <strong>{selectedStatus}</strong>
                      </Alert>}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Container>
        </section>
      </main>
      <CardsFooter/>
    </>
  );
}

export default Admin;
