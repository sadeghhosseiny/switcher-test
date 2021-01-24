import React from 'react';
import logo from '../amazon_PNG25.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (


        <nav className={`navbar navbar-dark ${styles.navbar}`}>
            <img src={logo} className={`${styles.logo} navbar-brand mr-5`} />
            <div className={`d-flex flex-grow-1 justify-content-center ${styles.searchForm}`}>
                <form className="w-75">
                    <div className="input-group">
                        <input type="text" className="form-control py-3" />
                        <div class="input-group-append mr-0">
                            <button className="btn btn-warning" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="d-flex mr-5">
                <div className="col-lg-1 pt-3 mr-5">

                    <span className="mr-5">
                        <i className="fas fa-flag text-white" />
                    </span>

                </div >
                <div className="col-lg-5 mx-auto">

                    <div className="m-auto text-white">
                        Hello, Sign In
                </div>
                    <span className="text-capitalize text-white font-weight-bold">account & list</span>

                </div>
                <div className="col-lg-4 mx-auto">

                    <div className="text-white">
                        Returns
                </div>
                    <span className="text-white font-weight-bold">& Orders</span>
                </div>

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