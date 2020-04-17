import React, { useState, useEffect } from "react";

function Quotes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.quotable.io/random?tags=science|technology|education&maxLength=100"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    console.log(error.message);
    return (
      <blockquote>
        <p>
          <em>"404s and heartbreaks"</em>
        </p>
      </blockquote>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <blockquote>
        <p>"{quote.content}"</p>
        <footer>
          <cite>— {quote.author}</cite>
        </footer>
      </blockquote>
    );
  }
}

export default Quotes;
