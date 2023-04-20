import React from 'react'
import "./App.css"

const Card = (news) => {
    console.log(news.info.author)
   
  return (
  <>
<div className='card'>
    { <>
        <img src={news.info.urlToImage} alt="" srcset="" className='poster'/>
    <div className="news-details">


        <h1 className='title'>{news.info.title}</h1>
        <h3 className='author' ><span className='aut'>Author:</span>{news.info.author}</h3>
        <p className='desp'>{news.info.description}</p>
      <a href={news.info.url} className="href">Read More</a>
       
        </div>
        </>
         }
</div>
  </>
  )
}

export default Card