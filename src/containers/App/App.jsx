import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import HomePage from '../HomePage/HomePage';
import Gallery from '../../components/Gallery/Gallery';
import Page from '../../components/Page/Page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<Page />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
