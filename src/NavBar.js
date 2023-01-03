import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { useState } from "react"
import { Navbar } from "flowbite-react";

function NavBar(){

    let location = useLocation();
    const [navbar, setNavbar] = useState(false)

    return(
    <nav className="w-full bg-white shadow">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">

                <Navbar.Brand>
                    <Link to="/">
                        <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xsm:text-xl font-bold text-black hover:text-blue-400 transition duration-300 ease-in-out ml-5">Nick Warren</h1>
                    </Link>
                </Navbar.Brand>

                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-black"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">

                    <li>
                        <Navbar.Link
                            active={location.pathname === "/"}>
                            <Link to="/" className="xl:text-xl lg:text-lg md:text-md sm:text-md xsm:text-md font-bold"> Home Page </Link>
                        </Navbar.Link>
                    </li>

                    <li>
                        <Navbar.Link
                            active={location.pathname === "/projects"}>
                            <Link to="/projects" className="xl:text-xl lg:text-lg md:text-md sm:text-md xsm:text-md font-bold"> Projects </Link>
                        </Navbar.Link>
                    </li>

                    <Navbar.Link
                        active={location.pathname === "/blogs"}>
                        <Link to="/blogs" className="xl:text-xl lg:text-lg md:text-md sm:text-md xsm:text-md font-bold"> Blogs </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/resume"}>
                        <Link to="/resume" className="xl:text-xl lg:text-lg md:text-md sm:text-md xsm:text-md font-bold"> Resume </Link>
                    </Navbar.Link>
                    
                    <Navbar.Link
                        active={location.pathname === "/nickactivities"}>
                        <Link to="/nickactivities" className="xl:text-xl lg:text-lg md:text-md sm:text-md xsm:text-md font-bold"> More About Nick </Link>
                    </Navbar.Link>
                </ul>
            </div>
        </div>
    </div>
</nav>
    )
}

export default NavBar;