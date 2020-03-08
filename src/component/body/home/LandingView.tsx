import { Typography } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React, { FunctionComponent, useState, useEffect } from 'react';
import Carousel from './Carousel';
import { tutorialSteps } from './home.products';
import { get, urls } from '../../../rest/rest.service';
import { ProductInterface } from './product/Product';
import { formatter } from '../../../util/currency';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: blue[500]
        },
        background: {
            paper: 'white',
            default: grey[100]
        }
    }
})
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: '100%'
            },
        },
    }),
);

const LandingView: FunctionComponent<any> = ({ history }) => {
    const classes = useStyles();
    const [content, setContent] = useState<any[]>([]);
    const [product, setProducts] = useState<ProductInterface[]>([]);
    useEffect(() => {
        get(`${urls.productbase}${urls.product.all}`)
            .then(response => {
                const products: ProductInterface[] = response.data;
                setProducts(products.reverse().slice(0, 5));
                setContent(response.data.map((product: ProductInterface) => {
                    return {
                        label: product.name,
                        imgPath: product.img
                    }
                }))
            })
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper elevation={10} style={{ padding: '10px', display: 'flex', height: '373px', boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)' }}>
                    <div style={{ flex: 1, marginRight: '10px', borderRight: '1px solid rgba(0,0,0,0.37)' }}>
                        <Typography variant="h4" style={{ textAlign: "center" }}>
                            Welcome to Shop - IT
                        </Typography>
                    </div>
                    <div style={{ flex: '400px 0' }}>
                        <Carousel content={(content.length > 0) ? content : tutorialSteps} />
                    </div>
                </Paper>
                <Paper elevation={10} style={{ padding: '10px', display: 'flex', height: 'calc(100vh - 492px)', boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)', overflowX: 'auto', overflowY: 'hidden' }}>
                    {
                        product.map((product, index) => {
                            return <span key={index} style={{ boxShadow: '0 0 7px 0px rgba(0,0,0,0.47)', padding: '6px', borderRadius: '10px', marginRight: '10px', cursor: 'pointer' }} onClick={() => { history.push(`/product/${product.id}`) }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={product.img} alt={product.name} style={{ height: 'calc(100vh - 532px)' }}></img>
                                            </td>
                                            <td style={{ verticalAlign: 'top' }}>
                                                <div>{product.name}</div>
                                                <div>&#8377;{formatter(product.price)}</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </span>
                        })
                    }
                </Paper>
            </div>
        </ThemeProvider>

    );
}
export default withRouter(LandingView);