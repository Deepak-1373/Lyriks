export const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

export const playerReducer = (state, { type, payload }) => {
  switch (type) {
    case 'setActiveSong':
      if (payload?.data?.tracks?.hits) {
        state.currentSongs = payload.data.tracks.hits;
      } else if (payload?.data?.properties) {
        state.currentSongs = payload?.data?.tracks;
      } else {
        state.currentSongs = payload.data;
      }
      return {
        ...state,
        activeSong: payload.song,

        currentIndex: payload.i,
        isActive: true,
      };

    case 'nextSong':
      return {
        ...state,
        activeSong: state.currentSongs[payload]?.track
          ? state.currentSongs[payload]?.track
          : state.currentSongs[payload],
        currentIndex: payload,
        isActive: true,
      };

    case 'prevSong':
      return {
        ...state,
        activeSong: state.currentSongs[payload]?.track
          ? state.currentSongs[payload]?.track
          : state.currentSongs[payload],
        currentIndex: payload,
        isActive: true,
      };

    case 'playPause':
      return {
        ...state,
        isPlaying: payload,
      };

    case 'selectGenreListId':
      return {
        ...state,
        genreListId: payload,
      };

    default:
      return state;
  }
};
