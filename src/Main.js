
import React, { useEffect, useState } from 'react';
import './App';
import Card from './Card';
import Search from './com/Search';


let url="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=370291302de84170a3fa1ecb9f83bfc7";

const Main = () => {
  const [Newsdata, Setdata] = useState([]);
  const [news, Setnews] = useState(url);

  useEffect(() => {
    fetch(news)
      .then(res => res.json())
      .then(data => {
        if (data && data.articles) {
          Setdata(data.articles);
        } else {
          console.error("Unexpected data format:", data);
          // Display an error message to the user
          // You could use state or a library like react-toastify for this
          alert("There was an unexpected error. Please try again later.");
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        // Display an error message to the user
        // You could use state or a library like react-toastify for this
        alert("There was an error fetching the news data. Please try again later.");
      });
  }, [news]);

  return (
    <div className='container'>
  
      {  
        Newsdata.length > 0 ? (
          Newsdata.map((res, pos) => {
            return (
              <Card info={res} key={pos} />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )
      }
    </div>
  );
};

export default Main;
