import React, { FunctionComponent, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { blueGrey, lightBlue, blue, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, Button } from '@material-ui/core';
import { formatter } from '../../../../util/currency';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShopIcon from '@material-ui/icons/Shop';
export type ProductInterface = {
    id: number | null;
    name: string;
    img: any;
    price: any;
    wishlisted: boolean;
    description: string;
    quantity: number;
}
const useStyles = makeStyles({
    root: {
        width: 300,
        display: 'inline-flex',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)'
    },
    imageCircle: {
        height: 250,
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: '0 0 8px 4px rgba(0,0,0,0.3)',
        '&:hover': {
            boxShadow: '0 0 8px 4px rgba(0,0,0,0.5)'
        }
    },
    intro: {
        display: 'flex',
        width: '245px'
    },
    imgCnt: {
        flex: '250px 1',
        height: '250px',
        display: 'flex',
        justifyContent: 'center'

    },
    nameCnt: {
        flex: 1,
        marginTop: '10px',
        marginRight: '25px',
        textAlign: 'end',
        color: 'white'
    },
    infoCnt: {
        marginTop: '10px',
        height: 'calc(100% - 175px);',
        background: blueGrey[700],
        borderRadius: 15,
        color: 'white',
        boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)'
    },
    link: {
        color: lightBlue[500],
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    button: {
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 3,
        paddingRight: 3,
        color: 'white',
        background: blue[500],
        '&:hover': {
            background: blue[800]
        }
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

const ProductCard: FunctionComponent<any> = ({ product, history }) => {
    const [wishList, setWishListed] = useState(product.wishlisted);
    const classes = useStyles();
    const open = (id: number) => {
        history.push("/product/" + id);
    }
    const addToWishList = (productId: number) => {
        if (wishList) {
            localStorage.removeItem('product' + productId);
        } else {
            localStorage.setItem('product' + productId, 'Y');
        }
        setWishListed(!wishList);
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.intro}>
                    <div className={classes.imgCnt} >
                        <img className={classes.imageCircle} onClick={() => { open(product.id) }} src={product.img} alt="productImage" />
                    </div>
                </div>

                <div style={{ marginTop: '5px' }}>
                    <span style={{ display: 'inline-block', width: '60%' }}>
                        <h3 style={{ margin: 0, display: 'inline-block' }}>{product.name}</h3>
                        <FavoriteIcon onClick={() => { addToWishList(product.id) }} className={classes.favourite + " " + (wishList ? classes.favouriteFilled : classes.favouriteBlank)} />
                    </span>
                    <span style={{ display: 'inline-block', width: '40%', textAlign: 'end', verticalAlign: 'top' }}><h3 style={{ margin: 0 }}>&#8377;{formatter(product.price)}</h3></span>
                </div>

                <CardActions style={{ padding: 0, marginTop: '5px' }}>
                    {product.quantity < 1 ?
                        "Out of Stock"
                        :
                        <>
                            <Button className={classes.button}><ShoppingCartIcon /> Add to Cart</Button>
                            <Button className={classes.button} style={{ marginLeft: '27px' }}><ShopIcon /> Buy Now</Button>
                        </>
                    }
                </CardActions>
            </CardContent>
        </Card>

    )
}
export default withRouter(ProductCard);