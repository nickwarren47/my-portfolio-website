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
                        <h1 className="text-3xl font-bold text-blue-800">Nick Warren</h1>
                    </Link>
                </Navbar.Brand>
                <div className="mr-52">
                <Navbar.Collapse>
                    <Navbar.Link
                        active={location.pathname === "/"}>
                        <Link to="/"> Home Page </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/projects"}>
                        <Link to="/projects"> Projects </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/blogs"}>
                        <Link to="/blogs"> Blogs </Link>
                    </Navbar.Link>

                    <Navbar.Link
                        active={location.pathname === "/resume"}>
                        <Link to="/resume"> Resume </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
                </div>
            </Navbar>
    </div>
    )
}

export default NavBar;