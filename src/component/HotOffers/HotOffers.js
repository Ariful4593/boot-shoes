import React, { useState } from 'react';
import './HotOffers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import trendingProduct from '../../fakeData/trendingProduct';
const HotOffers = () => {
    const [count, setCount] = useState(0);
    const trendArray = [];
    if (count >= 0 && count <= trendingProduct.length) {
        for (let index = count; index <= count; index++) {
            const element = trendingProduct[index];
            trendArray.push(element);
        }
    }

    let trendProductList = [];
    if (count >= 0 && count <= trendingProduct.length) {
        for (let index = 0; index < trendArray.length; index++) {
            const element = trendArray[index];
            for (let index = 0; index < element.length; index++) {
                const data = element[index];
                trendProductList.push(data);
            }
        }
    }
    let screenWidth = window.innerWidth;
    let screenWiseData;
    if(screenWidth >= 300 && screenWidth <= 499){
        screenWiseData = trendProductList.slice(0, 1);
    }else if(screenWidth >= 500 && screenWidth <= 574){
        screenWiseData = trendProductList.slice(0, 2);
    }else if(screenWidth >= 575 && screenWidth <= 599){
        screenWiseData = trendProductList.slice(0, 2);
    }else if(screenWidth >= 600 && screenWidth <= 699){
        screenWiseData = trendProductList.slice(0, 3);
    }else if(screenWidth >= 700 && screenWidth <= 765){
        screenWiseData = trendProductList.slice(0, 3);
    }else if(screenWidth >= 768 && screenWidth <= 799){
        screenWiseData = trendProductList.slice(0, 4);
    }else if(screenWidth >= 800 && screenWidth <= 899){
        screenWiseData = trendProductList.slice(0, 4);
    }else if(screenWidth >= 900 && screenWidth <= 991){
        screenWiseData = trendProductList.slice(0, 4);
    }else if(screenWidth >= 992 && screenWidth <= 1050){
        screenWiseData = trendProductList.slice(0, 5);
    }else if(screenWidth >= 1051 && screenWidth <= 1070){
        screenWiseData = trendProductList.slice(0, 5);
    }else if(screenWidth >= 1071 && screenWidth <= 1200){
        screenWiseData = trendProductList.slice(0, 6);
    }else if(screenWidth >= 1200){
        screenWiseData = trendProductList.slice(0, 6);
    }
    return (
        <div className="top-brands">
            <div className="container">
                <h2 className="text-center title"><span>Trending Product</span>
                <hr /></h2>
                <div className="row mt-5 trending-row">
                    <div className="slide-left" id="left-btn">
                        {
                            count === 0 ? '' : <button onClick={() => setCount(count - 1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        }
                    </div>
                    {
                        screenWiseData.map(pd => {
                            return (

                                <div key={pd.to} className="col-12 col-sm-6 col-md-6 col-lg-2 brand-product">
                                    <div className="card">
                                        <div className="card-inside-div">
                                            <a href={`${pd.to}`} target="_blank" rel="noreferrer" >
                                                <img className="card-img-top" src={pd.img} alt="Card cap" />
                                            </a>
                                            <div className="card-body">
                                                <a href={`${pd.to}`} target="_blank" rel="noreferrer" >
                                                    <h5 className="card-title">{pd.title}</h5>
                                                </a>

                                                <p className="card-text text-danger font-weight-bold">{pd.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="slide-right">
                        {
                            count === trendingProduct.length - 1 ? '' : <button onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faArrowRight} /></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotOffers;