import React, { useEffect, useState } from "react";
import Divider from '../Components/Divider'
import TweetBox from '../Components/TweetBox'
import FeedList from '../Components/FeedList'
import db from "../firebase";
import { PopulerIcon } from "../icons/Icon";

const Content = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
      db.collection("feed")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setTweets(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        
       
      </div>
      
     {/*  bu div text alaninin  divi */}
      <div className="flex px-4 py-3 space-x-4 ">
      <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="foto" className="rounded-full w-11 h-11"/>

<TweetBox/>
</div>
<Divider/>


     
    <FeedList tweets={tweets}/>
    </main>
  );
};

export default Content;