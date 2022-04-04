import React from 'react';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link, BrowserRouter
} from "react-router-dom";
import CallOnMouseChanges from "./components/CallOnMouseChanges/CallOnMouseChanges";
import Tsp from "./components/Tsp/Tsp";
import ReactDOM from "react-dom";
import BlaBlaBlaKat from "./components/BlaBlaBlaKat/BlaBlaBlaKat";
import SwimCity from "./components/SwimCity/SwimCity";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <div>
                <nav>
                    <ul className='navBar'>
                        <li className='menu-point'>
                            <Link to="/">Black In Dark In</Link>
                        </li>
                        <li className='menu-point'>
                            <Link to="/typographicsummerproject">Typographic Summer Project</Link>
                        </li>
                        <li className='menu-point'>
                            <Link to='/blablablakat'>Bla Bla Bla Kat</Link>
                        </li>
                        <li className='menu-point'>
                            <Link to='/stadtlueckenausstellung'>Stadtlückenausstellung</Link>
                        </li>
                        <li className='menu-point'>
                            <Link to='/swimcity'>Swim City Slam</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<CallOnMouseChanges/>}></Route>
                    <Route path="/typographicsummerproject" element={<Tsp/>} ></Route>
                    <Route path='/blablablakat' element={<BlaBlaBlaKat/>}></Route>
                    <Route path='/stadtlueckenausstellung'></Route>
                    <Route path='/swimcity' element={<SwimCity/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>

    </div>

  );
}

/*ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);*/

export default App;
