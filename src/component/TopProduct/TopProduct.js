import React, { useEffect, useState } from 'react';
import './TopProduct.css';
import topProductList from '../../fakeData/topProductList';
import listItem from '../../fakeData/listItem';
const TopProduct = () => {
    const [, setFullList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [allBrands, setAllBrands] = useState([]);

    useEffect(() => {
        const data = listItem;
        setFullList(data);
        setCurrentCategory('best-work-boots-for-concrete')
    }, []);
    const handleTypesOfLi = (types) => {
        setCurrentCategory(types);
    }
    useEffect(() => {
        if (currentCategory !== '') {
            const current = listItem.filter(current => current.to === currentCategory);
            setCurrentList(current);
        }
    }, [currentCategory]);
    useEffect(() => {
        if(currentCategory === 'allBrands'){
            setAllBrands(listItem);
        }
    }, [currentCategory]);
    return (
        <div className="top-products">
            <div className="container">
                <h2 className="text-center title"><span>Top Products</span><hr /></h2>
                <div className="row mt-5" style={{ padding: '10px' }}>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 list_item">
                        <div className="col-12 col-md-12 ">
                            <ul className="list-group">
                                {
                                    topProductList.map(list => {
                                        return (
                                            <li key={list.id} className="list-group-item" style={{ cursor: 'pointer' }} onClick={() => handleTypesOfLi(list.type)}> ✔️ {list.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-9 card_image_area">
                        <div className="row">
                            {
                               currentCategory !== 'allBrands' ? currentList.map(pd => {
                                    return (
                                        pd.productContent.map(product => {
                                            return (

                                                <div key={product.keyId} className="col-12 col-sm-6 col-md-4 col-lg-3 image_card">
                                                    <a href={product.link} target="_blank" rel="noreferrer">
                                                        <img className="card-img-top" src={product.img} alt="Card  cap" />
                                                        {/* <h4>{product.title}</h4> */}
                                                    </a>
                                                </div>

                                            )
                                        })
                                    )
                                })
                                : allBrands.map(data => {
                                    return(
                                        data.productContent.map(product => {
                                            return (

                                                <div key={product.keyId} className="col-12 col-sm-6 col-md-4 col-lg-3 image_card">
                                                    <a href={product.link} target="_blank" rel="noreferrer">
                                                        <img className="card-img-top" src={product.img} alt="Card  cap" />
                                                        {/* <h4>{product.title}</h4> */}
                                                    </a>
                                                </div>

                                            )
                                        })
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProduct;