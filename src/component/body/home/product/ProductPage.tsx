import React, { FunctionComponent, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import shantam from '../../../../images/profile/shantam.jpg';
import ProductCard, { ProductInterface } from './Product';
const emptyProductList: ProductInterface[] = [{
    id: 1,
    name: 'Shantam',
    description: 'Haryanvi',
    img: shantam,
    price: 'INF',
    quantity: 1,
    wishlisted: true
}, {
    id: 2,
    name: 'Copy Shantam',
    description: 'Haryanvi',
    img: shantam,
    price: '1000',
    quantity: 3,
    wishlisted: false
}];
const ProductPage: FunctionComponent<any> = ({ productType, history, match }) => {
    const [productList, setProductList] = useState(emptyProductList.map(product => {
        product.wishlisted = localStorage.getItem('product' + product.id) !== null;
        return product;
    }));
    useEffect(() => {
        //call all by productType
        console.log(match.params.type);
    }, [match.params.type]);
    return (
        <div>
            {productList.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
    )
}
export default withRouter(ProductPage);