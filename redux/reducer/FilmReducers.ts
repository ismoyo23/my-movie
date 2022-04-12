import {Action, ActionType} from '@redux/type/film';

export interface Film {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface State {
  film: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  film: [],
  loading: false,
  error: null,
};

const filmReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'FILM_SUCCESS':
      return {
        loading: false,
        film: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default filmReducer;
