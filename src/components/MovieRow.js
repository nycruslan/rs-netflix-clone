import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const useStyles = makeStyles({
  title: {
    position: 'relative',
    fontSize: '1.8vw',
    color: '#ffffff',
    marginLeft: '3%',
    marginBottom: '1%',
    zIndex: 10,
  },

  postersContainer: {
    display: 'flex',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    marginBottom: '7%',
  },

  moviePoster: {
    maxWidth: '14%',
    height: 'auto',
    alignSelf: 'flex-start',
    marginRight: '0.4rem',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'filter 0.3s',
    '&:first-child': {
      marginLeft: '3%',
    },
    '&:hover': {
      filter: 'brightness(63%)',
    },
    zIndex: 200,
  },
});

const MovieRow = ({ movies, title, selectMovie, showModal, setMuted }) => {
  const classes = useStyles();

  const onClick = movie => {
    selectMovie(movie);
    setMuted();
    showModal();
  };

  const renderList = () =>
    movies.map(movie => {
      return (
        <img
          key={movie.id}
          onClick={() => onClick(movie)}
          className={classes.moviePoster}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
      );
    });

  return (
    <React.Fragment>
      <Typography className={classes.title} variant='h5'>
        {title}
      </Typography>
      <div className={classes.postersContainer}>{renderList()}</div>
    </React.Fragment>
  );
};

export default connect(null, actions)(MovieRow);
