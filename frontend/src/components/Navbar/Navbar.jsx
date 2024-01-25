import React from 'react'
import './Navbar.css'
import { FaBook } from "react-icons/fa6";
import avatar from '../../assets/avatar.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand text-danger d-flex align-items-center gap-2" href="#"><FaBook /><b>TODO</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3 align-items-center'>
                            <li className="nav-item ">
                                <a className="nav-link active list-items" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active list-items" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item btn btn-success">
                                <a className="nav-link active list-items" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item btn btn-success">
                                <a className="nav-link active list-items" aria-current="page" href="#">Signin</a>
                            </li>
                            <li className="nav-item btn btn-success">
                                <a className="nav-link active list-items" aria-current="page" href="#">Logout</a>
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