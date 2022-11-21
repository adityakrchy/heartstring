import React from "react";
import img4 from "../images/img.webp";
import Image from "next/image";
import FriendRequestComponent from "./FriendRequestComponent";


const FullDetails = ({details}) => {
    return <div>
        <FriendRequestComponent name={details.name} description={details.profileDescription}/>
        <main>
            <div>
                Email: <span>{details.email}</span>
            </div>
            <div>
                Gender: <span>{details.gender}</span>
            </div>
            <div>
                Date of Birth: <span>{details.dob}</span>
            </div>
            <div>
                Mobile: <span>{details.mobile}</span>
            </div>
            <div>
                Country: <span>{details.country}</span>
            </div>
            <div>
                State: <span>{details.state}</span>
            </div>
            <div>
                Hobbies: <span>{details.hobbies}</span>
            </div>
        </main>
    </div>
}

export default FullDetails;