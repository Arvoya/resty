import React, { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

type FormData = {
  method: string;
  url: string | undefined;
}
type Data = {
  headers: object;
  results: Array<Result>;
}
type Result = {
  name: string;
  url: string;
}


function App() {

  const [data, setData] = useState<Data | undefined>();
  const [requestParams, setRequestParams] = useState<FormData>({ method: '', url: '' });


  const callApi = async (requestParams: FormData) => {
    const url = requestParams.url;
    if (!requestParams.method) {
      alert('please click a method');
    } else {
      const method = requestParams.method.toLowerCase();
      const response = await (axios[method])(url);

      console.log(response);

      const data = {
        headers: response.headers,
        results: response.data.results
      }

      setData(data);
      setRequestParams(requestParams);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {data && <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
