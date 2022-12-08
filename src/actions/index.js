//actionTypes
export const FETCHED_ALBUMS = 'FETCHED_ALBUMS';
export const ADDED_ALBUM = 'ADDED_ALBUM';
export const UPDATED_ALBUM = 'UPDATED_ALBUM';
export const DELETED_ALBUM = 'DELETED_ALBUM';

//actions

//Action To Fetch Albums
export function fetchAlbums() {
  return (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, typeof data);
        dispatch(fetchedAlbums(data.reverse())); //Storing albums in reverse.
        //Use data.slice(0, 25) to limit albums
      });
  };
}

//Action to store fetched albums to store
export function fetchedAlbums(albums) {
  return {
    type: FETCHED_ALBUMS,
    albums,
  };
}

//Action to add albums to API and store
export function addAlbum(title, id) {
  return (dispatch) => {
    const albumObject = {
      userId: Date.now(),
      id,
      title,
    };
    const url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(albumObject),
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatch(addedAlbum(data));    //Since API does not support posting album
        dispatch(addedAlbum(albumObject));
      });
  };
}

//Action to add album to store
export function addedAlbum(album) {
  return {
    type: ADDED_ALBUM,
    album: album,
  };
}

//Action to update album in store and API
export function updateAlbum(newTitle, id, userId) {
  return (dispatch) => {
    const albumObject = {
      userId,
      id,
      title: newTitle,
    };
    const url = 'https://jsonplaceholder.typicode.com/albums/1';
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(albumObject),
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatch(updatedAlbum(data));    //Since API does not support putting album
        dispatch(updatedAlbum(albumObject));
      });
  };
}

//Action to store updated album to store
export function updatedAlbum(album) {
  return {
    type: UPDATED_ALBUM,
    album,
  };
}

//Action to delete album in API and store based on ID
export function deleteAlbum(id) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/albums/1', {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // dispatch(deletedAlbum(data));    //Since API does not support deleting album
        dispatch(deletedAlbum(id));
      });
  };
}

//Action to delete album in store
export function deletedAlbum(id) {
  return {
    type: DELETED_ALBUM,
    id,
  };
}
