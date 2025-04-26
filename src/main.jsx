import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import ReactDOM from 'react-dom/client'

// const root = document.getElementById('root');
//
// ReactDOM.createRoot(root).render(<App />)
