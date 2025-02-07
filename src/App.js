import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Specials from './components/Specials';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <Specials />
      </main>
      <Footer />
    </>
  );
}

export default App;