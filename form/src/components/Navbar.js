import React from "react";

const Navbar = () =>{
    return(
        <div>
        <nav class="navbar bg-body-tertiary">
                <div class="container">
                <a class="navbar-brand" href="#">
                    <img id="logo" src="./bses_logo.png" alt="Bootstrap" width="180" height="80"/>
                </a>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" id = "navb">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Regulatory and compliances</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">News & Media</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Tender</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;