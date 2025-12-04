import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ttt.css'
import Game from './ttt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)