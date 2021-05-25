import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import payment_card from '../../images/payment_card.png';
const Footer = () => {
    const footerList = [
        {
            id: 1, header: 'Information', propertyName: [
                { keyId: 101, to: 'events', name: 'Events' },
                { keyId: 102, to: 'aboutUs', name: 'About Us' },
                { keyId: 103, to: 'bestDeals', name: 'Best Deals' },
                { keyId: 104, to: '', name: 'Services' },
                { keyId: 105, to: 'shortCode', name: 'Short Code' },
            ]
        },
        {
            id: 2, header: 'Policy Info', propertyName: [
                { keyId: 106, to: '', name: 'FAQ' },
                { keyId: 107, to: '', name: 'Privacy Policy' },
                { keyId: 108, to: '', name: 'Terms Of Use' },
            ]
        },
        {
            id: 3, header: 'What is Store', propertyName: [
                { keyId: 111, to: 'best-work-boots-for-concrete', name: 'Work Boots' },
                { keyId: 112, to: 'construction-boots', name: 'Construction Boots' },
                { keyId: 113, to: 'hunting-boots', name: 'Hunting Boots' },
                { keyId: 114, to: 'hiking-boots', name: 'Hiking Boots' },
                { keyId: 115, to: 'militery-boots', name: 'Militery Boots' },
            ]
        }
    ]
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {
                        footerList.map(list => (
                            <div key={list.id} className="col-12 col-sm-6 col-md-3 ">
                                <h3>{list.header}</h3>
                                {
                                    list.propertyName.map(x => (
                                        <ul key={x.keyId}>
                                            <li><Link to={`/${x.to}`}>{x.name}</Link></li>
                                        </ul>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <div className="col-12 col-sm-6 col-md-3">
                        <h3>Twitter Post</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore itaque harum eligendi nobis
                        voluptatibus accusantium officia, quaerat optio consectetur nulla.</p>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 payment_method">
                        <h6 className="" style={{ color: '#5BBB39' }}>100% Secure Payments</h6>
                        <img src={payment_card} alt="" />
                    </div>
                    <div className="col-md-6 connect_with_us">
                        <h6 className="text-white">Connect with us</h6>
                        <Link to="faceBook" className="fa fa-facebook"></Link>
                        <Link to="twitter" className="fa fa-twitter"></Link>
                        <Link to="google" className="fa fa-google"></Link>
                        <Link to="linkedin" className="fa fa-linkedin"></Link>
                        <Link to="youtube" className="fa fa-youtube"></Link>
                    </div>
                </div>
                <p className="text-center mt-5 text-light">© 2021 Grocery Store. All rights reserved | Design by Ariful Islam</p>
                <hr className="footer-hr" />
            </div>
            
        </div>
    );
};

export default Footer;