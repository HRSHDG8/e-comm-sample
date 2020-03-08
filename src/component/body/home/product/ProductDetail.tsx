import { Button, Card, CardContent, makeStyles } from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { get, urls } from '../../../../rest/rest.service';
import { ProductInterface } from './Product';
import { formatter } from '../../../../util/currency';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles({
    root: {
        width: 'calc(100vw - 100px)',
        display: 'inline-flex',
        padding: '10px',
        margin: '10px',
        height: 'calc(100vh - 110px)',
        boxShadow: '0 0 9px 2px rgba(0,0,0,0.47)'
    },
    favourite: {
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.1)',
        background: 'white',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '15px'
    },
    favouriteBlank: {
        color: 'rgba(0,0,0,0.45)',
        '&:hover': {
            color: 'rgba(0,0,0,0.65)'
        }
    },
    favouriteFilled: {
        color: red['A400'],
        '&:hover': {
            color: red['A700']
        }
    }
});
const defProduct: ProductInterface = {
    id: null,
    name: '',
    description: '',
    img: '',
    price: '',
    quantity: 0,
    wishlisted: false
}
const ProductDetail: FunctionComponent<any> = ({ match }) => {
    const classes = useStyles();
    const [product, setProduct] = useState(defProduct);
    useEffect(() => {
        //call product by id
        get(`${urls.productbase}${urls.product.byId}${match.params.id}`)
            .then(response => {
                const product: ProductInterface = response.data;
                product.wishlisted = localStorage.getItem('product' + product.id) !== null;
                setProduct(product);
            });
    }, [match.params.id]);
    const addToWishList = (productId: number | null) => {
        if (product.wishlisted) {
            localStorage.removeItem('product' + productId);
        } else {
            localStorage.setItem('product' + productId, 'Y');
        }
        product.wishlisted = !product.wishlisted
        setProduct({ ...product });
    }
    return (
        <Card className={classes.root}>
            {product.id ?
                <CardContent>
                    <div style={{ fontWeight: 'bold', fontSize: '2em' }}>
                        {product.name}
                        <FavoriteIcon onClick={() => { addToWishList(product.id) }} className={classes.favourite + " " + (product.wishlisted ? classes.favouriteFilled : classes.favouriteBlank)} />
                    </div>
                    <div>
                        <div style={{ display: 'flex', width: 'calc(100vw - 145px)' }}>
                            <div style={{ flex: '400px 0' }}>
                                <div>
                                    <img src={product.img} alt={"Prouct"} style={{ height: '380px', borderRadius: '5px' }}></img>
                                </div>
                                <div>
                                    <Button ><ShoppingCartIcon /> Add to Cart</Button>
                                    <Button style={{ marginLeft: '137px' }}><ShopIcon /> Buy Now</Button>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div>
                                    <h3>{product.description}</h3>
                                </div>
                                <div>
                                    <h4>Price : &#8377;{formatter(product.price)}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                :
                <CardContent>
                    Product not found
            </CardContent>
            }
        </Card >
    )
}

export default withRouter(ProductDetail);