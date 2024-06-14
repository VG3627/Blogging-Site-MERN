import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { useContext } from "react";
import { AuthContext } from "./Context/authContext";
const NavBar = () => {

    const { state, dispatch } = useContext(AuthContext);
    // console.log("ise user null ?",state.user == null) ;
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });

        return;
    }
    return (
        // <nav className="Navbar">
        //     <h1>Dojo Blog</h1>
        //     <div className="links">
        //         <a href="/">Home</a>
        //         <a href="/create">New Blog</a>
        //     </div>
        // </nav>

        <div className="NavBar">
            <Navbar expand="lg" className="bg-body-tertiary mb-3" data-bs-theme="dark" style={{ fontFamily: "merryweather" }}>
                <Navbar.Brand >BlogSphere</Navbar.Brand>
                <div className="links">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {<Nav.Link as={Link} to="/create">New Blog</Nav.Link>}
                        {!state.user && <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>}
                        {!state.user && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {state.user && (
                                <div className="d-flex align-items-center" ><span className="me-2">{state.user.email}</span>
                                    <Button variant="outline-light" onClick={logout}>
                                        Logout
                                    </Button></div>
                            )}
                    </Nav>
                </div>
            </Navbar>
        </div>





    );
}

export default NavBar;