import React from 'react';
import { useFetch } from './hooks/useFetch';

function CustomHook() {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.products?.map((item) => (
        <div
          key={item.id}
          className="item"
          style={{
            border: '1px solid #ccc',
            margin: '10px',
            padding: '10px',
          }}
        >
          <img src={item.thumbnail} alt={item.title} width="100" />
          <h2>
            {item.title} <span>₹{item.price}</span>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CustomHook;
