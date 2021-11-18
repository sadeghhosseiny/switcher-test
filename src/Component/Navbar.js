import React, { useEffect, useState } from 'react';
import logo from '../amazon_PNG25.png';
import styles from './Navbar.module.css';
import axios from 'axios';

function Navbar() {
  const [img, setImg] = useState([]);


  return (
    <>

      <div className={`${styles.navF}`}>
        <nav className={`navbar navbar-dark ${styles.navbar}`}>

          <img src={logo} className={`${styles.logo} navbar-brand mr-lg-5`} />


          <form className={` ${styles.searchForm}`}>

            <div className="input-group">
              <input
                type="text" className={`form-control py-4 ${styles.searchInput}`} />
              <div className="input-group-append">
                <button className="btn btn-warning" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>
          {/*</div> */}
          <div className="d-flex mx-2">
            <div className="mx-3 pt-2">
              <span>
                <i className="fas fa-flag text-white" />
              </span>

            </div >
            <div className="mx-3">

              <div className="text-white">
                Hello, Sign In
              </div>
              <span className="text-capitalize text-white font-weight-bold">
                account & list
              </span>

            </div>
            <div className="mx-3">

              <div className="text-white">
                Returns
              </div>
              <span className="text-white font-weight-bold">
                & Orders
              </span>
            </div>
            <div className="d-flex pt-2 mx-1">
              <span>
                <i className="fas fa-shopping-cart text-white" />
              </span>
              <span className="d-sm-none d-lg-block text-white text-capitalize font-weight-bold">
                cart
              </span>
            </div>

          </div>

        </nav>

      </div>

      <div>
        {console.log("bb", img[0]?.backdrop_path)}
        <div >
          <img src={"https://image.tmdb.org/t/p/original" + img[0]?.poster_path} alt="balck_widow" />
        </div>

      </div>
    </>

  );

}

export default Navbar;