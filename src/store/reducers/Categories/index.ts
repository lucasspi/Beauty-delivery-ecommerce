import {
  SET_SEARCH,
  GET_COUTRIES,
  FILL_MODAL,
  LOADING,
} from "../../actions/types";
const initState = {
  countries: [],
  search: "",
  modal: null,
  loading: false,
  headers: ["flag", "name", "region", "nativeName", "area", "population"],
};

export const Categories = (state = initState, action: any) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case GET_COUTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case FILL_MODAL: {
      return {
        ...state,
        modal: action.payload,
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
