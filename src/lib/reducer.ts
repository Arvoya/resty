type Action = {
  type: string;
  payload: object;
};

type FormData = {
  method: string;
  url: string;
};

type Result = {
  name: string;
  url: string;
};
type Data = {
  headers: object;
  results: Array<Result>;
};

type ApiInfo = {
  method: string;
  url: string;
};

type ApiState = {
  data: object;
  requestParams: object;
  history: Array<ApiInfo>;
};

// initialState
export const initialState: ApiState = {
  data: {},
  requestParams: {},
  history: [],
};

function apiReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_PARAMS":
      return {
        data: state.data,
        requestParams: action.payload,
        history: state.history,
      };
    case "ADD_DATA":
      return {
        data: action.payload,
        requestParams: state.requestParams,
        history: state.history,
      };
    case "ADD_HISTORY":
      return {
        data: state.data,
        requestParams: state.requestParams,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
}

// actions
export const addParams = (newApi: ApiInfo): Action => {
  return {
    type: "ADD_PARAMS",
    payload: newApi,
  };
};
// actions
export const addData = (newData: Data): Action => {
  return {
    type: "ADD_DATA",
    payload: newData,
  };
};
// actions
export const addHistory = (newHistory: FormData): Action => {
  return {
    type: "ADD_HISTORY",
    payload: newHistory,
  };
};

export default apiReducer;
