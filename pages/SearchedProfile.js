import React from 'react';
import LimitedDetails from "../components/LimitedDetails";
import FullDetails from "../components/FullDetails";

const SearchedProfile = ({profile}) => {
    console.log(profile);

    const restrictedProfile = profile.restrictedProfile ?? false;

    const name = profile.name ?? "Anonymous";
    const email = profile.email ?? "";
    const dob = profile.dob ?? "";
    const gender = profile.gender ?? "";
    const mobile = profile.mobile ?? "";
    const country = profile.country ?? "";
    const state = profile.state ?? "";
    const profileDescription = profile.profileDescription ?? "";
    const hobbies = profile.hobies ?? "";


    return <div>
        {restrictedProfile ?
            <LimitedDetails details={{name, email, gender, profileDescription}}/> :
            <FullDetails details={{name, email, dob, gender, mobile,
                country, state, profileDescription, hobbies}}/>}
    </div>
}

export default SearchedProfile;