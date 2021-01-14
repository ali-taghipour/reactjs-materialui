import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";

import historyImage from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

import CallToAction from "./ui/callToAction";

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "2em",
          paddingRight: "2em",
        },
      },
      missionStatement:{
          fontSize: "1.5rem",
          lineHeight: 1.4,
          fontWeight: 300,
          maxWidth: "50em",
          fontStyle: "italic"
      },
      avatar:{
          height: "25em",
          width: "25em",
          [theme.breakpoints.down("sm")]:{
              height: "20em",
              width: "20em",
              maxHeight: 300,
              maxWidth: 300
          }
      }
}));

const AboutUs = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMd ? "1em" : "2em"}}>
                <Typography align={matchesMd ? "center" : undefined} variant="h2">About Us</Typography>
            </Grid>
            <Grid item style={{marginTop: "5em"}} container justify="center" className={classes.rowContainer}>
                <Typography variant="body1" align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests, 
                    technology is meant to bring us closer to what we care about in the best way possible. 
                    Arc Development will use that principle to provide fast, modern, inexpensive,
                    and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid item container style={{marginTop: "10em", marginBottom: "10em"}} direction={matchesMd ? "column" : "row"} alignItems={matchesMd ? "center" : undefined} justify="space-around" className={classes.rowContainer}>
                <Grid item>
                    <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                        <Typography variant="h4" align={matchesMd ? "center" : undefined} gutterBottom>
                            History
                        </Typography>
                        <Typography variant="body1" align={matchesMd ? "center" : undefined} style={{fontWeight:700 , fontStyle: "italic"}} paragraph>
                            We’re the new kid on the block.
                        </Typography>
                        <Typography variant="body1" align={matchesMd ? "center" : undefined}>
                            Founded in 2019, we’re ready to get our hands on the world’s business problems.
                        </Typography>
                        <Typography variant="body1" align={matchesMd ? "center" : undefined}>
                            It all started with one question: Why aren’t all businesses using available technology?
                            There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                        </Typography>
                        <Typography variant="body1" align={matchesMd ? "center" : undefined}>
                            We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                        </Typography>
                        <Typography variant="body1" align={matchesMd ? "center" : undefined}>
                            All this change can be a lot to keep up with, and that’s where we come in.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={historyImage} alt="history img" style={{maxHeight: matchesMd ? 200 : "22em"}} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container alignItems="center" direction="column">
                <Grid item>
                    <Typography variant="h4" paragraph align="center">
                        Team
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started coding when I was 9 years old.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar src={founder} alt="founder img" className={classes.avatar} />
                </Grid>
            </Grid>
            <Grid item container style={{marginBottom: "15em"}} direction="row" justify={matchesMd ? "center" : undefined} className={classes.rowContainer}>
                <Hidden lgUp>
                    <Grid item container style={{maxWidth:"45em", padding:"1.25em"}} direction="column" lg>
                        <Typography variant="body1" align="center">
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" align="center">    
                            Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item container style={{marginBottom: matchesMd ? "2.5em" : 0}} alignItems={matchesMd ? "center" : undefined} direction="column" lg>
                    <Grid item>
                        <img style={{maxWidth: matchesMd ? 300 : undefined}} src={yearbook} alt="yearbook" />
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">
                            a page from my Sophomore yearbook
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item container style={{maxWidth:"45em", padding:"1.25em"}} direction="column" lg>
                        <Typography variant="body1" align="center">
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" align="center">    
                            Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" lg alignItems={matchesMd ? "center" : "flex-end"}>
                    <Grid item>
                        <img style={{maxWidth: matchesMd ? 300 : undefined}} src={puppy} alt="puppy" />
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">
                            my miniature dapple dachshund, Sterling
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )
}

export default AboutUs;