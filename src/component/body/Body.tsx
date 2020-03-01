import React, { FunctionComponent } from 'react';
import classNames from './Body.module.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';

const Body: FunctionComponent<any> = ({ user, setUser, open, setOpen }) => {
    return (
        <div className={classNames.mainContent} style={{ marginLeft: user !== '' ? (open ? '240px' : '60px') : '0px' }}>
            <Router>
                <Switch>
                    <Route exact path={["/", "home"]}>
                        <Home open={open} setOpen={setOpen}></Home>
                    </Route>
                    <Route exact path="/login">
                        <Login setUser={setUser}></Login>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Body;