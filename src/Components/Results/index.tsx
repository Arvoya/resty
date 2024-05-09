import React from 'react';
import './Results.scss';

type Result = {
  name: string;
  url: string;
}

type Data = {
  headers: object;
  results: Array<Result>;
}

interface Dataprops {
  data: Data;
}

function Results(props: Dataprops): React.ReactElement {
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
