import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useEffect, useState } from "react";


const App = () => {
  const [value, setValue] = useState()
  return (


    <div>

    <Header/>

      <div>

        <form action="https://formsubmit.co/kaiewytt22@gmail.com" method="POST">

          <div>
            <input type="hidden" name="_template" value="table"/>
          </div>

          <div>
            <input type="hidden" name="_next" value="http://localhost:3000/"/>
          </div>

          <div>
            <input type="hidden" name="_captcha" value="false"/>
          </div>

        <div>
          <input type="text"
                 name="ФИО отправителя"
                 placeholder="Ваше ФИО"
                 required/>
        </div>

<div>
  <PhoneInput
      placeholder="Enter phone number"
      name="Номер телефона"
      value={value}
      onChange={setValue}/>
</div>

        <div>
          <button type="submit">Send</button>
        </div>

        </form>
      </div>
    </div>

  );
}

export default App;
