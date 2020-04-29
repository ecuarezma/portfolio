import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader";

function Quotes() {
  const styles = { margin: "0 auto" };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.quotable.io/random?tags=science|technology&maxLength=100"
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
      <div style={styles}>
        <blockquote>
          <p>
            <em>"404s and heartbreaks"</em>
          </p>
        </blockquote>
      </div>
    );
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <div style={styles}>
        <blockquote>
          <p>"{quote.content}"</p>
          <footer>
            <cite>— {quote.author}</cite>
          </footer>
        </blockquote>
      </div>
    );
  }
}

export default Quotes;
