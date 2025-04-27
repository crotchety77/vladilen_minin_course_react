import logo from '../assets/react.svg'
import { data } from '../data.js'
import CreateLi from "./CreateLi.jsx";
import {useState} from "react";

export default function Header() {

    const [now, setNow] = useState(new Date().getTime());

    setInterval(() => setNow(new Date().getTime()), 1000);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setNow(new Date().getTime());
    //     }, 1000); // обновление каждую секунду
    //
    //     // Очистка интервала при размонтировании компонента
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <section>
            <header className="App-header">
                <img src={logo} alt="" className=""/>
                {/*<h3> Hello <span> {now.toLocaleDateString()} </span></h3>*/}
                <p>Текущее время: {new Date(now).toLocaleTimeString()}</p>
            </header>

            <ul className="123">
            <CreateLi title={data[0].title} description={data[0].description}/>
                <CreateLi {...data[1]}/>
                <CreateLi {...data[2]}/>
                <CreateLi {...data[3]}/>
            </ul>


        </section>

    )
}