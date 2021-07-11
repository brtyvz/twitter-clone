import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between  items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4">
            <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="foto" className="rounded-full w-11 h-11"/>
<div className="flex flex-col">
<span  className="font-bold   text-md text-black">
armut
</span>

<span className=" text-gray-dark font-light text-sm">@elma</span>

</div>
<div className="flex space-x-1">

<div className="w-1 h-1 bg-gray-900 rounded-full" />
<div className="w-1 h-1 bg-gray-900 rounded-full" />
<div className="w-1 h-1 bg-gray-900 rounded-full" />


</div>


        </div>
    )
}

export default UserBox
