import React from 'react';
import './EventPage.css';
import event_img_1 from '../../images/about/event/1.jpg';
import event_img_2 from '../../images/about/event/2.jpg';
import Header from '../Header/Header'
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import Subheader from '../Subheader/Subheader';
import listItem from '../../fakeData/listItem';
import { Link } from 'react-router-dom';
import eventData from '../../fakeData/eventData';
const EventPage = () => {
    return (
        <>
            <Header />
            <Subheader />
            <div className="left_part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 list_area navbar-expand-lg">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="list-group">
                                        {
                                            listItem.map(list => (
                                                <li key={list.id} className={`list-group-item ${list.firstClass}`}><Link to={`/${list.to}`}>{list.listName}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-9">
                            <div className="row events-content">
                                <div className="col-md-12 ">
                                    <h2 className="events-header">Events </h2>
                                </div>
                                <div className="col-md-12 main-events-contents">
                                    <div className="row event-area-content">
                                        {
                                            eventData.map(data => (
                                                <div key={data.id} className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                                                    <div className="event-block">
                                                        <div className="row">
                                                            <div className="col-3 col-md-3 symbol">
                                                                <i className={data.symbol}></i>
                                                            </div>
                                                            <div className="col-9 col-md-9">
                                                                <h4>{data.title}</h4>
                                                                <small>{data.content}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
                                            <div className="event-block event-block-date-time-area">
                                                <div className="row">
                                                    <div className="col-3 col-md-3 event-block-date">
                                                        <h4>20</h4>
                                                        <p>July, 2021</p>
                                                    </div>
                                                    <div className="col-9 col-md-9 event-block-time">
                                                        <img src={event_img_1} alt="" />
                                                        <h4>UT AUT REICIENDIS FACERE POSSIMUS</h4>
                                                        <div className="row">
                                                            <div className="col-6 col-md-6 shedule">
                                                                <i className="fa fa-clock-o"></i>
                                                        3:00 PM
                                                    </div>
                                                            <div className="col-6 col-md-6 shedule">
                                                                <i className="fa fa-user"></i>
                                                        Admin
                                                    </div>
                                                            <div>
                                                                <small>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <div className="
                                            event-block event-block-date-time-area">
                                                <div className="row">
                                                    <div className="col-3 col-md-3 event-block-date">
                                                        <h4>20</h4>
                                                        <p>July, 2021</p>
                                                    </div>
                                                    <div className="col-9 col-md-9 event-block-time">
                                                        <img  src={event_img_2} alt="" />
                                                        <h4>UT AUT REICIENDIS FACERE POSSIMUS</h4>
                                                        <div className="row">
                                                            <div className="col-6 col-md-6 shedule">
                                                                <i className="fa fa-clock-o"></i>
                                                        3:00 PM
                                                    </div>
                                                            <div className="col-6 col-md-6 shedule">
                                                                <i className="fa fa-user"></i>
                                                        Admin
                                                    </div>
                                                            <div>
                                                                <small>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </>
    );
};

export default EventPage;