import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Row, Col, Button } from "reactstrap";
import EventRegistrationService from "../../services/event_registration.service";

const EventRegistrationDetail = (props) => {

    const [eventRegistrationSummary, setEventRegistrationSummary] = useState([]);
    const eventRegistrationService = new EventRegistrationService();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const { eventRegistrationId } = props;
        if (eventRegistrationId) {
            eventRegistrationService.getEventRegistrationById(eventRegistrationId).then(
                (response) => {
                    const userData = response.data.user;
                    userData.distance = response.data.distance;
                    userData.registration_type_amount = response.data.amount;
                    setCurrentUser(userData);
                }
            )
        }
    }, [props.eventRegistrationId])
    if (!currentUser) {
        return null;
    }
    return (
        <>
            <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                    Información de inscripción:
                </h6>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.onCloseModal}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body">
                <Row>
                    <Col md="12" className={"text-center"}>
                        <strong>{currentUser.first_name} {currentUser.last_name}</strong>
                    </Col>
                    <br /><br />
                    <Col md="12">
                        <strong>Email:</strong> {currentUser.email}
                    </Col>
                    <Col md="12">
                        <strong>Identificación:</strong> {currentUser.document_number}
                    </Col>
                    <Col md="12">
                        <strong>Dirección:</strong> {currentUser.address}, {currentUser.city}, {currentUser.state}
                    </Col>
                    <Col md="12">
                        <strong>Número de Telefono:</strong> {currentUser.phone_number}
                    </Col>
                    <Col md="12">
                        <strong>Camiseta:</strong> {currentUser.shirt_size} - {currentUser.gender}
                    </Col>
                    <Col md="12">
                        <strong>Recorrido:</strong> {currentUser.distance}
                    </Col>
                    <Col md="12">
                        <strong>Tipo de inscripción:</strong> <CurrencyFormat value={currentUser.registration_type_amount} displayType={'text'} thousandSeparator={true}
                            prefix={'$'} />
                    </Col>

                </Row>
            </div>
            <div className="modal-footer">
                <Button className="btn-white" color="default" type="button" onClick={props.onCloseModal}>
                    Cerrar
                </Button>
            </div>
        </>
    )

}

export default EventRegistrationDetail;