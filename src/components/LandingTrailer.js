import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Trailer from './Trailer';

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

const LandingTrailer = ({ newReleases, modal }) => {
  const randomNum = useMemo(() => randomInt(0, 19), []);

  const randomMovie = newReleases[randomNum];
  if (newReleases.length === 0) return null;

  return <Trailer movie={randomMovie} font={2.4} playing={!modal} />;
};

const mapStateToProps = ({ newReleases, modal }) => {
  return { newReleases, modal };
};

export default connect(mapStateToProps)(LandingTrailer);
