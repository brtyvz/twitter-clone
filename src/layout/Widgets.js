import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { SearchIcon } from '../icons/Icon'
const Widgets=()=> {
    return (
        <div className="bg-white  w-80">
           <div  className="flex items-center focus-within:ring-1  focus-within:ring-blue-500  focus-within:bg-white space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-500">
              {/*  search kismi divi */}
               <SearchIcon className="w-5 h-5" />
           <input type="text" placeholder="twitter arama" className="placeholder-gray-600 bg-transparent  w-full focus:outline-none"/>
           </div>
           <div className="mt-5"> 
           <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    height: '1000'
  }}
/>
               </div>
        </div>
    )
}

export default Widgets
