import React, { FunctionComponent, useEffect } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 'calc(100vw - 100px)',
        display: 'inline-flex',
        padding: '10px',
        margin: '10px',
        height: 'calc(100vh - 110px)',
        boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)'
    }
});
const ProductDetail: FunctionComponent<any> = ({ match }) => {
    const classes = useStyles();
    useEffect(() => {
        //call all by productType
        console.log(match.params.id);
    }, [match.params.id]);

    return (
        <Card className={classes.root}>
            <CardContent>
                {match.params.id}
            </CardContent>
        </Card>
    )
}

export default withRouter(ProductDetail);