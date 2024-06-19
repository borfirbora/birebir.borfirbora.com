import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Crypto from "./Crypto"
import OturumTamamla from "./OturumTamamla"
import Hakkimda from "./Hakkimda"
import Egitimler from "./Egitimler"
import Anasayfa from "./Anasayfa"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Anasayfa />} />
        <Route path='/hakkimda' element={<Hakkimda />} />
        <Route path='/egitimler' element={<Egitimler />} />
        <Route path='/oturum-tamamla' element={<OturumTamamla />} />
      </Route>

      <Route path='*' element={<p role='alert'>Böyle bir sayfa bulunamadı...</p>} />
    </Routes>
  </BrowserRouter>
)
