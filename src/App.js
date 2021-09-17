import Header from "./pages/header/Header";
import Navbar from "./pages/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/Home";
import Footer from "./pages/footer/Footer";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/contact'} exact component={Contacts}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
