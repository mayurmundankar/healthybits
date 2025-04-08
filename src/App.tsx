import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopStrip from './components/TopStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ShopMain from './components/ShopMain';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <TopStrip />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <Benefits />
                <FAQ />
              </>
            } />
            <Route path="/shop/:productId" element={<Shop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/shop" element={<ShopMain />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;