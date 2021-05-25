import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="subscribe_now" style={{backgroundColor: '#FA1818'}}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 newsletter justify-content-end text-white">
                    <h5>Sign Up For Our Newsletter</h5>
                </div>
                <div className="col-12 col-md-8 sub_now_field">
                    <div className="row sub_now">
                        <div className="col-md-9">
                            <input type="search" className="form-control text-white" name=""
                                style={{width: '100%', paddingRight: '0px', height: '100%', borderRadius: '0px',backgroundColor: '#FA1818'}}
                                placeholder="Email" id="" />
                        </div>
                        <div className="col-md-3 text-danger">
                            <button className="btn btn-white bg-white text-danger" type="submit">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Newsletter;