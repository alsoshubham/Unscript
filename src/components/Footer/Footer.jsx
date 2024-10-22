import {Link} from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="bg-black text-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div>
                    <div className="mb-6 md:mb-0 justify-between">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://cdn.prod.website-files.com/6643532c58c89f83c4fcd358/66435cbb1e8a3fb4dd89a6b1_unscript%20Logo.webp"
                                className="mr-3 h-16 text-white"
                                alt="Logo"
                            />
                        </Link>
                        <div>
                            <i></i>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold">Usecases</h2>
                            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Learning and Development
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        Marketing Teams
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Personalised videos
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Dubbing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Customer Service
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Enterprise
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold">Feature</h2>
                            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Video Dubbing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Video Dubbing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        AI Face Swap
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Customised Virtual Influencer
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Video Personalisation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold">Resources</h2>
                            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Support
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold ">Company</h4>
                            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        About us
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p>2nd Floor, 2735, 16th Cross Rd, PWD Quarters, 1st Sector, HSR Layout</p>
                        <p>Bengaluru, Karnataka 560102</p>
                    </div>
                    <span className="text-sm sm:text-center">
                        Copyright © 2024
                        <a className="hover:underline">
                            UnscriptAI
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
