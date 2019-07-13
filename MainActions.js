import { FETCH_MOVIES } from './types';

export const fetchMovies = () => {
  const data = fetch('https://akrp-server.herokuapp.com/movies?p=1')
  return {
    type: FETCH_MOVIES,
    payload: data
  };
};
