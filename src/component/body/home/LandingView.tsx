import { Typography } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import Carousel from './Carousel';
import { tutorialSteps } from './home.products';
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

const LandingView: FunctionComponent = () => {
    const classes = useStyles();

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
                        <Carousel content={tutorialSteps} />
                    </div>
                </Paper>
                <Paper elevation={10} style={{ padding: '10px', display: 'flex', height: 'calc(100vh - 492px)', boxShadow: '0 0 9px 0px rgba(0,0,0,0.47)' }}>

                </Paper>
            </div>
        </ThemeProvider>

    );
}
export default LandingView;