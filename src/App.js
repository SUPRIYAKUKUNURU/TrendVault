import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Journals from './Journals';
import Navbar from './Navbar';
import Products from './Products'
import OffersPage from './OffersPage';
import Search from './Search';

function App() {
  
  return (
    
    <>
    <Navbar />

    <Search />
    <Products />
    <OffersPage />
    <Contact />
    <Journals />
    <About />
  
    <Footer />
    
    </>
  );
}

export default App;
