import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from "sonner";



const App = () => {
  return (
    <div className="">
      <Header />

      <Toaster richColors position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
