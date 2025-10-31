import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productos from './Productos'
import Especifico from "./Especifico"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos/:id" element={<Especifico />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
