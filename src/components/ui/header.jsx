import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
      marginBottom:"2em"
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom:"1.25em"
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]:{
      height:"7em"
    },
    [theme.breakpoints.down("xs")]:{
      height:"5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px",
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginRight: "25px",
    marginLeft: "50px",
    "&:hover":{
      backgroundColor: theme.palette.secondary.light
  }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: "0"
  },
  menuItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
    "&:hover": {
      opacity: "1",
    },
  },
  drawerIconContainer:{
    marginLeft: "auto",
    "&:hover":{
      backgroundColor:"transparent"
    }
  },
  drawerIcon:{
    height:"50px",
    width:"50px"
  },
  drawer:{
    backgroundColor: theme.palette.common.blue
  },
  drawerItem:{
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerSelectedItem:{
    "& .MuiListItemText-root":{
      opacity:1
    }
  },
  drawerItemEstimate:{
    backgroundColor: theme.palette.common.orange
  },
  appbar:{
    zIndex: theme.zIndex.modal + 1
  }
}));

const Header = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer,setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOption = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
    { name: "Costum Software Development", link: "/customSoftware", activeIndex: 1, selectedIndex: 1 },
    { name: "ios/Android App Development", link: "/mobile", activeIndex: 1, selectedIndex: 2 },
    { name: "Website App Development", link: "/website", activeIndex: 1, selectedIndex: 3 },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0},
    { name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaHasPopUp: anchorEl ? "true" : undefined, mouseover:(event) => handleClick(event)},
    { name: "The Revolution", link: "/revolution", activeIndex: 2},
    { name: "About Us", link: "/about", activeIndex: 3},
    { name: "Contact Us", link: "/contact", activeIndex: 4}
  ]

  useEffect(() => {
    [...menuOption,...routes].forEach(route => {
      switch(window.location.pathname){
        case `${route.link}`:
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
            if(route.selectedIndex && props.selectedIndex !== route.selectedIndex){
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break
        case "/estimate":
            props.setValue(5);
            break
        default:
          break
      }
    })
  },[props.value, props.selectedIndex.menuOption, routes, menuOption, props.selectedIndex,props]);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS}
       disableDiscovery={iOS} open={openDrawer} 
       onOpen={() => setOpenDrawer(true)} onClose={() => setOpenDrawer(false)}  classes={{paper: classes.drawer}}>
          <div className={classes.toolbarMargin} />
         <List disablePadding>
           {routes.map((route) => (
             <ListItem key={`${route}${route.activeIndex}`} selected={props.value === route.activeIndex} component={Link}
              to={route.link} divider button 
              onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex);}}
              classes={{selected:classes.drawerSelectedItem}}>
               <ListItemText disableTypography className={classes.drawerItem}>
                 {route.name}
               </ListItemText>
             </ListItem>
           ))}
           <ListItem selected={props.value === 5} classes={{root: classes.drawerItemEstimate, selected:classes.drawerSelectedItem}} component={Link} to="/estimate" divider button onClick={() => {setOpenDrawer(false); props.setValue(5);}}>
             <ListItemText className={classes.drawerItem} disableTypography>
                Free Estimate
             </ListItemText>
           </ListItem>
         </List>
       </SwipeableDrawer>
       <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
         <MenuIcon className={classes.drawerIcon} />
       </IconButton>
    </React.Fragment>
  )

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value<5 ? props.value : false}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route,index) => (
          <Tab key={`${route}${index}`} component={Link} to={route.link} 
          className={classes.tab} label={route.name} aria-owns={route.ariaOwns} 
          aria-haspopup={route.ariaHasPopUp} onMouseOver={route.mouseover}></Tab>
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        className={classes.button}
        onClick={() => props.setValue(5)}
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        classes={{ paper: classes.menu }}
        onClose={handleClose}
        elevation={0}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{zIndex:1500}}
        keepMounted
      >
        {props.value === 1
          ? menuOption.map((option, i) => (
              <MenuItem
                key={option.name}
                component={Link}
                to={option.link}
                selected={i === props.selectedIndex}
                classes={{ root: classes.menuItem }}
                onClick={(event) => {
                  handleMenuItemClick(event, i);
                  props.setValue(1);
                }}
              >
                {option.name}
              </MenuItem>
            ))
          : menuOption.map((option, i) => (
              <MenuItem
                key={option.name}
                component={Link}
                to={option.link}
                selected={false}
                classes={{ root: classes.menuItem }}
                onClick={(event) => {
                  handleMenuItemClick(event, i);
                  props.setValue(1);
                }}
              >
                {option.name}
              </MenuItem>
            ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar} position="fixed">
          <ToolBar disableGutters>
            <Button
              disableRipple
              onClick={() => {
                props.setValue(0);
              }}
              className={classes.logoContainer}
              component={Link}
              to="/"
            >
              <img src={logo} className={classes.logo} alt="hi" />
            </Button>
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};
export default Header;
