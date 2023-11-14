// pages/example.js
"use client"

import React, { useState, useEffect } from 'react';
import fetchData  from './useFetch';

const ExamplePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Object>({});

  type returnTypeInterface = {
    message: string
  }

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndHandleErrors();
  }, []);

  return (
    <div>
      <h1>Example Page</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: { (error as any).message }</p>}
      {data && <RenderData data={data} />}
    </div>
  );
};

type RenderDataProps = {
  data: object;
}

const RenderData:  React.FC<RenderDataProps> =  ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ExamplePage;
