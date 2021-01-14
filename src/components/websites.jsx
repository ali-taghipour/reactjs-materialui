import React from "react";
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

import analytics from "../assets/analytics.svg";
import eCommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";

import CallToAction from "./ui/callToAction";

const useStyles = makeStyles((theme) => ({
    arrowButtonContainer: {
        marginTop: "0.5em",
      },
      rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft: "2em",
            paddingRight: "2em"
        }
      },
      heading:{
          maxWidth: "40em"
      },
      paragraphContainer:{
          maxWidth: "30em"
      }
}));

const Websites = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    
    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <Grid container direction="column">
            <Grid item container style={{marginTop: matchesXs ? "1em" : "2em"}} className={classes.rowContainer} direction="row" justify={matchesMd ? "center" : undefined}>
                <Hidden mdDown>
                    <Grid
                    item
                    style={{ marginLeft: "-3.5em", marginRight: "1em" }}
                    className={classes.arrowButtonContainer}
                    >
                    <IconButton
                        component={Link}
                        to="/mobile"
                        onClick={() => {
                        props.setValue(1);
                        props.setSelectedIndex(2);
                        }}
                        style={{ backgroundColor: "transparent" }}
                    >
                        <img src={backArrow} alt="back to Mobile App Development" />
                    </IconButton>
                    </Grid>
                </Hidden>
                <Grid item align={matchesMd ? "center" : undefined} container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="h2">Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="body1">
                            Having a website is a necessity in today's business world. They give you one central, public location to get people know
                            who are you, what do you do and why you're best at it.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="body1">
                            From simply having your hours posting to have a full fledged online store.
                            making yourself accessible as possible to users online drives growth and enables you 
                            to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowButtonContainer}>
                        <IconButton
                            onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(0);
                            }}
                            component={Link}
                            to="/services"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img
                            src={forwardArrow}
                            alt="Forward to Services Page"
                            />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container style={{marginTop: "15em"}} direction={matchesSm ? "column" : "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSm ? "center" : undefined} variant="h4" gutterBottom>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} style={{marginLeft: "-2.75em"}} alt="analytics" />
                        </Grid>
                    </Grid>
                </Grid>
               <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1">
                        Knowledge is power, and data is 21'th century gold.Analyzing this data can
                        reveal hidden patterns and trends in your business, empowering you to make smarter
                        decision with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container style={{marginTop: "15em", marginBottom: "15em"}} direction={matchesSm ? "column" : "row"} justify="flex-end" alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item align="center"> 
                            <Typography variant="h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={eCommerce} alt="ecommerce" />
                        </Grid>
                    </Grid>
                </Grid>
               <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSm ? 0 : "1em"}}>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1" paragraph>
                        It's no secret that people like to shop online.
                    </Typography>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1"  paragraph>
                        In 2017 over $2.3 trillion was spent in e-commerce and it's time for slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSm ? "column" : "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSm ? "center" : undefined} variant="h4" gutterBottom>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="outreach" />
                        </Grid>
                    </Grid>
                </Grid>
               <Grid item className={classes.paragraphContainer} style={{marginLeft: matchesSm ? 0 : "1em"}}>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1">
                        Draw people in with dazzing website.
                    </Typography>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1">
                        Showing off your products online is a great way to help customers 
                        decide what's right for them before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container style={{marginTop: "15em", marginBottom: "15em"}} direction={matchesSm ? "column" : "row"} justify="flex-end" alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item align="center"> 
                            <Typography variant="h4" gutterBottom>
                                Search Engine <br /> Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="seo" />
                        </Grid>
                    </Grid>
                </Grid>
               <Grid item align={matchesSm ? "center" : undefined} className={classes.paragraphContainer} style={{marginLeft: matchesSm ? 0 : "1em"}}>
                    <Typography variant="body1" paragraph>
                        How often have you ever been to the second page og Google results?
                    </Typography>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1" paragraph>
                        If your like us, probably never.
                    </Typography>
                    <Typography align={matchesSm ? "center" : undefined} variant="body1" paragraph>
                        Customers don't go there eighter, so we make sure your website is desined to end up on top.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )
}

export default Websites;