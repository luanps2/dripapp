import './App.css';
import { BrowserRouter } from 'react-router-dom';

import './pages/Home'
import Header from './componets/Header';
import Footer from './componets/Footer';
import Routes from './Routes';



function App() {
 

  return (
    <BrowserRouter>

      <Header />

      <Routes />

      <Footer />

    </BrowserRouter>
  );
}

export default App;
