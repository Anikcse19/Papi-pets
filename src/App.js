import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/index";
import Login from "./pages/login";
import SingleOrder from "./pages/orders/[id]";
import PlaceOrder from "./pages/orders/[id]/orderPlace/orderPlace";
import "bootstrap/dist/css/bootstrap.css";
import "./components/css/form.css";
import "./components/css/aprycot.css";
import "./components/css/aprycot.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./components/css/sidebar.css";
import "./components/css/core/libs.min.css";
import "./components/css/icon_fonts/css/all_icons.css";
import "./components/css/icon_fonts/css/all_icons.min.css";
import "./components/css/icon_fonts/css/fontello-codes.css";
import "./components/css/icon_fonts/css/icon_set_1.css";
import "./components/css/icon_fonts/css/icon_set_2.css";
import "./components/css/icon_fonts/css/icon_set_3.css";
import "./components/css/icon_fonts/css/icon_set_4.css";

import "./components/css/order.css";
import "./components/css/placeOrder.css";
import "./components/css/style.css";
import "./components/css/style-2.css";
import DescriptionForm from "./pages/descriptionForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/*" element={<Login />} />

          <Route exact path="/orders/:id" element={<SingleOrder />} />
          <Route exact path="/orders/:id/orderPlace" element={<PlaceOrder />} />
          <Route exact path="/descriptionForm" element={<DescriptionForm/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
