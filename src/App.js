import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="app-flex-container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
