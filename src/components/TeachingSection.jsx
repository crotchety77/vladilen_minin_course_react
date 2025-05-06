import Button from "./Button/Button.jsx";
import {useState} from "react";
import {differences} from "../data.js";





export default function TeachingSection() {

    let [ content, setContent ] = useState(0)
    // Стэйт всегда на верхнем уровне (на левом, главном)

    let ifContent = null;

    if (content) {
        ifContent = <p>{differences[content]}</p>
    } else {
        ifContent = <p>Нажми на кнопку!</p>
    }

    function handleClick(type) {
        console.log('КЛИКАЮ ЖОСКО', type);
        //setContent = type - напрямую не пишем. не сработает
        setContent(type);
        console.log(content)
        // Показывает предыдущий. State будет изменён при следующем рендере.
        //Как работать тогда с новым значением?

    }

    return (
        <>
            <Button buttonClicked={() => handleClick('MAIN')}>"Здесь я могу прописывать без пропсов"
                <h1>Прикол</h1>
            </Button>

            <Button buttonClicked={() => handleClick('way')}>"Здесь я могу прописывать без пропсов"
                {/*//Замыкание. Для определения типа () => КАКАЯ ЭТО КНОПКА?*/}
            </Button>

            <Button buttonClicked={() => handleClick('easy')}>"Здесь я могу прописывать без пропсов"
                //Замыкание
            </Button>

            <Button buttonClicked={() => handleClick('program')}>"Здесь я могу прописывать без пропсов"
                //Замыкание
            </Button>

            { ifContent }
        </>
    )
}