import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    let location = useLocation();
    // useEffect(() => {
    // //   console.log(location);
    // }, [location])
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg shadow  rounded navbar-${props.mode} bg-${props.mode}`}>
                <div>
                    
                </div>
                <div className="container-fluid">
                    <img src="./assest/image/download.jpg" alt="" style={{ width: "48px", height: "44px" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link className={`btn ${props.mode=='dark' ? ' btn-outline-light':'btn-outline-primary'} mx-2`} to="/login" role="button">Login</Link>
                            <Link className={`btn ${props.mode=='dark' ? ' btn-outline-light':'btn-outline-primary'}`}to="/signup" role="button">Sign up</Link>
                        </form> : <button onClick={handleLogout} className={`btn ${props.mode=='dark' ? ' btn-outline-light':'btn-outline-primary'} mx-2`}>Logout</button>}
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input d-none"
                            onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? (<><i className="fa-sharp fa-solid fa-lightbulb"></i> Dark</>) : (<><i className="fa-sharp fa-solid fa-lightbulb"></i> Light</>)}  Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar