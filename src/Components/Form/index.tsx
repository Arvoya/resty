import React, { useState } from 'react';
import './Form.scss';

type FormData = {
  method: string;
  url: string;
}

interface FormProps {
  handleApiCall: (arg0: FormData) => void,
}

function Form(props: FormProps): React.ReactElement {
  const [url, setUrl] = useState<string>('');
  const [method, setMethod] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setUrl(url);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    const method = event.currentTarget.value;
    setMethod(method);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="url-input" onChange={handleChange} type="text" name="url" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button id="get" value='GET' onClick={handleClick}>GET</button>
          <button id="post" onClick={handleClick}>POST</button>
          <button id="put" onClick={handleClick}>PUT</button>
          <button id="delete" onClick={handleClick}>DELETE</button>
        </label>
      </form>
    </>
  );
}

export default Form;
