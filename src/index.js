import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Error from './Page/Error'
import RentalSheet from './Page/RentalSheet'
import Header from './Composants/Header'
import Footer from './Composants/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/rentalSheet/:id' element={<RentalSheet />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

