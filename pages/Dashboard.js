import React, {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollection} from 'react-firebase-hooks/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {app, db} from '../firebase/firebaseConfig'
import {useRouter} from 'next/router'
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import Link from 'next/link'
import SearchedProfile from "./SearchedProfile";
import UserSearchInitial from "../components/UserSearchInitial";


const Dashboard = () => {

    // create a signout function using local storage
    const provider = new GoogleAuthProvider();
    const router = useRouter();
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [user] = useAuthState(auth);
    useEffect(() => {
        console.log(user);

    }, [])

    const [searchInput, setSearchInput] = React.useState('');


    const signOut = () => {
        auth.signOut();
        localStorage.removeItem('user');
        router.push('/');
    }

    // const getData = async () => {
    //     try{
    //         const querySnapshot = await getDocs(collection(db, "users"));
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     }

    //     catch(e){
    //         console.log(e);
    //     }
    // }
    const userRef = collection(db, 'users');
    const q = query(userRef, where('name', '==', searchInput));


    const [searchUser, setSearchUser] = useState(null);

    const getUserData = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setSearchUser(doc.data());
        });
    }

    const displaySearchProfile = searchUser ? <SearchedProfile profile={searchUser}/> : <UserSearchInitial/>;

    return (
        <>
            <div>
                <header className="text-gray-600 body-font bg-backgroundColor">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                            <span className="ml-3 text-xl font-bold text-white">Heart String</span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 font-bold hover text-white">Friends</a>
                            <Link href="/Profile" className="mr-5 font-bold hover text-white">Profile </Link>
                        </nav>

                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <input
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                value={searchInput} onChange={(e) => {
                                setSearchInput(e.target.value)
                            }}
                                onKeyPress={(e) => {
                                    if (e.key == 'Enter') {
                                        getUserData()
                                    }
                                }}
                                placeholder="Search for anything..." type="search" name="search"/>

                        </nav>
                        <button onClick={signOut} href='/Dashboard'
                                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 ml-4 md:mt-0">Logout
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                 strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </header>
                <hr/>
                <div>
                    {displaySearchProfile}
                </div>
            </div>
        </>
    )
}

export default Dashboard