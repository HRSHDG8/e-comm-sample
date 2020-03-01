import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, CardContent, makeStyles, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { ProductInterface } from './Product';
import shantam from '../../../../images/profile/shantam.jpg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShopIcon from '@material-ui/icons/Shop';
const useStyles = makeStyles({
    root: {
        width: 'calc(100vw - 100px)',
        display: 'inline-flex',
        padding: '10px',
        margin: '10px',
        height: 'calc(100vh - 110px)',
        boxShadow: '0 0 9px 2px rgba(0,0,0,0.47)'
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
        const product: ProductInterface = {
            id: 2,
            name: 'Copy Shantam',
            description: 'Haryanvi',
            img: shantam,
            price: '1000',
            quantity: 3,
            wishlisted: false
        }
        setProduct(product);
        console.log(match.params.id);
    }, [match.params.id]);

    return (
        <Card className={classes.root}>
            {product.id ?
                <CardContent>
                    <div style={{ fontWeight: 'bold', fontSize: '2em' }}>
                        {product.name}
                    </div>
                    <div>
                        <div style={{ display: 'flex', width: 'calc(100vw - 145px)' }}>
                            <div style={{ flex: '400px 0' }}>
                                <div>
                                    <img src={product.img} style={{ width: '380px', borderRadius: '5px' }}></img>
                                </div>
                                <div>
                                    <Button ><ShoppingCartIcon /> Add to Cart</Button>
                                    <Button style={{ marginLeft: '137px' }}><ShopIcon /> Buy Now</Button>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div>
                                    Product Description
                                </div>
                                <div>
                                    Others
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
        </Card>
    )
}

export default withRouter(ProductDetail);