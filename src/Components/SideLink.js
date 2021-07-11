import React from 'react'

const SideLink=({name,Icon,active,onMenuItemClick})=>{
    //active icon icin aktiflik kontrolu yapan bir useSTATE

const isActive = active===name;

    return (
        <li className="group" onClick={() => onMenuItemClick(name)} >
<a href={name.toLowerCase()} className="cursor-pointer block text-xl mb-2 pointer-events-none" >
<div className="inline-block">
    <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
    
    ${isActive ? "text-primary-base":""}
    `}>

<Icon/>
<span className="ml-u font-bold">{name}</span>

</div></div>


</a>
        </li>
    )
}

export default SideLink;