// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import ErrorPage from './Components/ErrorPage';
// import reportWebVitals from './reportWebVitals';
// import Contact from './Components/Contact';

// class RouterComponent extends React.Component {
//   render() {
//     return (
//       <Router>
//         <App>
//           <div>
//             <Route exact path="/contact" component={Contact} />
//             <Route path="*" component={ErrorPage} />
//           </div>
//         </App>
//       </Router>
//     );
//   }
// }

// ReactDOM.render(<RouterComponent />, document.getElementById('root'));
// reportWebVitals();

import React from "react";

import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();

