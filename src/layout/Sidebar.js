import React from 'react'
import {useState} from 'react'
import twitterLogo from '../images/twitter.svg'
import SideLink from '../Components/SideLink'
import UserBox from '../Components/UserBox'
 import {
    BookmarksIcon,
    ExploreIcon,
    HomeIcon,
    ListsIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon,
  } from "../icons/Icon"; 
  const sideLinks = [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "Explore",
      icon: ExploreIcon,
    },
    {
      name: "Notifications",
      icon: NotificationsIcon,
    },
    {
      name: "Messages",
      icon: MessagesIcon,
    },
    {
      name: "Bookmarks",
      icon: BookmarksIcon,
    },
    {
      name: "Lists",
      icon: ListsIcon,
    },
    {
      name: "Profile",
      icon: ProfileIcon,
    },
    {
      name: "More",
      icon: MoreIcon,
    },
  ];
 const Sidebar = () => {
    const[active,setActive]=useState("home")
    const handleMenuItemClick = (name) => {
        setActive(name);
      };
    return (
        <div className=" mt-1 mb-4 w-72 flex flex-col justify-between">
           <div>
               <div className="flex items-center w-12 h-12 rounded-full hover:bg-gray-300">
               <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9"></img>
               </div>
              
          
    <nav className="mb-4">
<ul>
{sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
</ul>


    </nav>
<button className="bg-primary-base text-white rounded-full py-3 px-8 w-10/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200">tweet</button>

          
          
           </div>
         <UserBox/>
        </div>
    )
}
export default Sidebar




/* 
<BookmarksIcon/>
           <ExploreIcon/>
           <HomeIcon/>
           <ListsIcon/>
           <MessagesIcon/>
           <MoreIcon/>
           <NotificationsIcon/>
           <ProfileIcon/> */