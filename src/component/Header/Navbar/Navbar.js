import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container header-main bg-dark">
        <div className="row  ">
            <div className="col-12 col-sm-3 col-md-3 text-white col_1 d-flex align-items-center">
                <h5 className="m-0"><Link to="/bestDeals">Today's special offer</Link></h5>
            </div>
            <div className="col-12 col-sm-6 col-md-6 text-white col_2">
                <div className="row">
                    <div className="col-10 col-md-10 search_box">
                        <input type="search" className="search_product form-control" name="" placeholder="Search a product" id="" />
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 search_btn">
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-3 col-md-2 text-white col_3 view-cart">
                <h3 className="m-0">View YourCart <i className="fas fa-shopping-cart"></i></h3>
            </div>  */}
            <div className="col-12 col-sm-3  col-md-3 text-white col_4 contact-us">
                <h3 className="m-0">Contact Us</h3>
            </div>
        </div>
    </div>
    );
};

export default Navbar;