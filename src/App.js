import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import styled from 'styled-components'
import { Helmet } from "react-helmet";

import Header from './components/Header'
import Footer from './components/Footer'

import ScrollToTop from './hooks/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Lounge from './pages/Lounge'
import Restaurant from './pages/Restaurant'
import NotFound from './pages/NotFound'
import Membership from './pages/Membership';
import Emergence from './pages/Emergence';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Sports from './pages/Sports';
import Events from './pages/events/Events';

import Sport from './pages/sports/Sport';

const Wrapper = styled.div`
  margin-top: 120px;
`

function App() {
  const darkPages = ['/', '/pool-based-party-lounge', '/gallery', '/restaurant', '/events/corporate', '/events/birthday', '/events/other']
  const location = useLocation();
  const url = window.location.href;
  const hostname = window.location.protocol + '//' + window.location.host;

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Urban Sports Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=yes" />
        <meta name="robots" content="all" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={url} />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Urban Sports Hub" />
        <meta property="og:image" content={`${hostname}/images/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ScrollToTop />
      <Header theme={ darkPages.includes(location.pathname) ? 'dark' : 'light' } />

      <Wrapper>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} exact />
            
            <Route path="/sports/:sport" element={<Sport />} />
            <Route path="/events/:event" element={<Events />} />

            <Route path="/membership" element={<Membership />} />
            <Route path="/pool-based-party-lounge" element={<Lounge />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/how-the-idea-emerged" element={<Emergence />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>

      <Footer />
    </div>
  );
}

export default App;
