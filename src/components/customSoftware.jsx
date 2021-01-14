import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import SaveEnergyIcon from "../assets/bulb.svg";
import SaveTimeIcon from "../assets/stopwatch.svg";
import SaveMoneyIcon from "../assets/cash.svg";
import root from "../assets/root.svg";

import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data";
import automationAnimation from "../animations/automationAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";

import CallToAction from "./ui/callToAction";


const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
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
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleteOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
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
                to="/services"
                onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
                }}
                style={{ backgroundColor: "transparent" }}
            >
                <img src={backArrow} alt="back to services page" />
            </IconButton>
            </Grid>
        </Hidden>
        <Grid item align={matchesMd ? "center" : undefined} container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body1">
              whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body1">
              uaing regular commercial software leaves you a lot of stuff you
              don't need without some of the stuff you do need and ultimately
              controles the way you work Without using any software at all you
              risk failing behind compititors and missing out on huge saving
              from increased effciency.
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body1">
              Our custom solutions are designed from the ground up with your
              needs, wants and goals at the core. This colabirative process
              produces finally tuned software that is much more effective at
              imporoving your workflow and reducing costs than generalized
              options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body1">
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
            <Grid item className={classes.arrowButtonContainer}>
                <IconButton
                    onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                    }}
                    component={Link}
                    to="/mobile"
                    style={{ backgroundColor: "transparent" }}
                >
                    <img
                    src={forwardArrow}
                    alt="Forward to ios/Android App Development"
                    />
                </IconButton>
            </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction="row"
        justify="center"
        style={{ marginBottom: "20em", marginTop: "15em" }}
      >
        <Grid
          item
          md
          container
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={SaveEnergyIcon} alt="Save Energy icon" />
          </Grid>
        </Grid>
        <Grid
          item
          md
          container
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em", marginTop: matchesSm ? "10em" : 0, marginBottom: matchesSm ? "10em" : 0 }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={SaveTimeIcon} alt="Save Time icon" />
          </Grid>
        </Grid>
        <Grid
          item
          md
          container
          direction="column"
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={SaveMoneyIcon} alt="Save Money icon" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.rowContainer} direction={matchesMd ? "column" : "row"} alignItems={matchesMd ? "center" : undefined} justify="space-around">
        <Grid item md container direction={matchesSm ? "column" : "row"} className={classes.itemContainer} style={{marginBottom: matchesMd ? "15em" : 0}}>
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSm ? "center" : undefined}>Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                Billions are spent annually on the purchasing,printing,and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                By utilizing digital forms and documents you can thease obsolete
                expenses, accelerate your communication, and help the Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              isStopped={true}
              options={documentsOptions}
              style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid item md container direction={matchesSm ? "column" : "row"} className={classes.itemContainer}>
            <Grid item md>
                <Lottie
                isStopped={true}
                options={scaleteOptions}
                style={{ maxWidth: 280, maxHeight: 260 }}
                />
            </Grid>
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSm ? "center" : "right"}>Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : "right"}>
                Whether you're a large brand, just getting started, or taking of right now, our apllication architecture ensures pain-free growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.rowContainer} direction="row" justify="center" style={{marginTop: "20em", marginBottom: "20em"}}>
          <Grid item container direction="column" alignItems="center">
              <Grid item>
                  <img src={root} alt="root" width={matchesSm ? "300em" : "450em"} height={matchesSm ? "300em" : "450em"}/>
              </Grid>
              <Grid item className={classes.itemContainer}>
                  <Typography align="center" variant="h4" gutterBottom>
                    Root-Cause Analysis
                  </Typography>
                  <Typography className={classes.itemContainer} align="center" variant="body1" paragraph>
                    Many problems are merely symptoms of layer, underlying issues.
                  </Typography>
                  <Typography className={classes.itemContainer} align="center" variant="body1" paragraph>
                    We can help you throughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                  </Typography>
              </Grid>
          </Grid>
      </Grid>
      <Grid item container className={classes.rowContainer} direction={matchesMd ? "column" : "row"} alignItems={matchesMd ? "center" : undefined} justify="space-around" style={{marginBottom: "20em"}}>
        <Grid item md container direction={matchesSm ? "column" : "row"} className={classes.itemContainer} style={{marginBottom: matchesMd ? "15em" : 0}}>
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSm ? "center" : undefined}>Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                Why waste time when you don't have to?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                We can help you identify processes with time or event based actions which can now easily be automated.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                Increasing effciency increases profits, leaving you more time to focuse on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              isStopped={true}
              options={automationOptions}
              style={{ maxWidth: 290, maxHeight: 280}}
            />
          </Grid>
        </Grid>
        <Grid item md container direction={matchesSm ? "column" : "row"} className={classes.itemContainer}>
            <Grid item md>
                <Lottie
                isStopped={true}
                options={uxOptions}
                style={{ maxWidth: 155, maxHeight: 310 }}
                />
            </Grid>
          <Grid item md container direction="column">
            <Grid item>
              <Typography variant="h4" align={matchesSm ? "center" : "right"}>User Experience Design</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : "right"}>
                A good desin that isn't usable isn't a good design.  
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : "right"}>
                So why are so many pieces of software complicated, confusing, and frustracting?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : "right"}>
                By prioritizing users and real ways they intract with technology we're able to develop unique, personable experience 
                that solve problems rather than create new ones.  
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </Grid>
  );
};

export default CustomSoftware;
