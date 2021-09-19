import Header from "./pages/header/Header";
import Navbar from "./pages/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/Home";
import Footer from "./pages/footer/Footer";
import React from "react";
import LinksForDownload from "./pages/linksForDownload/LinksForDownload";
import Service from "./pages/Service/Service";
import Series from "./pages/series/Series";
import ProductsGlobal from "./pages/productsGlobal/ProductsGlobal";

function App() {
    return (
        <div >
            <Header/>
            <Navbar/>
            <Switch>
                <Route path={'/radaway_presentation_app'} exact component={Home}/>
                <Route path={'/producty'} exact component={ProductsGlobal}/>
                <Route path={'/serie'} exact component={Series}/>
                <Route path={'/do-pobrania'} exact component={LinksForDownload}/>
                <Route path={'/servis'} exact component={Service}/>
                <Route path={'/contact'} exact component={Contacts}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
