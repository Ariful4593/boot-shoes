import React from 'react';
import './ProductDetails.css';
import Header from '../../Header/Header';
import Subheader from '../../Subheader/Subheader';
import listItem from '../../../fakeData/listItem';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Newsletter from '../../Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
const ProductDetails = () => {
    const pd = useParams();
    const { productKey } = pd;
    const productData = (listItem.filter(x => x.to === productKey));
    const productHeader = productData[0].mainHeader;
    return (
        <>
            <Header />
            <Subheader />
            <div className="container product-details">
                <h2 className="product-header">{productHeader}</h2>
                <div className="row product-list">
                    {
                        productData.map(pd => {
                            return (
                                pd.productContent.map(content => {
                                    const productContent = content.description;
                                    return (
                                        <div key={content.keyId} className="col-md-6 col-lg-3 product">
                                            <Link to={`/product-details/${pd.id}/${content.keyId}/${content.header}`}>
                                                <div className="card">
                                                    <img className="card-img-top" src={content.img} alt="Card  cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{content.title}</h5>
                                                        <p className="card-text">{`${productContent.slice(0, 200)}[...]`}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    );
};

export default ProductDetails;