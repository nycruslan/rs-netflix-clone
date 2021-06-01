import { makeStyles } from '@material-ui/core/styles';
import { Dialog, Container } from '@material-ui/core/';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import StarRateIcon from '@material-ui/icons/StarRate';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Trailer from './Trailer';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundColor: '#151515',
    color: '#ffffff',
    fontSize: '1.6vw',
    marginTop: '-5%',
    zIndex: 200,
  },

  infoBox: {
    display: 'flex',
    height: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '35%',
  },
});

const MovieDetails = ({ modal, selectedMovie, hideModal, setMuted }) => {
  const year = selectedMovie?.release_date?.slice(0, 4);
  const classes = useStyles();

  const onclose = () => {
    hideModal();
    setMuted();
  };

  if (!selectedMovie?.id) return null;

  const info = () => {
    return (
      <div className={classes.infoBox}>
        <h5 style={{ color: '#45d369' }}>{year === '2021' ? 'NEW' : ''}</h5>
        <h5>{year}</h5>
        <SurroundSoundIcon style={{ fontSize: '1.8vw' }} />
        <h5>
          <StarRateIcon style={{ fontSize: '1.8vw' }} />{' '}
          {selectedMovie.vote_average}
        </h5>
      </div>
    );
  };

  return (
    <Dialog className={classes.root} fullWidth open={modal} onClose={onclose}>
      <Trailer movie={selectedMovie} font={1.7} playing={true} />

      <Container maxWidth='lg' className={classes.container}>
        {info()}
        <h5>{selectedMovie.overview}</h5>
      </Container>
    </Dialog>
  );
};

const mapStateToProps = ({ modal, selectedMovie }) => {
  return { modal, selectedMovie };
};

export default connect(mapStateToProps, actions)(MovieDetails);
