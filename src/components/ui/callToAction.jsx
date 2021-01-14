import React from "react";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";


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
    callToActionBackground:{
        width: "100%",
        height: "50em",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        alignItems: "center",
        [theme.breakpoints.down("xs")]:{
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        width: 150,
        height:50,
        marginRight: "2em",
        marginLeft: "2em",
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft: 0,
            marginRight: 0
        }
    }
}));

const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid container direction={matchesSm ? "column" : "row"} className={classes.callToActionBackground} justify={matchesSm ? "center" : "space-between"}>
            <Grid item style={{marginLeft: matchesSm ?  0 : "5em", textAlign: matchesSm ? "center" : "inherit"}}>
                <Grid container direction="column">
                    <Typography variant="h2">
                        Simple Software. <br /> Revolutionary Results.
                    </Typography>
                    <Typography style={{fontSize: "1.5rem"}} variant="subtitle2">
                        Take advantage of the <br /> 21th Century.
                    </Typography>
                    <Grid container justify={matchesSm ? "center" : undefined} item>
                        <Button component={Link} to="/revolution" onClick={() => props.setValue(2)} variant="outlined" className={classes.learnButton}>
                            <span style={{marginRight:10}}> Learn more </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} className={classes.estimateButton}>
                    Free Estimate
                </Button>
            </Grid>
        </Grid>
    )
}

export default CallToAction;
