import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LandingTrailer from './LandingTrailer';
import MovieDetails from './MovieDetails';
import Movies from './Movies';

const App = () => {
  return (
    <div style={{ backgroundColor: '#151515' }}>
      <Header />
      <LandingTrailer />
      <Movies />
      <Footer />
      <MovieDetails />
    </div>
  );
};

export default App;
