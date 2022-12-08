import { combineReducers } from 'redux';
//Reducers to handle dispatch actions.

import {
  ADDED_ALBUM,
  DELETED_ALBUM,
  FETCHED_ALBUMS,
  UPDATED_ALBUM,
} from '../actions';

//Albums Reducer
export function albums(state = [], action) {
  switch (action.type) {
    case FETCHED_ALBUMS:
      return action.albums;
    case ADDED_ALBUM:
      return [action.album, ...state];
    case UPDATED_ALBUM:
      const newAlbumState = state.map((album) => {
        if (album.id === parseInt(action.album.id)) {
          album.title = action.album.title;
        }
        return album;
      });
      return newAlbumState;

    case DELETED_ALBUM:
      const newDAlbumState = state.filter(
        (album) => album.id !== parseInt(action.id)
      );
      return newDAlbumState;
    default:
      return state;
  }
}

export default combineReducers({
  albums,
});
