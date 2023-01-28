import React from "react"
import {Routes, Route} from "react-router-dom"
import Beranda from "./pages/Portofolio"

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/portofolio" element={<h1>Portofolio</h1>} />
      <Route path="/kontak" element={<h1>Kontak</h1>} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  )
}