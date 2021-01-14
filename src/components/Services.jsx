import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
    learnButton:{
        ...theme.typography.learnMoreButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        marginTop: "1em",
        [theme.breakpoints.down("sm")]:{
            marginBottom: "2em"
        }
    },
    specialText:{
        color: theme.palette.secondary.light
    },
    icon:{
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        }
    },
    subtitle:{
        marginBottom: "1em"
    },
    serviceBlock:{
        marginTop: "10em",
        [theme.breakpoints.down("sm")]:{
            textAlign: "center",
        },
        [theme.breakpoints.down("xs")]:{
            padding: 5
        }
    }
}));

const Services = (props) => {
    const classes = useStyles();
    
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid container direction="column">
            <Grid item style={{marginTop: matchesSm ? "1em" : "2em", marginLeft: matchesSm ? 0 : "5em"}}>
                <Typography gutterBottom variant="h2" align={matchesSm ? "center" : undefined}>
                    Services
                </Typography>
            </Grid>
            <Grid item> {/*-----ios/Android block-------*/}
                <Grid  className={classes.serviceBlock} container direction="row" style={{marginTop: matchesSm ? "1em" : "5em"}} justify={matchesSm ? "center" : "flex-end"}>
                    <Grid item style={{width:matchesSm ? undefined : "35em"}}>
                        <Typography variant="h4">
                            ios/Android App Developement
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionally. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Increase your web exprience or create a standalone app {matchesSm ? null : <br />} with eighter mobile platform
                        </Typography>
                        <Button component={Link} to="/mobile" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} variant="outlined" className={classes.learnButton}>
                        <span style={{marginRight:10}}> Learn more </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon} style={{marginRight: matchesSm ? 0 : "5em"}}>
                        <img src={mobileIcon} alt="mobile" width="250em" />
                    </Grid>
                </Grid>
            </Grid>  {/*-----ios/Android block-------*/}
            <Grid item> {/*-----custom software block-------*/}
                <Grid  className={classes.serviceBlock} container direction="row" justify={matchesSm ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSm ? 0 : "5em"}}>
                        <Typography variant="h4">
                            Custom Software Developement
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save time. Save money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital soloutions from investigation <br />  to {" "}
                            <span className={classes.specialText}> celebration </span> 
                        </Typography>
                        <Button component={Link} to="/customSoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1);}} variant="outlined" className={classes.learnButton}>
                        <span style={{marginRight:10}}> Learn more </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img src={customSoftwareIcon} alt="custom software" />
                    </Grid>
                </Grid>
            </Grid> {/*-----custom software block-------*/}
            <Grid item> {/*-----website block-------*/}
                <Grid  className={classes.serviceBlock} container style={{marginBottom: "10em"}} direction="row" justify={matchesSm ? "center" : "flex-end"}>
                    <Grid item  style={{width: matchesSm ? undefined : "35em"}}>
                        <Typography variant="h4">
                            Website Developement
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Ritch more. Discover more. Sell more.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optomize for Search Engines{matchesSm ? null : <br />} build for speed.
                        </Typography>
                        <Button component={Link} to="/website" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} variant="outlined" className={classes.learnButton}>
                        <span style={{marginRight:10}}> Learn more </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon} style={{marginRight: matchesSm ? 0 : "5em"}}>
                        <img src={websiteIcon} alt="website" width="250em" />
                    </Grid>
                </Grid>
            </Grid>  {/*-----website block-------*/}
        </Grid>
    )
}

export default Services;