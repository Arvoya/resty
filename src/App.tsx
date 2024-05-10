import React, { useReducer, useEffect } from 'react';
import apiReducer, { initialState, addParams, addData, addHistory } from './lib/reducer.ts';


import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';
import axios from 'axios';

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


function App() {

  const [state, dispatch] = useReducer(apiReducer, initialState);



  const updateApi = (requestParams: FormData) => {
    if (requestParams.method === undefined) {
      alert('please click a method');
    } else {
      dispatch(addParams(requestParams));
      dispatch(addHistory(requestParams));
    }
  }

  const callAPI = async (requestParams: ApiInfo) => {
    if (requestParams.method === undefined) {
      return;
    } else {
      const method = requestParams.method.toLowerCase();

      const url = requestParams.url
      const response = await axios({
        method: method,
        url: url,
      })
      const responseData = {
        headers: response.headers,
        results: response.data.results
      }
      dispatch(addData(responseData));
    }
  }

  const handleHistoryClick = (clickedData: ApiInfo) => {
    dispatch(addParams(clickedData));
  }


  useEffect(() => {
    if (state.requestParams.url == '') {
      return;
    }
    else {
      callAPI(state.requestParams);

    }

  }, [state.requestParams])
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={updateApi} />
      <History handleClick={handleHistoryClick} historyData={state.history} />
      {state.data && <Results data={state.data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
