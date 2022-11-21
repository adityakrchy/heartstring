import React, {useEffect, useState} from 'react'
import img4 from '../images/img.webp'
import Image from 'next/image';
import {app, db} from '../firebase/firebaseConfig';
import Link from 'next/link';
import {collection, getDocs, getFirestore, query, where, setDoc, doc} from "firebase/firestore";

const Profile = () => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // const userData = JSON.parse(localStorage.getItem('userData'));

    // const localUser = JSON.parse(localStorage.getItem('userData')) || {};

    // const [userData, setUserData] = React.useState(localUser);

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [docId, setDocId] = useState('');


    useEffect(() => {
        const value = localStorage.getItem('user');
        const user = !!value ? JSON.parse(value) : undefined;
        setUser(user);
    }, []);

    useEffect(() => {
        const value = localStorage.getItem('docID');
        const docID = !!value ? JSON.parse(value) : undefined;
        setDocId(docID);
    }, []);


    // this code handles both setting the localStorage and getting from the localStorage
    useEffect(() => {
        if (userData == null) {
            // for initial rendering of the profile
            const value = localStorage.getItem('userData');
            const userData = !!value ? JSON.parse(value) : undefined;
            setUserData(userData);
        } else {
            localStorage.setItem('userData', JSON.stringify(userData));
            const updateRestrictions = async () => {
                const db = getFirestore(app);
                const userReference = doc(db, 'users', docId);
                await setDoc(userReference, userData);
            }

            updateRestrictions().then(res => console.log(res)).catch(err => console.error(err));
        }
    }, [userData]);


    if (!user || !userData || !docId) {
        return <div>
            Loading!
        </div>
    }

    const {
        name, gender, email, mobile, address, country, dob, state,
        profileDescription, hobies, restrictedProfile
    } = userData;

    // console.log(restrictedProfile);

    // const returnUpdatedUserData = () => {
    //     return {...userData, restrictedProfile: restrictedProfile};
    // }


    const handleProfileRestriction = () => {
        setUserData(prevState => {
            return {...prevState, restrictedProfile: !prevState.restrictedProfile}
        });
    }

    return (
        <>
            <header className="text-gray-600 body-font bg-backgroundColor">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl font-bold text-white">Heart String</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Search for anything..." type="text" name="search"/>
                    </nav>
                    <Link href='/Dashboard'
                          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-4 md:mt-0">Dashboard
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
            <section>
                <div className='font-bold px-5'>
                    <Image src={img4} alt="profile picture" className="rounded-full h-32 w-32 mx-auto mt-10"/>
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                        About
                    </button>
                    <div className='px-5 py-5 '>
                        <span>Name: {name} </span> <br/>
                        <span>Gender: {gender}</span> <br/>
                        <span>Mobile Number: {mobile}</span><br/>
                        <span>Address: {address}</span><br/>
                        <span>State: {state}</span><br/>
                        <span>Country: {country}</span><br/>
                        <span>Email: {email}</span><br/>
                        <span>Date of Birth: {dob}</span><br/>
                    </div>
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                        Bio
                    </button>
                    <div className='px-5 py-5'>
                        <span>Bio: {profileDescription}</span>
                    </div>
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                        Hobbies
                    </button>
                    <div className='px-5 py-5'>
                        <span>Hobbies: {hobies}</span>
                    </div>
                </div>
            </section>
            <section className="text-center">
                <button
                    onClick={handleProfileRestriction}
                    className="mx-4 my-12 bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    {restrictedProfile ? "Unlock Account" : "Lock Account"}
                </button>
            </section>
        </>
    )
}

export default Profile