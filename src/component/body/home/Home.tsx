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
            <LandingView />
        </>
    )
}
export default withRouter(Home);