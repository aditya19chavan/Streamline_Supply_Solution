import React from 'react'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg  bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#">
          LOGO
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
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                About
              </a>
            </li>

                  // start
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services/Products
                </a>
                <div class="dropdown-menu dropdown-menu-dark p-4" style="width: 1000px;">
                    <div class="row">
                      <!-- Column 1 -->
                      <div class="col-md-3">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#">About HPE</a></li>
                            <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Learn about HPE</a></li>
                          <li><a class="dropdown-item" href="#">Corporate social responsibility</a></li>
                          <li><a class="dropdown-item" href="#">Careers</a></li>
                          <li><a class="dropdown-item" href="#">Events</a></li>
                        </ul>
                      </div>
                      <!-- Column 2 -->
                      <div class="col-md-3">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#">Education and training</a></li>
                            <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">HPE education services</a></li>
                          <li><a class="dropdown-item" href="#">Certification and learning</a></li>
                          <li><a class="dropdown-item" href="#">developer workshops</a></li>
                          <li><a class="dropdown-item" href="#"> technical courses</a></li>
                        </ul>
                      </div>
                      <!-- Column 3 -->
                      <div class="col-md-3">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#">Customer success stories</a></li>
                            <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Reference architectures</a></li>
                          <li><a class="dropdown-item" href="#">Quick specs</a></li>
                          <li><a class="dropdown-item" href="#">Webinars</a></li>
                          <li><a class="dropdown-item" href="#">See all</a></li>
                        </ul>
                      </div>
                      <!-- Column 4 -->
                      <div class="col-md-3">
                        <ul class="list-unstyled">
                            <li><a class="dropdown-item" href="#">Getting started with HPE</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Get to Know HPE GreenLake</a></li>
                          <li><a class="dropdown-item" href="#">HPE GreenLake FAQ</a></li>
                          <li><a class="dropdown-item" href="#">HPE GreenLake user guide</a></li>
                          <li><a class="dropdown-item" href="#">Sign up for free</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
              </li>

                  //end
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Connect
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Suppliers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
               Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Tendors
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header
