import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg nav">
        <div class="container">
          <a class="navbar-brand" href="#">
            Clinic Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/Appointment">
                  Appointment
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/WaitingRoom">
                  Waiting Room
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar