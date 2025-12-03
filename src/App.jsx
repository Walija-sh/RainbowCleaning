import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from './components/Footer'
import GallerySection from "./components/Gallery";

const App = () => {
  return (
    <div className="">
      {/* Navigation */}
      <Header/>
      

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
