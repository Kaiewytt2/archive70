import React from 'react';
import {observer} from "mobx-react-lite";
import {Button, Modal} from "react-bootstrap";

const Modalservice = observer(({show, onHide}) => {

    return (
        <Modal style={{zIndex: 10}}
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить фотографию участка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
123
            </Modal.Body>
            <Modal.Footer>
123
            </Modal.Footer>
        </Modal>
    );
});

export default Modalservice;