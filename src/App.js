import './App.scss';
import Header from "./pages/header/Header";
import Navbar from "./pages/navbar/Navbar";
import Slider from "./pages/slider/Slider";
import Product from "./pages/products/product/Product";
import Footer from "./pages/footer/Footer";
import Products from "./pages/products/Products";
import MainPage from "./pages/main/MainPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <MainPage/>
            <Products/>
            <Footer/>
        </div>
    );
}

export default App;
