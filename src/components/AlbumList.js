import React from 'react';
import { connect } from 'react-redux';
import { addAlbum, deleteAlbum, updateAlbum } from '../actions';

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    //Setting State to Update Album
    this.state = {
      updating: false,
      id: null,
      userId: null,
    };
  }

  _handleKeyDown = (e) => {
    const { albums } = this.props;
    //Adding album
    if (e.key === 'Enter' && !this.state.updating) {
      this.props.dispatch(addAlbum(e.target.value, albums.length + 1));
      document.getElementById('textInput').value = '';
      return;
    }
    //Updating album
    if (e.key === 'Enter' && this.state.updating) {
      this.props.dispatch(
        updateAlbum(e.target.value, this.state.id, this.state.userId)
      );
      document.getElementById('textInput').value = '';
      this.setState({ updating: false, id: null, userId: null });
      return;
    }
  };

  //function to edit album
  handleUpdate = (e) => {
    const { albums } = this.props;
    const curAl = albums.filter(
      (album) => album.id === parseInt(e.target.value)
    );
    document.getElementById('textInput').value = curAl[0].title;
    this.setState({ updating: true, id: e.target.value });
  };

  //function to delete album
  handleDelete = (e) => {
    this.props.dispatch(deleteAlbum(e.target.value));
  };

  render() {
    const { albums } = this.props;
    console.log(Date.now());
    return (
      <>
        <div className="posts-list container my-2">
          <div className="form-floating w-50 my-3">
            {/* Input element for album */}
            <input
              className="form-control"
              onKeyDown={this._handleKeyDown}
              placeholder="Enter new album"
              id="textInput"
            />
            <label>Enter Album Title</label>
          </div>

          {/* Displying Album List */}
          {albums.map((album) => (
            <div className="card w-75 my-1" key={album.id}>
              <div className="card-body">
                <h5 className="card-title">Title :- {album.title}</h5>
                <button
                  className="btn btn-sm btn-success px-3"
                  value={album.id}
                  onClick={this.handleUpdate}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm mx-1 text-white btn-danger"
                  value={album.id}
                  onClick={this.handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums,
  };
}

export default connect(mapStateToProps)(AlbumList);
