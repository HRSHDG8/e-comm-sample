import { Button, CardActions } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { blue, blueGrey, lightBlue, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import React, { FunctionComponent, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { formatter } from '../../../../util/currency';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ProductForm from './ProdutForm';
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
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <div className={classes.intro}>
                        <div className={classes.imgCnt} >
                            <img className={classes.imageCircle} onClick={() => { }} src={product.img} alt="productImage" />
                        </div>
                    </div>

                    <div style={{ marginTop: '5px' }}>
                        <span style={{ display: 'inline-block', width: '60%' }}>
                            <h3 style={{ margin: 0, display: 'inline-block' }}>{product.name}</h3>
                        </span>
                        <span style={{ display: 'inline-block', width: '40%', textAlign: 'end', verticalAlign: 'top' }}><h3 style={{ margin: 0 }}>&#8377;{formatter(product.price)}</h3></span>
                    </div>

                    <CardActions style={{ padding: 0, marginTop: '5px' }}>
                        {
                            <>
                                <Button className={classes.button} onClick={() => { setOpen(true) }}><UpdateIcon /> Update</Button>
                                <Button className={classes.button} style={{ marginLeft: '27px' }}><DeleteForeverIcon /> Delete</Button>
                            </>
                        }
                    </CardActions>
                </CardContent>
            </Card>
            <Dialog style={{ maxWidth: '800px' }} onClose={() => { setOpen(false) }} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Product</DialogTitle>
                <ProductForm product={product} close={() => { setOpen(false) }} />
            </Dialog>
        </>
    )
}
export default withRouter(ProductCard);