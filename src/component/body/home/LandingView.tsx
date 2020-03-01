import { Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import React, { FunctionComponent } from 'react';
import Carousel from './Carousel';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: blue[500]
        },
        background: {
            paper: blue[600],
            default: blue[900]
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
                <Paper elevation={10} style={{ padding: '10px', display: 'flex', height: '373px' }}>
                    <div style={{ flex: 1, marginRight: '10px', borderRight: '1px solid rgba(0,0,0,0.87)' }}>
                        <Typography variant="h4" style={{ textAlign: "center" }}>
                            Welcome to Shop - IT
                        </Typography>
                    </div>
                    <div style={{ flex: '400px 0' }}>
                        <Carousel />
                    </div>
                </Paper>
                <Paper elevation={10} style={{ padding: '10px', display: 'flex', height: 'calc(100vh - 492px)' }}>

                </Paper>
            </div>
        </ThemeProvider>

    );
}
export default LandingView;