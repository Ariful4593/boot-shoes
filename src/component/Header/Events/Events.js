import React from 'react';
import './Events.css';
import logo from '../../../images/grocery_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Events = () => {
    return (
        <div className="container">
        <div className="row second_part">
            <div className="col-12 col-sm-2 col-md-3 col-lg-3 col-xl-2 logo">
                <Link to="/"><img src={logo} className="logo_img" alt="" /></Link>
            </div>
            <div className="col-12 col-sm-10 col-md-9 col-lg-9 col-xl-6 event_area ">
            <pre>
                <Link to="/events">Events</Link>  /   <Link to="/aboutUs">About Us</Link>  /  <Link to="/bestDeals">Best Deals</Link>  /  <Link className="text-muted" to="">Service</Link>
            </pre>                
            </div>
            <div className="col-md-4 col-lg-12 col-xl-4 contact_area">
                <div className="row">
                    <div className="col-md-6 number">
                        <FontAwesomeIcon icon={faPhoneAlt} /> +88-01830134593
                    </div>
                    <div className="col-md-6 address">
                    <FontAwesomeIcon icon={faEnvelope} /> strore@bootshoe.com
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Events;