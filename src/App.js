import "./App.css";

import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
             <HeaderComponent />
              <div className="container">
                   <Routes>
                         <Route exact path = "/" element={<ListEmployeeComponent/>}></Route>
                         <Route path = "/employees" element={<ListEmployeeComponent/>}></Route>
                         <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                         
                         
                   </Routes>
              </div>
              <FooterComponent/>
     </Router>
    </div>
  );
}



export default App;
