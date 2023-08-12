import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'happiness';
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': '9OLr55xbmxMTbla+M78UXw==Igl1Na18ndLHCJv2' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
      Error:
      {error.message}
    </div>
    );
  }

  return (
    <div>
      <h2>Quote of the Day</h2>
      <p>{quote}</p>
    </div>
  );
};

export default QuoteComponent;
