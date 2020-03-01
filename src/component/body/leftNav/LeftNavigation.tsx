import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { blue } from '@material-ui/core/colors';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: '60px !important',
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        paper: {
            background: blue[800],
            color: blue[500]
        }
    })
);

const LeftNavigation: FunctionComponent<any> = ({ open, setOpen, history }) => {
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const route = (routeName: string) => {
        history.push(routeName);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx(classes.paper, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar} style={{ background: blue[900] }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List >
                    {[{ label: 'Home', component: <HomeIcon />, route: '/' }, { label: 'Account', component: <AccountBoxIcon />, route: 'account' }, { label: 'Orders', component: <LocalShippingIcon />, route: 'orders' }].map((listItem, index) => (
                        <ListItem button key={index} style={{ color: 'white' }}>
                            <ListItemIcon onClick={() => { route(listItem.route) }} style={{ color: 'white' }}>{listItem.component}</ListItemIcon>
                            <ListItemText primary={listItem.label} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {[{ label: 'Info', component: <InfoIcon />, route: 'info' }, { label: 'About Us', component: <CodeIcon />, route: 'about' }].map((listItem, index) => (
                        <ListItem button key={index} style={{ color: 'white' }}>
                            <ListItemIcon onClick={() => { route(listItem.route) }} style={{ color: 'white' }}>{listItem.component}</ListItemIcon>
                            <ListItemText primary={listItem.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
export default withRouter(LeftNavigation);