import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Img1 from "../images/Img1.webp"

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home | Heart String</title>
      <meta name="description" content="Heart String" />
    </Head>
      
    <Header />
  <div className="flex justify-center ">
    <div className="flex flex-col justify-center">

      <div className="flex flex-col max-w-7xl justify-center items-center p-2 mt-10">
        <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
          <div className="text-5xl font-bold ">
            People you meet make life beautiful
          </div>
          <div className="text-xl font-semibold text-gray-400 ">
            Simple and Quick way to find match!
          </div>
          <div className="md:text-lg">
            <input
              className="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-2xl placeholder-slate-400 px-4 py-1 focus:outline-none "
              type="email" placeholder="E-mail Address" />
            <button
              className="p-1 m-2 rounded-2xl text-white bg-blue-500 px-4 font-semibold  hover:bg-blue-900 hover:trandform ease-in-out duration-300">
              Get Started </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img src="https://cdn.dribbble.com/users/508588/screenshots/14775911/media/4931db823779809fb36f455a49248e75.jpg?compress=1&resize=1000x750&vertical=top" className="h-full w-full"
            alt="" />
        </div>
      </div>

    </div>
  </div>

  {/* <!-- features --> */ }
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">How it works
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-bold text-gray-500s">Enjoy the benefits of dating established partner. Because you deserve a relationship for yourself too.</p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image src={Img1} width={130} height={130} alt="" />
          </div>
          <div className="flex-grow font-bold">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Dating with benefits</h2>
            <p className="leading-relaxed text-base">Redefine the exceptations of a perfect relationship
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          {/* <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"> */}
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image src={Img1} width={130} height={130} alt="" />
          </div>
          {/* </div> */}
          <div className="flex-grow font-bold">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-3 ">Ideal relationships</h2>
            <p className="leading-relaxed text-base">upfront and honest arrangements with someone
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          {/* <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"> */}
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image width={130} height={10} src={Img1} alt="" />
          </div>
          {/* </div> */}
          <div className="flex-grow font-bold">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-3">We are connecting</h2>
            <p className="leading-relaxed text-base">Connecting people with similar interests
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <button
        className="flex mx-auto mt-16 text-white rounded-2xl bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Click to Start</button>
    </div>
  </section>
  {/* <!-- features end --> */ }
  {/* <!-- teams  --> */ }
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">It is the most female-friendly and empowering site I’ve tried. It puts the first “move” in the hands of the woman. I appreciated that so much! No more harassing or inappropriate msgs from guys I wasn’t interested in. When your subscription runs out, you can still see any “connections” you previously made on the site.</p>
            <a className="inline-flex items-center">
              <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">Ayush</span>
              </span>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/2 w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6">This is just as easy to use as other apps. You have to be able to upload a photo, write a short bio, and have the time to go looking, answer questions, and actually set up dates. I found my husband on here.</p>
            <a className="inline-flex items-center">
              <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">Pooja</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- teams end -->
    <!-- contact us --> */}
  <section className="text-gray-600 body-font font-bold relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you have any concern or query, feel free to contact us.</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-indigo-500">example@email.com</a>
            <p className="leading-normal my-5">
            </p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- contact us ends -->
    <!-- footer --> */}
  <footer className="text-center font-bold text-white" style={{ backgroundColor: "#0a4275" }}>
    <div className="container p-6">
      <div className="">
        <p className="flex justify-center items-center">
          <span className="mr-4">Register for free</span>
          <button type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            Sign up!
          </button>
        </p>
      </div>
    </div>

    <div className="text-center p-4" style={{ backgroundClip: "rgba(0, 0, 0, 0.2)" }}>
      © 2022 Copyright:
      <a className="text-white" href="https://tailwind-elements.com/">Heart String</a>
    </div>



  </footer>
  {/* <!-- footer ends --/> */ }
    </>
  )
}

export default Home
