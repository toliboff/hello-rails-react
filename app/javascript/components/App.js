import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from './Greeting'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Greeting greeting='Hi there' />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App
