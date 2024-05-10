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
        <label>
          <button type="button" id="get" value='GET' onClick={handleClick}>GET</button>
          <button type="button" id="post" value='POST' onClick={handleClick}>POST</button>
          <button type="button" id="put" value='PUT' onClick={handleClick}>PUT</button>
          <button type="button" id="delete" value='DELETE' onClick={handleClick}>DELETE</button>
        </label>
      </form>
    </>
  );
}

export default Form;
