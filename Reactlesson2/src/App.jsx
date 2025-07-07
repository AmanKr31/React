//import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Nav from "./Nav"
import Home from "./components/Home"
import DataBinding from "./components/DataBinding"
import UseState from "./components/UseState"
import Props from "./components/Props"
import ControlledComponent from "./components/ControlledComponent"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-binding" element={<DataBinding />} />
            <Route path="/state" element={<UseState />} />
            <Route path="/props" element={<Props />} />
            <Route path="/controlled-component" element={<ControlledComponent />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
