import React from 'react';
import './Subheader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const Subheader = (props) => {
    const location = useLocation();
    const review = props.review;
    return (
        <div className="products-bredcrumb">
                <div className="container">
                    <div className="row">
                        <ul>
                            <li>
                                
                                <Link to="/"><FontAwesomeIcon icon={faHome}/><span>  Home  </span> </Link>
                        {review ? '/ Product-Details' : location.pathname}
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Subheader;