import React from 'react';
import logo from '../amazon_PNG25.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={`navbar ${styles.navbar}`}>
            <img src={logo} className={`${styles.logo} navbar-brand mr-auto`} />
            <div className={`mr-auto ${styles.div__input}`}>
                <form >
                    <div className="input-group ">
                        <input type="text" className={`form-control ${styles.search_input}`} />
                        <div className="input-group-append">
                            <button className={`btn btn-warning ${styles.button__header}`} type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </nav>
    )

}

export default Navbar