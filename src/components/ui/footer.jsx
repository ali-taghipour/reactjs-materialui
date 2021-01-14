import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles(theme => ({
    footer:{
        backgroundColor: theme.palette.common.blue,
        width:"100%",
        position:"relative",
        zIndex:"1350"
    },
    adornment:{
        width:"25em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]:{
            width:"21em"
        },
        [theme.breakpoints.down("xs")]:{
            width:"15em"
        }
    },
    mainContainer:{
        position: "absolute"
    },
    link:{
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem:{
        margin: "3rem"
    },
    icon:{
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]:{
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContainer:{
        position: "absolute",
        marginTop: "-5.5em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]:{
            right: "0.5em"
        }
    }
}));

const Footer = (props) => {
    const classes = useStyles();

    return(
    <footer className={classes.footer}>
        <Hidden mdDown>
            <Grid container className={classes.mainContainer} justify="center">
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/" onClick={() => props.setValue(0)} >Home</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/services" onClick={() =>  {props.setValue(1); props.setSelectedIndex(0)}} >Services</Grid>
                        <Grid item className={classes.link} component={Link} to="/customSoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} >Costum Software Delopment</Grid>
                        <Grid item className={classes.link} component={Link} to="/mobile" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>ios/Android Development</Grid>
                        <Grid item className={classes.link} component={Link} to="/website" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>Website App Development</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>The Revolution</Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>Vision</Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>Technology</Grid>
                        <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => props.setValue(2)}>Process</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)}>About Us</Grid>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)}>History</Grid>
                        <Grid item className={classes.link} component={Link} to="/about" onClick={() => props.setValue(3)}>Team</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}> 
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to="/contact" onClick={() => props.setValue(4)}>Contact Us</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>
        
        <img className={classes.adornment} alt="footer adornment" src={footerAdornment}/>

        <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
            <Grid item component={"a"} href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                <img alt="facebook" src={facebook}  className={classes.icon} />
            </Grid>
            <Grid item  component={"a"} href="https://instagram.com" rel="noopener noreferrer" target="_blank"> 
                <img alt="instagram" src={instagram}  className={classes.icon} />
            </Grid>
            <Grid item  component={"a"} href="https://twitter.com" rel="noopener noreferrer" target="_blank">
                <img alt="twitter" src={twitter}  className={classes.icon} />
            </Grid>
        </Grid>
    </footer>
    )
}

export default Footer;
    
