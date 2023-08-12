import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'happiness';
    axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': 'YOUR_API_KEY' },
    })
    .then(response => {
      setQuote(response.data[0].quote);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Quote of the Day</h2>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteComponent;