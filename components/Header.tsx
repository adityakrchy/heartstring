import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">

                    <span className="ml-3 text-xl font-bold">Heart String</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 text-xl font-bold hover:text-gray-900" href="/">Home</a>
                    <a className="mr-5 text-xl font-bold hover:text-gray-900" href="/">About</a>
                    <a className="mr-5 text-xl font-bold hover:text-gray-900" href="/">Contact Us</a>
                </nav>
                <Link href="/Login" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                    Login
                </Link>
                <Link href="/Signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Sign Up
                </Link>
            </div>
        </header>
    )
}

export default Header