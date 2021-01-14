import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Lottie from "react-lottie";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles,useTheme } from "@material-ui/core/styles";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

import integrationAnimation from "../animations/integrationAnimation/data";

import swissKnife from "../assets/swissKnife.svg";
import extendAccess from "../assets/extendAccess.svg";
import increaseEngagement from "../assets/increaseEngagement.svg";

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
      }
}));

const integrationOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


const MobileApps = (props) => {
    const classes = useStyles();
    const theme = useTheme();

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
                        to="/customSoftware"
                        onClick={() => {
                        props.setValue(1);
                        props.setSelectedIndex(1);
                        }}
                        style={{ backgroundColor: "transparent" }}
                    >
                        <img src={backArrow} alt="back to Custom Software Development" />
                    </IconButton>
                    </Grid>
                </Hidden>
                <Grid item align={matchesMd ? "center" : undefined} container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="h2">ios/Android App Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="body1">
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="body1">
                            Whether you want an App for your customers, employees or yourself,
                            we can build cross platform solution for any part of your business process.
                            This opens you up to whole new world of possibilities by taking advantage
                            of phone features like the camera, GPS, push notification, and more.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMd ? "center" : undefined} variant="body1">
                            Convenience Conection.
                        </Typography>
                    </Grid>
                    </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowButtonContainer}>
                        <IconButton
                            onClick={() => {
                            props.setValue(1);
                            props.setSelectedIndex(3);
                            }}
                            component={Link}
                            to="/website"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <img
                            src={forwardArrow}
                            alt="Forward to Website Development"
                            />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction={matchesSm ? "column" : "row"} style={{marginTop:"15em", marginBottom:"15em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSm ? "center" : undefined} variant="h4">
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSm ? "center" : undefined} variant="body1">
                            Our technology enables an innate interconnection between web and mobile application.
                            puting everything you need right in one convenience place.
                        </Typography>
                        <Typography align={matchesSm ? "center" : undefined} variant="body1">
                            This allows you to extend your reach, reinvent interactions and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={integrationOptions} style={{maxWidth: "20em"}}  isStopped={true}/>
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSm ? "center" : "right"} variant="h4">
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSm ? "center" : "right"} variant="body1">
                            Our cutting-edge development process alows us to create apps for iphone,Android and tablets all at the same time.
                        </Typography>
                        <Typography align={matchesSm ? "center" : "right"} variant="body1">
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMd ? "column" : "row"} style={{marginBottom:"15em"}} className={classes.rowContainer}>
                <Grid item container alignItems="center" direction="column" md>
                    <Grid item>
                        <Typography align="center" variant="h4">
                            Extend Functinality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swissKnife} alt="Swiss knife" />
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" direction="column" style={{marginTop: matchesMd ? "10em" : 0, marginBottom: matchesMd ? "10em" : 0}} md>
                    <Grid item>
                        <Typography align="center" variant="h4">
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={extendAccess} style={{maxWidth: matchesXs ? "17em" : "28em"}} alt="Extend Access" />
                    </Grid>
                </Grid>
                <Grid item container alignItems="center" direction="column" md>
                    <Grid item>
                        <Typography align="center" variant="h4">
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={increaseEngagement} alt="Increase Engagement" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )
}

export default MobileApps;