import { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <h1>{data.title}</h1>;
};

const Day13 = () => {
  return (
    <div className='wrapper'>
      <h4 className='days'>Day 13</h4>
      <h2>Fetching data using API and Tesing</h2>
      <FetchData />
    </div>
  );
};

export default Day13;
