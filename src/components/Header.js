import React, {useEffect, useState} from 'react';
import Modalservice from "./modalservice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const Header = () => {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header>
        <div className={"container mx-auto header-body"}>
         <img className={"logo"} alt={"logo"} src={"/photo_2023-11-11_20-40-55.png"}/>
            <div className={"header-info"}>
                <div>
                    Местонахождение
                </div>
               г. Томск Улица ...
            </div>
            <div className={"header-info"}>
                Контакты
                <div>
                    &#9742; +7(3822) 33-11-77
                    <div>
                        &#9993; arhiv70@yandex.ru
                    </div>
                </div>
            </div>

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

        </header>
    );
};

