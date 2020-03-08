import React, { FunctionComponent, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { get, urls } from '../../../rest/rest.service';
import { ProductInterface } from '../home/product/Product';
import ProductAdmin from '../home/product/ProductAdmin';
const emptyProductList: ProductInterface[] = [];
const Admin: FunctionComponent<any> = ({ productType, history, match }) => {
    const [productList, setProductList] = useState(emptyProductList);
    useEffect(() => {
        get(`${urls.productbase}${urls.product.all}`).then(response => {
            console.log("Backend Repsonse", response.data);
            setProductList(response.data.map((product: ProductInterface) => {
                product.wishlisted = localStorage.getItem('product' + product.id) !== null;
                return product;
            }));
        })
    }, [match.params.type]);
    return (
        <div>
            {productList.map((product, index) => <ProductAdmin key={index} product={product} add={false} />)}
        </div>
    )
}
export default withRouter(Admin);