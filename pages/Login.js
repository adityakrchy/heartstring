import React from 'react'
import Header from '../components/Header'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import firebase from 'firebase/app'
import { Firestore, getFirestore, addDoc, collection, query, onSnapshot, where, getDocs } from 'firebase/firestore'

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [user] = useAuthState(auth);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(email, password)
    try {
      await signInWithEmailAndPassword(auth, email, password);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          router.push('/Dashboard')
          getEmailData();

        }
      }

      )


    } catch (e) {
      console.log(e);
    }
  };

  // query details of email id from firestore database

  const emailRef = collection(db, 'users');
  const q = query(emailRef, where('email', '==', email));
  const getEmailData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      localStorage.setItem('userData', JSON.stringify(doc.data()))
      localStorage.setItem('docID', JSON.stringify(doc.id));
    });
  }





  return (
    <>
      <Header />
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Heart String </h2>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"> </h2>
            <p className="mt-2 text-center text-sm text-gray-600">People you meet make life beautiful.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">


            </div>

            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
            </div>


            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
              </div>
            </div>

            <div>
              <button type="submit" onClick={handleSignin} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login