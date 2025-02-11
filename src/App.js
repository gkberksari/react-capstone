import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* Diğer rotalar */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;