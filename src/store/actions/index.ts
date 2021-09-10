import { GET_COUTRIES, SET_SEARCH, FILL_MODAL, LOADING } from "./types";
import { api } from "../../api";

export const setSearch = (search: string) => (dispatch: any) =>
  dispatch({ type: SET_SEARCH, payload: search });

export const searchAction = (search: string) => (dispatch: any) => {
  dispatch({ type: LOADING, payload: true });
  api.get(`rest/v2/name/${search}`).then((res) => {
    dispatch({ type: GET_COUTRIES, payload: res.data });
    dispatch({ type: LOADING, payload: false });
  });
};
