import React, { FunctionComponent, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import LandingView from './LandingView';

const Home: FunctionComponent<any> = (props: any) => {
    useEffect(() => {
        if (localStorage.getItem("user-id") === null) {
            props.history.push("login");
        }
    })
    return (
        <>
            {props.product ? <span>Product : {props.product}</span> : <LandingView />}
        </>
    )
}
export default withRouter(Home);