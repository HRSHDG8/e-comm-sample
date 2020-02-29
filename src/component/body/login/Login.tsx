import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { blue, red } from '@material-ui/core/colors';
import banner from '../../../images/e-comm.jpg';
import { validUser } from '../../../store/AuthenticationStore';
import _ from 'lodash';
const useClasses = makeStyles((theme: Theme) =>
    createStyles({
        textRoot: {
            '& > *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }),
);
const useStyles = makeStyles({
    root: {
        width: 300,
        marginTop: 30,
        position: 'absolute'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    loginCard: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        top: '100px',
        right: '50%'
    }
});
interface LoginProps {
    setUser: Function
}
const Login: FunctionComponent<LoginProps> = ({ setUser }) => {
    const classes = {
        ...useStyles(), ...useClasses()
    };
    useEffect(() => {
        if (localStorage.getItem("user-id") !== null) {
            window.location.href = "/";
        }
    })
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [userNameHelper, setUserNameHelper] = useState('');
    const [passWordError, setPasswordError] = useState(false);
    const [passwordHelper, setPasswordHelper] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const reset = () => {
        setPasswordError(false);
        setUserNameError(false);
        setPasswordHelper('');
        setUserNameHelper('');
        setLoginMessage('');
    }
    const clear = () => {
        reset();
        setUserName('');
        setPassword('');
    }
    const buttonClick = () => {
        if (_.isEmpty(userName) || _.isEmpty(password)) {
            if (_.isEmpty(userName)) {
                setUserNameError(true);
                setUserNameHelper('User Name empty');
            }
            if (_.isEmpty(password)) {
                setPasswordError(true);
                setPasswordHelper('Password empty');
            }
        } else {
            const user = validUser.find(user => user.userName === userName);
            if (!_.isEmpty(user) && user?.password === btoa(password)) {
                localStorage.setItem("user-id", user.userName);
                setUser(user.userName);
                window.location.href = '/';

            } else {
                setLoginMessage('Invalid User Name or Password');
            }
        }

    }
    return (
        <>
            <div style={{ width: "100%", height: "30%", background: blue[300] }}></div>
            <div style={{ width: "100%", height: "70%", background: blue[100], overflow: 'hidden' }}>
                <img src={banner} alt="logo" style={{ width: '100%' }}></img>
            </div>
            <div className={classes.loginCard}>
                <Card className={classes.root}>
                    <CardContent>
                        <>
                            {loginMessage !== '' ? <span style={{ color: red[500], fontSize: '12px' }}>{loginMessage}</span> : null}
                            <form className={classes.textRoot} noValidate autoComplete="off">
                                <TextField error={userNameError} helperText={userNameHelper} value={userName} onChange={(e) => { reset(); setUserName(e.target.value) }} label="User Name" />
                                <TextField error={passWordError} helperText={passwordHelper} value={password} type="password" onChange={(e) => { reset(); setPassword(e.target.value) }} label="Password" />
                            </form>
                        </>
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {loginMessage !== '' ? <Button size="small" onClick={clear}>Clear</Button> : null}
                        <Button size="small" onClick={buttonClick}>Login</Button>
                    </CardActions>
                </Card>
            </div >
        </>
    )
}
export default Login;