import React from 'react'
import Feedtem from './FeedItem'
const FeedList = ({tweets}) => {
    return (
        <div>
           {tweets.map((tweet,index)=>(
               <Feedtem {...tweet}key={index}/>
           ))}
        </div>
    )
}

export default FeedList
