import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './about/AbuoutUs';
import classNames from './Body.module.css';
import Home from './home/Home';
import LeftNavigation from './leftNav/LeftNavigation';
import Login from './login/Login';

const Body: FunctionComponent<any> = ({ user, setUser, open, setOpen, product }) => {

    const userId = localStorage.getItem("user-id");
    return (
        <div className={classNames.mainContent} style={{ marginLeft: user !== '' ? (open ? '240px' : '60px') : '0px' }}>
            {userId === null ? null : <LeftNavigation open={open} setOpen={setOpen} />}
            <Switch>
                <Route exact path={["/", "home"]}>
                    <Home open={open} setOpen={setOpen} product={product}></Home>
                </Route>
                <Route exact path="/login">
                    <Login setUser={setUser}></Login>
                </Route>
                <Route exact path="/about">
                    <AboutUs />
                </Route>
            </Switch>
        </div>
    )
}
export default Body;