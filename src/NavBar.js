import { Link } from "react-router-dom"
import { Navbar } from "flowbite-react"
import { useLocation } from 'react-router-dom';

function NavBar(){

    let location = useLocation();
    
    return(
        <div className="bg-grey-900">
            <Navbar
                fluid={true}
                rounded={true}>
                <Navbar.Brand>
                    <Link to="/">
                        <h1 className="text-3xl font-bold text-blue-800 hover:text-blue-400 transition duration-300 ease-in-out ml-5">Nick Warren</h1>
                    </Link>
                </Navbar.Brand>
                <div className="mr-5">
                <Navbar.Collapse>
                    <Navbar.Link
                        active={location.pathname === "/"}>
                        <Link to="/" className="text-lg"> Home Page </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/projects"}>
                        <Link to="/projects" className="text-lg"> Projects </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/blogs"}>
                        <Link to="/blogs" className="text-lg"> Blogs </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/resume"}>
                        <Link to="/resume" className="text-lg"> Resume </Link>
                    </Navbar.Link>
                    
                    <Navbar.Link
                        active={location.pathname === "/nickactivities"}>
                        <Link to="/nickactivities" className="text-lg"> Activities </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
                </div>
            </Navbar>
    </div>
    )
}

export default NavBar;