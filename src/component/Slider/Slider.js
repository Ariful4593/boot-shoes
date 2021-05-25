import React from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';
import listItem from '../../fakeData/listItem';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide_img_1 from '../../images/slide/1.jpg';
import slide_img_2 from '../../images/slide/2.jpg';
import slide_img_3 from '../../images/slide/3.jpg';
import slide_img_4 from '../../images/slide/4.jpg';
import slide_img_5 from '../../images/slide/5.jpg';
import slide_img_6 from '../../images/slide/6.jpg';
import slide_img_7 from '../../images/slide/7.jpg';
import slide_img_8 from '../../images/slide/8.jpg';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const slide_img = [
    {id: 1, img: slide_img_1},
    {id: 2, img: slide_img_2},
    {id: 3, img: slide_img_3},
    {id: 4, img: slide_img_4},
    {id: 5, img: slide_img_5},
    {id: 6, img: slide_img_6},
    {id: 7, img: slide_img_7},
    {id: 8, img: slide_img_8},
]
const Slider = () => {
    return (
        <div className="third_part">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 list_area navbar-expand-lg">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="list-group">
                                    {
                                        listItem.map(x => (
                                            <li key={x.id} className={`list-group-item ${x.firstClass}`}><Link to={`/${x.to}`}>{x.listName}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12 col-sm-12 col-md-9 slide_area">
                        <Carousel responsive={responsive}>
                            {
                                slide_img.map(data => (
                                    <div key={data.id}><img src={data.img} alt="" /></div>
                                ))
                            }
                        </Carousel>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;