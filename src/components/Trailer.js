import { withStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactPlayer from 'react-player';

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '56.25%',
    marginTop: '-7%',
  },

  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  fade: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent 65%, #151515 86%)',
  },

  volumeBtn: {
    position: 'absolute',
    background: 'transparent',
    border: '1px solid white',
    color: '#ffffff',
    top: '50%',
    right: '5%',
    zIndex: 200,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
  },

  movieTitle: {
    position: 'absolute',
    maxWidth: '30%',
    top: '30%',
    left: '3%',
    color: '#ffffff',
    display: 'block',
    fontFamily: `'Limelight', cursive`,
    lineHeight: '1.3',
  },
};

class Trailer extends React.Component {
  componentDidMount() {
    this.props.fetchTrailer(this.props.movie.id);
  }

  player() {
    const { classes } = this.props;
    const fontSize = {
      fontSize: this.props.font + 'vw',
    };
    const trailer = this.props.trailers.find(
      trailer => trailer.id === this.props.movie.id
    );

    if (!trailer?.results) return null;

    return (
      <React.Fragment>
        <ReactPlayer
          className={classes.player}
          width={'100%'}
          height={'100%'}
          url={`https://www.youtube.com/watch?v=${trailer.results[0]?.key}`}
          playing={this.props.playing}
          volume={0.3}
          muted={this.props.muted}
          loop
        />

        <h5 className={classes.movieTitle} style={fontSize}>
          {this.props.movie.title || this.props.movie.name}
        </h5>

        <Fab
          className={classes.volumeBtn}
          size='small'
          onClick={() =>
            this.props.muted ? this.props.unsetMuted() : this.props.setMuted()
          }
        >
          {this.props.muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </Fab>
        <div className={classes.fade}></div>
      </React.Fragment>
    );
  }

  render() {
    const { classes } = this.props;

    return <div className={classes.container}>{this.player()}</div>;
  }
}

const mapStateToProps = ({ trailers, muted }) => {
  return { trailers, muted };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Trailer));
