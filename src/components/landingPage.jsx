import React from "react";
import {Link} from "react-router-dom";
import Lottie from "react-lottie";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/callToAction";

const useStyles = makeStyles(theme => ({
    animation:{
        maxWidth: "40em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("xs")]:{
            maxWidth: "30em"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        width: 145,
        height:45,
        marginRight: 40,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer:{
        marginTop: "1em"
    },
    learnButtonHero:{
        ...theme.typography.learnMoreButton,
        height: 45,
        fontSize: "0.9rem"
    },
    mainContainer:{
        marginTop: "5em",
        [theme.breakpoints.down("md")]:{
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "2em"
        }
    },
     heroTextContainer:{
         minWidth: "21.5em",
         marginLeft: "1em",
         [theme.breakpoints.down("xs")]:{
             marginLeft: 0
         }
     },
     specialText:{
         color: theme.palette.secondary.light
     },
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
     subtitle:{
         marginBottom: "1em"
     },
     serviceBlock:{
         marginTop: "12em",
         [theme.breakpoints.down("sm")]:{
             textAlign: "center",
         },
         [theme.breakpoints.down("xs")]:{
             padding: 5
         }
     },
     icon:{
         marginLeft: "2em",
         [theme.breakpoints.down("xs")]:{
             marginLeft: 0
         }
     },
     revolutionBackground:{
         width:"100%",
         height: "100%",
         backgroundImage: `url(${revolutionBackground})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center"
     },
     revolutionCard:{
         position:"absolute",
         boxShadow: theme.shadows[10],
         padding: "10em",
         borderRadius: 15,
         [theme.breakpoints.down("sm")]:{
             paddingTop: "8em",
             paddingBottom: "8em",
             paddingRight: 0,
             paddingLeft: 0,
             borderRadius: 0,
             width: "100%"
         }
     },
     infoBackground:{
        width:"100%",
        height: "80em",
        backgroundImage: `url(${infoBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
     }
}));

const LandingPage = (props) => {
    const classes = useStyles();

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/*-----hero block-------*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">
                            <div>Bringing West Coast Technology <br/> to the Midwest</div>
                        </Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} variant="outlined" className={classes.learnButtonHero}>
                                    <span style={{marginRight:10}}> Learn more </span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item  className={classes.animation}>
                        <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
                    </Grid>
                </Grid>
            </Grid> {/*-----hero block-------*/}
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
            <Grid item> {/*-----ios/Android block-------*/}
                <Grid  className={classes.serviceBlock} container direction="row" justify={matchesSm ? "center" : "flex-end"}>
                    <Grid item>
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
                        <img src={mobileIcon} alt="mobile" />
                    </Grid>
                </Grid>
            </Grid>  {/*-----ios/Android block-------*/}
            <Grid item> {/*-----website block-------*/}
                <Grid  className={classes.serviceBlock} container direction="row" justify={matchesSm ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSm ? 0 : "5em"}}>
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
                    <Grid item className={classes.icon}>
                        <img src={websiteIcon} alt="website" />
                    </Grid>
                </Grid>
            </Grid>  {/*-----website block-------*/}
            <Grid item> {/*---revolution block----*/}
                <Grid container style={{ height:"100em", marginTop: "12em" ,alignItems:"center"}} justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign: "center"}}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visonary insights coupled with cutting edge technology is a 
                                        {matchesSm ? undefined : <br />} recipe for revolution.
                                    </Typography>
                                    <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} variant="outlined" className={classes.learnButton}>
                                    <span style={{marginRight:10}}> Learn more </span>
                                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>  {/*---revolution block----*/}
            <Grid item> {/*---info block----*/}
                <Grid container className={classes.infoBackground} direction="row" alignItems="center">
                    <Grid item container style={{position: "absolute", textAlign: matchesXs ? "center" : "inherit"}} direction={matchesXs ? "column" : "row"}>
                        <Grid sm item style={{marginLeft: matchesXs ? 0 : matchesSm ? "2em" : "5em"}}>
                            <Grid container style={{marginBottom:  matchesXs ? "10em" : 0}} direction="column">
                                <Typography variant="h2" style={{color: "white"}}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let's get personal.
                                </Typography>
                                <Grid item>
                                    <Button component={Link} to="/about" onClick={() => props.setValue(3)} style={{color:"white", borderColor:"white"}} variant="outlined" className={classes.learnButton}>
                                        <span style={{marginRight:10}}> Learn more </span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item style={{marginRight: matchesXs ? 0 : matchesSm ? "2em" : "5em", textAlign: matchesXs ? "center" : "right"}}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color: "white"}}>
                                    Contact Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Say hello! <span role="img" aria-label="waving hand">👋️</span>
                                </Typography>
                                <Grid item>
                                    <Button component={Link} to="/contact" onClick={() => props.setValue(4)} style={{color:"white", borderColor:"white"}} variant="outlined" className={classes.learnButton}>
                                        <span style={{marginRight:10}}> Learn more </span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>  {/*---info block----*/}
            <Grid item> {/*---callToAction block----*/}
                <CallToAction setValue={props.setValue} />
            </Grid> {/*---callToAction block----*/}
        </Grid>
    )
}

export default LandingPage;


