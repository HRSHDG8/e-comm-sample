import React, { FunctionComponent, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { get, urls } from '../../../../rest/rest.service';
import ProductCard, { ProductInterface } from './Product';
const emptyProductList: ProductInterface[] = [];
const ProductPage: FunctionComponent<any> = ({ productType, history, match }) => {
    const [productList, setProductList] = useState(emptyProductList);
    useEffect(() => {
        get(`${urls.productbase}${urls.product.byType}/${match.params.type}`).then(response => {
            console.log("Backend Repsonse", response.data);
            setProductList(response.data.map((product: ProductInterface) => {
                product.wishlisted = localStorage.getItem('product' + product.id) !== null;
                return product;
            }));
        })
    }, [match.params.type]);
    return (
        <div>
            {productList.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
    )
}
export default withRouter(ProductPage);