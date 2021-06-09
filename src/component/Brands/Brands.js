import React from 'react';
import './Brands.css';
import listItem from '../../fakeData/listItem';
import { Link } from 'react-router-dom';
const Brands = () => {
    const brandProduct = listItem.slice(0, 4);
    return (
        <div className="container">
            <div className="row fourth_part">
                {
                    brandProduct.map(x => {
                        const productContent = x.productContent.slice(0, 1);
                        return (
                            productContent.map(pd => {
                                return (
                                    <div key={pd.keyId} className="col-12 col-sm-6 col-md-3">
                                        <div className="card">
                                            <Link to={`/product-details/${x.id}/${pd.keyId}/${pd.header}`}>
                                                <img src={pd.img} alt="" />
                                                <h5>{pd.title}</h5>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        )

                    })
                }
            </div>
        </div>
    );
};

export default Brands;