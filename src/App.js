import './App.css';
import Menu from './components/Cart';
import Categories from './components/Categories';
import Header from './components/Header';
import Header1 from './components/Navbar';
import BestItem from './components/Menu';
import Footer from './components/Footer';
import ImageSection from './components/ImageSection';

function App() {
  return (
    <div className="App">
      <header >
        <Header1 />
        <Categories />
        <BestItem />

        <Header />
        <Menu />
        <ImageSection/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
