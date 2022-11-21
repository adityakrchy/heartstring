import React from 'react';
import Image from "next/image";
import img4 from "../images/img.webp";

function FriendRequestComponent({name, description}) {
    return (
        <div>
            <Image src={img4} alt="profile picture" className="rounded-full h-32 w-32 mx-auto mt-10"/>
            <div className="flex w-full justify-center items-center mt-5 text-2xl font-bold">
                {name}
            </div>
            <div className="flex w-full justify-center items-center my-2 text-md font-base italic">
                {description}
            </div>
            <div className="flex w-full justify-center items-center mt-6">
                <button className="mr-6 bg-blue-600 text-white font-medium py-1.5 px-4 rounded shadow-md">Add Friend
                </button>
                <button className="bg-slate-300 text-slate-800 font-medium py-1.5 px-4 rounded shadow-md">Cancel
                </button>
            </div>
        </div>
    );
}

export default FriendRequestComponent;