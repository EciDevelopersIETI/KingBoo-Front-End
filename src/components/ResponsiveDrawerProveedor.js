import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EditIcon from '@material-ui/icons/Edit';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#F9A500",
      color: 'black'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F9A500"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column'
  },
  imageLogo: {
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 40,
  }

}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const email = localStorage.getItem('user');
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <img src={localStorage.getItem("imgUrl")} width="150" height="150" style={{ border: '3px solid black', borderRadius: '50%' }}></img>
        <List>
          <ListItem button key={"Username"}>
            <ListItemIcon>
              <AccountBoxIcon> </AccountBoxIcon>
            </ListItemIcon>
            <ListItemText primary={localStorage.getItem("username")} />
          </ListItem>
          <ListItem button key={"email"}>
            <ListItemIcon>
              <AlternateEmailIcon></AlternateEmailIcon>
            </ListItemIcon>
            <ListItemText primary={localStorage.getItem("user")} />
          </ListItem>
        </List>

      </div>
      <Divider />
      <div>
        <List>
          <ListItem button onClick={() => history.push("/homeproveedor")}>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary={"Mis reservas"} />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={() => history.push("/editarsitioproveedor")}>
            <ListItemIcon><EditIcon /></ListItemIcon>

            <ListItemText primary={"Editar proveedor"} />
          </ListItem>
        </List>
        <List>
          <ListItem button onClick={() => history.push("/statsprovider")}>
            <ListItemIcon><EqualizerIcon /></ListItemIcon>
            <ListItemText primary={"Estadisticas"} />
          </ListItem>
        </List>
        <List>
          {['Logout'].map((text, index) => (
            <ListItem button key={text} onClick={() => history.push("/login")}>
              <ListItemIcon>{index % 2 === 0 ? <ExitToAppIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Proveedor KingBoo
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {props.childComponent}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
