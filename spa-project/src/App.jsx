import React from "react"
import {Routes, Route} from "react-router-dom"
import Beranda from "./pages/Beranda"
import Kontak from "./pages/Kontak"
import NotFound from "./pages/NotFound"
import Portofolio from "./pages/Portofolio"

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}