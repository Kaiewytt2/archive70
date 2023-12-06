import React, {Component, useState} from 'react';
import Modal from 'react-modal';
import InputMask from "react-input-mask";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        maxWidth: '100%',
        minWidth: '45%'

    }
};

class MyModal extends Component {

    constructor() {

        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render() {
        return (
            <div>
                <button className={'confirmation-button'} onClick={this.openModal}>Заказать звонок</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form className={'form-phone'} action="https://formsubmit.co/kaiewytt22@gmail.com" method="POST">
                        <div>
                            <input type="hidden" name="_template" value="table"/>
                        </div>

                        <div>
                            <input type="hidden" name="_captcha" value="false"/>
                        </div>
                        <div>
                            <input type="text"
                                   name="ФИО отправителя"
                                   placeholder="Ваше ФИО"
                                   className={'form-control'}
                                   required/>
                        </div>
                        <div>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                maskChar="_"
                                value={this.value}
                                onChange={this.onChange}
                                className={'form-control'}
                                placeholder="Ваш номер телефона"
                                name="Номер телефона отправителя"
                                required/>
                        </div>
                        <div>
                            <button className={'confirmation-button w-100'} type="submit">Отправить заявку</button>
                        </div>
                    </form>
                    <button className={'btn btn-danger w-100 mt-2'} onClick={this.closeModal}>Закрыть</button>

                </Modal>
            </div>
        );
    }
}

export default MyModal;