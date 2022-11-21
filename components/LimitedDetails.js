import React from "react";
import img4 from "../images/img.webp";
import Image from "next/image";
import FriendRequestComponent from "./FriendRequestComponent";

const LimitedDetails = ({details}) => {
    return <div>
        <div>
            <FriendRequestComponent name={details.name} description={details.profileDescription}/>
        </div>
        <div>
            Email: <span>{details.email}</span>
        </div>
        <div>
            Gender: <span>{details.gender}</span>
        </div>
        <div>
            This account is locked
        </div>
    </div>
}

export default LimitedDetails;