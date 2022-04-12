import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType, Action} from '@redux/type/film';
import {API_URL} from '@env';

export const getFilm = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FILM_PENDING,
    });

    try {
      const {data} = await axios({
        method: 'GET',
        url: `${API_URL}3/movie/550?api_key=1d8428745aae1c31199be0fdc8b0ca46`,
      });

      dispatch({
        type: ActionType.FILM_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.FILM_FAIL,
        payload: err.message,
      });
    }
  };
};
