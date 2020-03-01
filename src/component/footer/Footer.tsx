import { blue } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        zIndex: {
            zIndex: theme.zIndex.drawer + 1
        },
    }));
export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.zIndex} style={{ textAlign: 'right', background: blue[900], color: 'white', position: 'absolute', bottom: '0', width: '100%' }}>
            <span style={{ margin: '3px' }}>
                <i>Developed by</i> HARSH, SHANTAM, DEEPAK
            </span>
        </div>
    );
}
