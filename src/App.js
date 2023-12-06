import './App.scss';
import {Header} from './components/Header'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, {useState} from "react";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputMask from 'react-input-mask';


const App = () => {
    const [value, setValue, onChange] = useState()
    return (
        <div>
            <Header/>
            <Container className={"wrapper"}>
                <h1 className={'title'}>
                    Архивация и хранение документов
                </h1>
                <p>
                    Наш архив находится в г.Томске и оказывает услуги по хранению, архивной
                    обработке и переплету документов на бумажных носителях организациям всех форм
                    собственности, в том числе государственным учреждениям, в Сибирском федеральном округе.
                </p>
            </Container>

            <div className={'wrapper-color'}>
                <Container>
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
                                value={value}
                                onChange={onChange}
                                className={'form-control'}
                                placeholder="Ваш номер телефона"
                                name="Номер телефона отправителя"
                                required/>
                        </div>
                        <div>
                            <button className={'confirmation-button'} type="submit">Отправить заявку</button>
                        </div>
                    </form>
                </Container>
            </div>

            <Container className={"wrapper"}>
                <h1 className={'title'}>
                </h1>
                <div>
123
                </div>
            </Container>
        </div>
    );
}

export default App;