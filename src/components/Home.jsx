/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
// import Demo from "./Demo/Demo";
// import {Testimonials} from "./Testimonials"

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <section className="Home">
        <div>
          <div className="flex flex-wrap justify-center align-middle">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Create Proffesional Videos
              <br />
              in Minutes with AI Avatars
            </h1>
            <br />
            <p>
              Transform your text into engaging video content instantly, while
              saving time and cutting costs.
            </p>
          </div>
          <div className=" flex justify-center align-middle w-[395] h-[43] gap-1">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#ffffff] text-[#333333]"
            />
            <button className="bg-blue-500 rounded-sm text-white w-[131px] h-[43px]">
              Get a Demo
            </button>
          </div>
          <div className="max-w-screen-md bg-slate-500">
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className="Testimonials">
        <div className="flex justify-center align-middle">
          <p className="text-4xl font-bold sm:text-2xl">
            Trusted by Over 10,000+ Customers Worldwide.
          </p>
          {/* <Testimonials/> */}
        </div>
      </section>

      <section className="">
        <div className="">
          <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            {/* description section*/}
            <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
              <div className=" md:w-1/2 text-left md:order-2 max-w-xl sm:mt-1 mt-80 space-y-8 sm:text-left sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  Minutes, not Hours.
                </h2>
                <p>
                  No need for lengthy porcesses like
                  <br />
                  filming, editing, or storyboarding
                  <br />
                  content can be created in minutes <br />
                  by simply porviding a script.
                </p>

                <Link
                  className="inline-flex text-blue-500 items-center px-3 py-3 font-medium hover:opacity-75"
                  to="/"
                >
                  Discover More
                </Link>
              </div>
            </div>
            {/* image section*/}
            <div className="  absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
              <img
                className="w-96"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="image1"
              />
            </div>
          </aside>
        </div>

        <div className="">
          <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            {/* description section*/}
            <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
              <div className=" md:w-1/2 text-left md:order-2 max-w-xl sm:mt-1 mt-80 space-y-8 sm:text-left sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  80% cost reduction
                </h2>
                <p>
                  Eliminate the need of expensive equipment,
                  <br />
                  location rentals, and professional videographer <br />
                  reducing overall production costs.
                </p>

                <Link
                  className="inline-flex text-blue-500 items-center px-3 py-3 font-medium hover:opacity-75"
                  to="/"
                >
                  Discover More
                </Link>
              </div>
            </div>
            {/* image section*/}
            <div className="  absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
              <img
                className="w-96"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="image2"
              />
            </div>
          </aside>
        </div>

        <div>
          {/* image section */}
          <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
              <img
                className="w-96"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="image3"
              />
            </div>

            {/* description section */}
            <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  A Crew of 15 vs 1 AI tool
                </h2>
                <p>
                  Video porduction coordination involves
                  <br />
                  managing schedules and equipment. AI
                  <br />
                  videos streamline this, reducing labor and <br />
                  management efforts.
                </p>

                <Link
                  className="inline-flex text-blue-500 items-center px-3 py-3 font-medium hover:opacity-75"
                  to="/"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </aside>
        </div>


        <div>
          {/* image section */}
          <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
            <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
              <img
                className="w-96"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="image4"
              />
            </div>

            {/* description section */}
            <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  140+ Languages
                </h2>
                <p>
                  English non-English speaking audiences by
                  <br />
                  automating dubing and translation to Create
                  <br />
                  and distribute multilingual videos quickly <br />
                </p>

                <Link
                  className="inline-flex text-blue-500 items-center px-3 py-3 font-medium hover:opacity-75"
                  to="/"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="flex justify-center items-center">
        {/* <Demo/> */}
            <div>
                <aside className="flex justify-evenly">
                    <div className="flex justify-center item-center">
                        <h1 className="font-bold justify-center">Book a demo</h1>
                    </div>

                    <div>
                        <p>Our video output the likes of Google Vlogger,<br />and at par with Microsoft's VASA-1 & Alibaba's EMO</p>
                        <div className="flex justify-center align-middle w-[395] h-[43] gap-1">
                        <input type="email" placeholder="email" />
                        <button 
                        className="bg-black text-white w-[131px] h-[43px]">
                        Subscribe
                        </button>
                        </div>
                    </div>
                </aside>
            </div>
      </section>
    </div>
  );
}
