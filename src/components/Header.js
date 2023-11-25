import React, {useEffect, useState} from 'react';
import Modalservice from "./modalservice";



export const Header = () => {

    const [updatePhotoVisible, setUpdatePhotoVisible] = useState(false)



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

                <button onClick={() => setUpdatePhotoVisible(true)} className={"header-button"}>
                Заказать услугу
                </button>

        </div>
            <Modalservice show={updatePhotoVisible} onHide={() => setUpdatePhotoVisible(false)}/>
        </header>
    );
};

