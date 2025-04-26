import logo from '../assets/react.svg'
import { data } from '../data.js'
import CreateLi from "./CreateLi.jsx";

export default function Header() {

    // const now = new Date()


    return (
        <section>
            <header className="App-header">
                <img src={logo} alt="" className=""/>
                {/*<h3> Hello <span> {now.toLocaleDateString()} </span></h3>*/}

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