import React from 'react';
import logo from '../amazon_PNG25.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (


        <nav className={`navbar navbar-dark bg-dark ${styles.navbar}`}>
            <img src={logo} className={`${styles.logo} navbar-brand mr-5`} />
            <div className="d-flex flex-grow-1">
                <form className="mx-auto w-75 d-inline-block order-1">
                    <div className="input-group">
                        <input type="text" className="form-control py-4" />
                        <div class="input-group-append">
                            <button className="btn btn-warning" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <ul className="navbar-nav">
                <li className="nav-item mx-3 mt-4 text-light">
                    <span>
                        <i className="fas fa-flag" />
                    </span>
                </li>
                <li className="nav-item mx-2 text-light">
                    <small className="text-default">
                        Hello, Sign in
                    </small>
                    <p className="text-capitalize">account & list</p>
                </li>
            </ul> */}

        </nav>
    )

}

export default Navbar