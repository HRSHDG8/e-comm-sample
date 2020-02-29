import React, { FunctionComponent } from 'react';
import classNames from './Body.module.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
interface BodyProps {
    setUser: Function
}
const Body: FunctionComponent<BodyProps> = ({ setUser }) => {
    return (
        <div className={classNames.mainContent}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home setUser={setUser}></Home>
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