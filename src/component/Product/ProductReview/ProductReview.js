import React from 'react';
import './ProductReview.css';
import listItem from '../../../fakeData/listItem';
import Header from '../../Header/Header';
import Subheader from '../../Subheader/Subheader';
import { useLocation, useParams } from 'react-router';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';

const ProductReview = () => {
    const productKey = useParams();
    const { productId, contentId } = productKey;
    const mainArray = listItem.filter(x => x.id === productId);
     const contentArray = mainArray[0].productContent;
    const finalData = contentArray.find(x => x.keyId === contentId)
    const { link, img, title, description } = finalData;
    const productHintsData = finalData.productHints;
    const productDetails = finalData.productDetails;
    const location = useLocation();
    const review = listItem.filter(data => data.to === location);
    console.log(review)
    return (
        <>
            <Header />
            <Subheader review={review} />
            <div className="container product-details">
                <div className="row product-hints">
                    <div className=" col-md-6 img">
                        <a href={link} rel="noreferrer" target="_blank"><img src={img} alt="" /></a>
                    </div>
                    <div className=" col-md-6 hints-type">
                        <h3 className="title">{title}</h3>
                        <hr />
                        <ul>
                            {
                                productHintsData.map(x => <li key={x}>{x}</li>)
                            }
                        </ul>
                        <a href={link} rel="noreferrer" target="_blank">
                            <button className="btn btn-danger">Buy on Amazon</button>
                        </a>
                    </div>
                </div>
                <div className="row product-description">

                    <div className="col-12">

                        <p>{description}</p>
                        <h2>Product Details: </h2>
                        <ul>
                            {
                                productDetails.map(data => <li key={data.span1}><span><b>{data.span1}</b></span> <span> {data.span101}</span></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default ProductReview;