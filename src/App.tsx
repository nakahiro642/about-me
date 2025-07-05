import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import News from './components/pages/news';
import Interests from './components/pages/Interests';
import Contact from './components/pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
