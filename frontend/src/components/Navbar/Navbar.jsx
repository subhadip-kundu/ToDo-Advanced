import React from 'react'
import './Navbar.css'
import { FaBook } from "react-icons/fa6";
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div  className=' py-2  '>
            <nav style={{ height: "70px" }} className="navbar bg-light navbar-expand-lg position-fixed fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-danger d-flex align-items-center gap-2" to="/"><FaBook /><b>TODO</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3 align-items-center'>
                            <li className="nav-item ">
                                <Link className="nav-link active list-items" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active list-items" aria-current="page" to="/aboutus">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active list-items" aria-current="page" to="#">Todo</Link>
                            </li>
                            <li className="nav-item btn btn-success">
                                <Link className="nav-link active list-items" aria-current="page" to="#">Signup</Link>
                            </li>
                            <li className="nav-item btn btn-success">
                                <Link className="nav-link active list-items" aria-current="page" to="#">Signin</Link>
                            </li>
                            <li className="nav-item btn btn-success">
                                <Link className="nav-link active list-items" aria-current="page" to="#">Logout</Link>
                            </li>
                            <li className="nav-item">
                                <img className='img-fluid user-png' src={avatar} alt="Avatar" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;