import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { blueGrey, lightBlue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
export type Dev = {
    fName: string;
    lName: string;
    image: any;
    github?: string
    linkedIn?: string
    about: string
    company: string
};
const useStyles = makeStyles({
    root: {
        width: 300,
        display: 'inline-flex',
        padding: '10px',
        margin: '10px',
        height: 395,
        boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)'
    },
    imageCircle: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    intro: {
        display: 'flex',
        background: blueGrey[700],
        borderRadius: '55px',
        width: '245px',
        boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)'
    },
    imgCnt: {
        flex: '80px 0',
        height: '80px'
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
        height: 'calc(100% - 75px);',
        background: blueGrey[700],
        borderRadius: 15,
        color: 'white',
        boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)'
    },
    link: {
        color: lightBlue[500],
        textDecoration: 'underline',
        cursor: 'pointer'
    }
});

const Developer: FunctionComponent<Dev> = (dev: Dev) => {

    const classes = useStyles();
    const open = (url?: string) => {
        window.open(url, "_blank");
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.intro}>
                    <div className={classes.imgCnt}>
                        <img className={classes.imageCircle} src={dev.image} alt="devImage" />
                    </div>
                    <div className={classes.nameCnt}>
                        <h2 style={{ margin: 0 }}>{dev.fName}</h2>
                        <h2 style={{ margin: 0 }}>{dev.lName}</h2>
                    </div>
                </div>
                <Card className={classes.infoCnt}>
                    <CardContent>
                        <div>
                            Works@ <span style={{ fontWeight: 'bold' }}>{dev.company}</span>
                        </div>
                        <hr></hr>
                        <div style={{ textAlign: 'justify' }}>
                            {dev.about}
                        </div>
                        {dev.github ?
                            <>
                                <hr></hr>
                                <div onClick={() => { open(dev.github) }} className={classes.link}>
                                    Find my work
                                </div>
                            </>
                            : null}
                        {dev.linkedIn ?
                            <>
                                <hr></hr>
                                <div onClick={() => { open(dev.linkedIn) }} className={classes.link}>
                                    Connect with me
                                </div>
                            </>
                            : null}
                    </CardContent>
                </Card>
            </CardContent>
        </Card>

    )
}
export default Developer