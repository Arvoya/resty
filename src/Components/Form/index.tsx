import React, { useState } from 'react';
import './Form.scss';

type FormData = {
  method: string | undefined;
  url: string | undefined;
}

interface FormProps {
  handleApiCall: (arg0: FormData) => void,
}

function Form(props: FormProps): React.ReactElement {
  const [url, setUrl] = useState<string>();
  const [method, setMethod] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setUrl(url);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const method = event.currentTarget.innerText;
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
          <input name='url' onChange={handleChange} type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={handleClick}>GET</span>
          <span id="post" onClick={handleClick}>POST</span>
          <span id="put" onClick={handleClick}>PUT</span>
          <span id="delete" onClick={handleClick}>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
