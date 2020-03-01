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
                <Paper elevation={10} style={{ padding: '10px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <Typography variant="h4" style={{ textAlign: "center" }}>
                            Welcome to Shop - IT
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Carousel />
                    </div>
                </Paper>
            </div>
        </ThemeProvider>

    );
}
export default LandingView;