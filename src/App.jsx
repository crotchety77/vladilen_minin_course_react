import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Button from "./components/Button/Button.jsx";
import {differences} from "./data.js";





function App() {
  const [count, setCount] = useState(0)
    let [ content, setContent ] = useState('Нажми на кнопку')
    // первой значение - по умолчению - 'NAME'
    // второй элемент - функция для изменения значения)


  // Стэйт всегда на верхнем уровне (на левом, главном)
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
      <div>

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
          <p>{differences[content]}</p>

        <Header></Header>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

        <main>
            <h1>Hello React!!!</h1>
        </main>

    </>
  )
}

export default App

// Библиотека для веба и интерфейсов пользовательских
// native = react native for phones
// Библиотека = Компоненты из js. Строительные блоки.
// Императивный подход был - последовательное выполнение команд
// Декларативный подхдо const [active, setActive] реактивный. состояния.
/*

create-react-app -> компилирует -> в браузер
vite - сборщик проектов - шаблоны для react -


react компоненты




 */