import React from 'react'
import "../CSS/nav.css"
import { Link } from "react-router-dom"

export default function nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <img src="https://fakeimg.pl/100x100" alt="" />
                    <Link to="/">AllEvents.in</Link>

                </a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Chandigarh
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <li class="nav-item">
                        <a class="nav-link" href="#">+Create Event</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/signin">Sign in</a>
                    </li>
                    <form className="d-flex">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <div className='search-icon'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                </div>
            </nav>
            <div className="blue-line"></div>
        </>
    )
}
