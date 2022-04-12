import {Film} from '@redux/reducer/FilmReducers';
export enum ActionType {
  FILM_PENDING = 'FILM_PENDING',
  FILM_SUCCESS = 'FILM_SUCCESS',
  FILM_FAIL = 'FILM_FAIL',
}

interface actionPending {
  type: ActionType.FILM_PENDING;
}

interface actionSuccess {
  type: ActionType.FILM_SUCCESS;
  payload: Film[];
}

interface actionFail {
  type: ActionType.FILM_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
