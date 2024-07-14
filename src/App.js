// import { Outlet } from "react-router-dom";
// import AOS from 'aos';
// import React, { Component } from 'react';
// import Navbar from './Components/NavbarCustom';
// import Headroom from 'react-headroom';
// import 'aos/dist/aos.css';
// import './App.css';


// class App extends Component {
//   componentDidMount() {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-sine',
//       delay: 100,
//       offset: 100,
//     });
//     AOS.refresh();
//   }
//   render() {
//     return (
//       <div className='App bg-black text-blue'>
//         <Headroom>
//           <Navbar />
//         </Headroom>
//         <Outlet />
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import Contact from './Components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import NavbarCustom from "./Components/NavbarCustom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Skills from "./Components/Skills";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }

  // router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<NavbarCustom />} />,
  //       <Route path="*" element={<ErrorPage />} />,
  //       <Route path="/contact" element={<Contact />} />
     

  //   )
  // )
  // render() {
  //   return (
  //       <div className='App bg-black text-blue'>
  //         <Outlet />
  //         <RouterProvider router={this.router} />
  //       </div>
     
  //   );
  // }
  render() {
    return (
      <div className='App bg-black text-blue'>
        <Router>
          <NavbarCustom />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;



