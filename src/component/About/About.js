import React, { useEffect, useState } from 'react';
import './About.css';
import Header from '../Header/Header';
import Subheader from '../Subheader/Subheader';
import { Link } from 'react-router-dom';
import about_1 from '../../images/about/1.jpg';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';
import listItem from '../../fakeData/listItem';
import amazingTeam from '../../fakeData/amazingTeam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    const feedback = [
        { id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sed eos aliquam commodi magni dicta quod maiores distinctio nemo quae impedit qui dolores nesciunt exercitationem aliquid debitis, aperiam illum molestias!', ownerName: 'ROSY CARL', designation: 'Customer' },
        { id: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quaerat ipsam facere nulla fuga odio similique deserunt optio repellat dolores corporis hic ex harum, tempora quam quasi nisi aliquam esse!', ownerName: 'ANDREW SMITH', designation: 'Customer' },
        { id: 3, description: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', ownerName: 'CRISP KALE', designation: 'Customer' },
    ]
    const secondFeedback = [
        { id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sed eos aliquam commodi magni dicta quod maiores distinctio nemo quae impedit qui dolores nesciunt exercitationem aliquid debitis, aperiam illum molestias!', ownerName: 'JOHN PAUL', designation: 'Customer' },
        { id: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quaerat ipsam facere nulla fuga odio similique deserunt optio repellat dolores corporis hic ex harum, tempora quam quasi nisi aliquam esse!', ownerName: 'ROCKSON DOE', designation: 'Customer' },
        { id: 3, description: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', ownerName: 'CRISP KALE', designation: 'Customer' },
    ]
    const [feedbackArray, setFeedbackArray] = useState([])
    const [secondFeedbackArray, setSecondFeedbackArray] = useState([]);
    const [firstItem, setFirstItem] = useState('');
    const [secondItem, setSecondItem] = useState('');

    useEffect(() => {
        setFirstItem('ROSY CARL')
    }, [])
    useEffect(() => {
        setSecondItem('CRISP KALE')
    }, [])
    const handleFeedback = (count) => {
        setFirstItem(count)
    }
    const handleSecondFeedback = (count) =>{
        setSecondItem(count)
        console.log(count)
    }
    useEffect(() => {
        if (firstItem !== '') {
            const currentCategory = feedback.filter(item => item.ownerName === firstItem);
            setFeedbackArray(currentCategory)
        }
    }, [firstItem]);

    useEffect(() => {
        if (secondItem !== '') {
            const currentCategory = secondFeedback.filter(item => item.ownerName === secondItem);
            setSecondFeedbackArray(currentCategory)
        }
    }, [secondItem]);
    return (
        <>
            <Header />
            <Subheader />
            <div className="left_part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 list_area navbar-expand-lg">
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
                        <div className="col-md-8">
                            <div className="row about-us-content">
                                <div className="col-md-12 ">
                                    <h2 className="about-us-header">About Us</h2>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio.</p>
                                </div>
                                <div className="col-md-12">
                                    <div className="row about-image-area">
                                        <div className="col-12 col-sm-12 col-6 col-md-12 col-lg-6 about">
                                            <img src={about_1} alt="" />
                                        </div>
                                        <div className="col-12  col-md-12 col-lg-6 list">
                                            <ol>
                                                <li>laborum et dolorum fuga</li>
                                                <li>corrupti quos dolores et quas</li>
                                                <li>est et expedita distinctio</li>
                                                <li>deleniti atque corrupti quos</li>
                                                <li>excepturi sint occaecati cupiditate</li>
                                                <li>accusamus et iusto odio</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="amazing-team">
                <div className="container">
                    <div className="row">
                        <h2 className="header">Meet Our Amazing Team</h2>
                        {
                            amazingTeam.map(team => (
                                <div key={team.id} className="col-md-6 col-lg-3">
                                    <div className="card">
                                        <img className="card-img-top" src={team.img} alt="Card cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{team.name}</h5>
                                            <p className="card-text">{team.designation}</p>
                                            <Link to="facebook" className={team.facebook} />
                                            <Link to="twitter" className={team.twitter} />
                                            <Link to="google" className={team.google} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>


            <div className="testimonial">
                <div className="container">
                    <div className="row">
                        <h2 className="testimonial-header">Testimonials</h2>
                        <div className="col-md-6 content">
                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                            {
                                feedbackArray.map(data => (
                                    <>
                                        <p key={data.id} className="feedback-description">{data.description}</p>
                                        <h4 className="client">{data.ownerName}</h4>
                                        <h6 className="client">{data.designation}</h6>
                                    </>
                                ))
                            }
                            <h6 className="client">
                                {
                                    feedback.map(item => (
                                        <span key={item.id}><FontAwesomeIcon onClick={() => handleFeedback(item.ownerName)} icon={faDotCircle} /></span>
                                    ))
                                }
                            </h6>
                        </div>
                        <div className="col-md-6 content">
                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                            {
                                secondFeedbackArray.map(data => (
                                    <>
                                        <p key={data.id} className="feedback-description">{data.description}</p>
                                        <h4 className="client">{data.ownerName}</h4>
                                        <h6 className="client">{data.designation}</h6>
                                    </>
                                ))
                            }
                            <h6 className="client">
                                {
                                    secondFeedback.map(item => (
                                        <span key={item.id}><FontAwesomeIcon onClick={() => handleSecondFeedback(item.ownerName)} icon={faDotCircle} /></span>
                                    ))
                                }
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default About;