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

import BlaBlaBlaKatStatic from "./components/static-posters/static-fonts/Bla-Bla-Bla-Kat/BlaBlaBlaKatStatic";
import BlaBlaBlaKatStaticVF from "./components/static-posters/variable-fonts/Bla-Bla-Bla-Kat/BlaBlaBlaKatStaticVF";

import BlackInDarkInStaticVF from "./components/static-posters/variable-fonts/BlackInDarkInVF/BlackInDarkInStaticVF";
import BlackInDarkInStaticSF from "./components/static-posters/static-fonts/BlackInDarkInStaticFonts/BlackInDarkInStaticSF";
import TypographicSummerProgramStatic
    from "./components/static-posters/static-fonts/Typographic-summer-program/TypographicSummerProgramStatic";
import TypographicSummerProgramVF
    from "./components/static-posters/variable-fonts/Typographic-Summer-Program-VF/TypographicSummerProgramVF";
import StaticPosters from "./components/StaticPosters/StaticPosters";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <div>

                <div className={styles.navbar}>
                    <div className={styles.subnav}>

                    </div>

                </div>
                <nav>

                </nav>

                <Routes>
                    <Route path="static">
                        <Route path="blackInDarkIn" element={<BlackInDarkInStaticSF/>}></Route>
                        <Route path="typographicsummerproject" element={<TypographicSummerProgramStatic/>} ></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKatStatic/>}></Route>
                    </Route>

                    <Route path="variable">
                        <Route path="blackInDarkIn" element={<BlackInDarkInStaticVF/>}></Route>
                        <Route path="typographicsummerproject" element={<TypographicSummerProgramVF/>} ></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKatStaticVF/>}></Route>
                    </Route>

                    <Route path="staticAnimated">

                    </Route>

                    <Route path="variableAnimated">
                        <Route path="typographicsummerproject" element={<Tsp/>} ></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKat/>}></Route>
                        <Route path='swimcity' element={<SwimCity/>}></Route>
                    </Route>

                    <Route path="staticInteractive"></Route>

                    <Route path="variableInteractive">
                        <Route path="blackInDarkIn" element={<CallOnMouseChanges/>}></Route>
                    </Route>







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
