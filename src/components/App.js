import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions';
import { AlbumList } from './';
import { Header } from './';

class App extends React.Component {
  //Using componentDidMount to fetch albums from API
  componentDidMount() {
    this.props.dispatch(fetchAlbums());
  }
  render() {
    const { albums } = this.props;
    return (
      <div className="App">
        <Header />
        {/* Rendering AlbumList */}
        <AlbumList albums={albums} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
  };
}

export default connect(mapStateToProps)(App);
