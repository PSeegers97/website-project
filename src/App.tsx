import React from 'react';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link, BrowserRouter
} from "react-router-dom";
import CallOnMouseChanges from "./components/InteractivePosters/components/variableInteractive/CallOnMouseChanges/CallOnMouseChanges";
import Tsp from "./components/AnimatedPosters/VariableAnimated/Tsp/Tsp";
import BlaBlaBlaKat from "./components/AnimatedPosters/VariableAnimated/BlaBlaBlaKat/BlaBlaBlaKat";
import SwimCity from "./components/AnimatedPosters/VariableAnimated/SwimCity/SwimCity";

import BlackInDarkInStaticVF from "./components/static-posters/variable-fonts/BlackInDarkInVF/BlackInDarkInStaticVF";
import BlackInDarkInStaticSF from "./components/static-posters/static-fonts/BlackInDarkInStaticFonts/BlackInDarkInStaticSF";
import BlackInDarkInVariableAnimated
    from "./components/AnimatedPosters/VariableAnimated/BlackInDarkIn/BlackInDarkInVariableAnimated";
import PageTurnOver from "./components/InteractivePosters/components/PageTurnOver";


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
                        <Route path='blackInDarkIn' element={<BlackInDarkInVariableAnimated/>}></Route>
                        <Route path="typographicsummerproject" element={<Tsp/>} ></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKat/>}></Route>
                    </Route>

                    <Route path="variable">
                        <Route path="typographicsummerproject" element={<Tsp/>} ></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKat/>}></Route>
                        <Route path='blackInDarkIn' element={<BlackInDarkInVariableAnimated/>}></Route>
                    </Route>

                    <Route path="staticAnimated">
                        <Route path="typographicsummerproject" element={<Tsp/>}></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKat/>}></Route>
                        <Route path='blackInDarkIn' element={<BlackInDarkInVariableAnimated/>}></Route>
                    </Route>

                    <Route path="variableAnimated">
                        <Route path="typographicsummerproject" element={<Tsp/>} ></Route>
                        <Route path='blablablakat' element={<BlaBlaBlaKat/>}></Route>
                        <Route path='blackInDarkIn' element={<BlackInDarkInVariableAnimated/>}></Route>
                        <Route path='swimcity' element={<SwimCity/>}></Route>
                    </Route>

                    <Route path="staticInteractive">
                        <Route path="typographicsummerproject" element={<PageTurnOver/>}></Route>
                    </Route>

                    <Route path="variableInteractive">
                        <Route path="blackInDarkIn" element={<CallOnMouseChanges/>}></Route>
                        <Route path="typographicsummerproject" element={<PageTurnOver/>}></Route>
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
