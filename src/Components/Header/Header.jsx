import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo.png"

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='https://www.google.co.uk/'>
          {/* <Link>
          </Link> */}
            <img src={logo} alt="" />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='https://www.google.co.uk/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='https://www.google.co.uk/'>
                Link
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' aria-disabled='true' href='https://www.google.co.uk/'>
                Disabled
              </a>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
