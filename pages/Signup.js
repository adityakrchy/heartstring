import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import {app, db} from '../firebase/firebaseConfig'
import {useRouter} from 'next/router'
import {Firestore, getFirestore, addDoc, collection} from 'firebase/firestore'


function Signup() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [user] = useAuthState(auth);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [adderss, setAddress] = React.useState('');
    const [state, setState] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [hobies, setHobies] = React.useState('');
    const [profileDescription, setProfileDescription] = React.useState('');
    const router = useRouter();


    // get data from firestore


    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const docRef = await addDoc(collection(db, "users"), {
                name: firstName + " " + lastName,
                email: email,
                dob: dob,
                mobile: mobile,
                gender: gender,
                address: adderss,
                state: state,
                country: country,
                hobies: hobies,
                profileDescription: profileDescription,
                restrictedProfile: false

            }).then(() => {
                alert("User Created Successfully")
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.log(e);
        }
        router.push('/Login')
    }


    return (
        <>
            <Header/>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        {/* <Image className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" layout='fill' alt="Your Company" /> */}
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Heart
                            String </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">People you meet make life beautiful.

                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">


                        </div>

                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder="Email address"/>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" required
                                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} placeholder="Password"/>
                        </div>

                        <div>
                            <label htmlFor="First Name" className="sr-only">First Name</label>
                            <input id="First Name" name="First Name" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="First Name" value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }}/>
                        </div>

                        <div>
                            <label htmlFor="Last Name" className="sr-only">Last Name</label>
                            <input id="Last Name" name="Last Name" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Last Name" value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }}/>
                        </div>


                        <div>
                            <label htmlFor="Date Of Birth" className="sr-only">Date Of Birth</label>
                            <input id="Date Of Birth" name="email" type="date" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Date Of Birth" value={dob} onChange={(e) => {
                                setDob(e.target.value)
                            }}/>
                        </div>

                        <div>
                            <label htmlFor="Mobile Number" className="sr-only">Mobile Number</label>
                            <input id="Mobile Number" name="Mobile Number" type="Number" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Mobile Number" value={mobile} onChange={(e) => {
                                setMobile(e.target.value)
                            }}/>
                        </div>

                        <div>
                            <label htmlFor="Gender" className="sr-only">Gender</label>
                            <input id="Gender" name="email" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Gender" value={gender} onChange={(e) => {
                                setGender(e.target.value)
                            }}/>
                        </div>


                        <div>
                            <label htmlFor="Address" className="sr-only">Address</label>
                            <input id="Address" name="Address" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Address" value={adderss} onChange={(e) => {
                                setAddress(e.target.value)
                            }}/>
                        </div>


                        <div>
                            <label htmlFor="State" className="sr-only">State</label>
                            <input id="State" name="email" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="State" value={state} onChange={(e) => {
                                setState(e.target.value)
                            }}/>
                        </div>

                        <div>
                            <label htmlFor="Country" className="sr-only">Country</label>
                            <input id="Country" name="email" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Country" value={country} onChange={(e) => {
                                setCountry(e.target.value)
                            }}/>
                        </div>

                        <div>
                            <label htmlFor="Hobbies" className="sr-only">Hobbies</label>
                            <input id="Hobbies" name="email" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Hobbies" value={hobies} onChange={(e) => {
                                setHobies(e.target.value)
                            }}/>
                        </div>

                        <div>
                            <label htmlFor="Profile Description" className="sr-only">Profile Description</label>
                            <input id="Profile Description" name="Profile Description" type="text" required
                                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                   placeholder="Profile Description" value={profileDescription} onChange={(e) => {
                                setProfileDescription(e.target.value)
                            }}/>
                        </div>


                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember
                                    me</label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your
                                    password?</a>
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSignUp} type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <!-- Heroicon name: mini/lock-closed --> */}

                </span>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup