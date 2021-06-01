import React from 'react';
import MovieRow from './MovieRow';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchNew();
    this.props.fetchTop();
    this.props.fetchTrending();
    this.props.fetchComedies();
    this.props.fetchActions();
    this.props.fetchThrillers();
    this.props.fetchHorrors();
    this.props.fetchRomances();
    this.props.fetchDocumentaries();
  }

  render() {
    return (
      <div style={{ marginTop: '-15%' }}>
        <MovieRow movies={this.props.newReleases} title='New Releases' />
        <MovieRow movies={this.props.top} title='Top Rated' />
        <MovieRow movies={this.props.trending} title='Trending Now' />
        <MovieRow movies={this.props.comedies} title='Comedies' />
        <MovieRow movies={this.props.actions} title='Action Movies' />
        <MovieRow movies={this.props.thrillers} title='Thriller Movies' />
        <MovieRow movies={this.props.horrors} title='Horrors' />
        <MovieRow movies={this.props.romances} title='Romantic Movies' />
        <MovieRow movies={this.props.documentaries} title='Documentaries' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newReleases: state.newReleases,
    top: state.top,
    trending: state.trending,
    comedies: state.comedies,
    actions: state.actions,
    horrors: state.horrors,
    thrillers: state.thrillers,
    romances: state.romances,
    documentaries: state.documentaries,
  };
};

export default connect(mapStateToProps, actions)(Movies);
