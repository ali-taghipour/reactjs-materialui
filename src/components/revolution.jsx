import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Lottie from "react-lottie";

import technologyAnimation from "../animations/technologyAnimation/data";

import vision from "../assets/vision.svg";
import handshake from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },
  paragraphContainer: {
    maxWidth: "40em",
  },
}));

const technologyOptions = {
  loop: true,
  autoplay: false,
  animationData: technologyAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" align={matchesMd ? "center" : undefined}>
          Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMd ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="vision"
            style={{
              maxWidth: matchesSm ? 300 : "40em",
              marginRight: matchesMd ? 0 : "5em",
              marginBottom: matchesMd ? "5em" : 0
            }}
          />
        </Grid>
        <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
          <Grid item className={classes.paragraphContainer}>
            <Typography align={matchesMd ? "center" : "right"} gutterBottom variant="h2">
              Vision
            </Typography>
          </Grid>
          <Grid item className={classes.paragraphContainer}>
            <Typography align={matchesMd ? "center" : "right"} paragraph variant="body1">
              The raise of computers, and subsequently has completely alterd
              every aspect of human life, This has increased our comfort,
              brodened our connections, and reshaped how we view the world.
            </Typography>
            <Typography align={matchesMd ? "center" : "right"} paragraph variant="body1">
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Hamesting this ultimated
              potential by using it to solve problems by using it to solve
              problems and better lives is at the heart of everything we do.
            </Typography>
            <Typography align={matchesMd ? "center" : "right"} paragraph variant="body1">
              We want to helep businesses capatalize on the latest and greatest
              technology. The best way to be the one building it, and we want to
              help guide the world into this next chapter of technological
              expansion, exploration and inovation.
            </Typography>
            <Typography align={matchesMd ? "center" : "right"} paragraph variant="body1">
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you hve absolute best tools necessary to thrive in
              this new fronter.
            </Typography>
            <Typography align={matchesMd ? "center" : "right"} paragraph variant="body1">
              We see a future where every individual has persenlized software
              custom tailored to their lifestyle, cultuer, and interests,
              helping them overcome life's obstacies. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMd ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
          <Grid item className={classes.paragraphContainer}>
            <Typography gutterBottom variant="h2">
              Technology
            </Typography>
          </Grid>
          <Grid item className={classes.paragraphContainer}>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js,completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purposes.
            </Typography>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              Two years later they shocked the world by releasing a similar
              system, React Native, for producting iOS and Android apps. Instead
              of having to master two completly seperate development platforms,
              you can leverage the knowladge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              This technology is now being used by componies like
              AirBnB,Microsoft,Netflix,Pinterest,Skype, Tesla, UberEats, and
              when Facebook purchased Instegram large portion of it were even
              rebuilt using React.
            </Typography>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              Developers have since build top of these systems by automating
              project setup and deployment, alowing creators to focus as much as
              possible on their work itself.
            </Typography>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              These technical advancements translate into savings by
              significantly reducing the workload and streamling the workflow
              for developers new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography paragraph align={matchesMd ? "center" : undefined} variant="body1">
              This puts personalizition in your pocket - faster,better and more
              affordable then ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMd ? "center" : "flex-end"} lg>
          <Lottie
            options={technologyOptions}
            isStopped={true}
            style={{ maxWidth: "40em", marginRight: 0 }}
          />
        </Grid>
      </Grid>
      <Grid item container justify="center" direction={matchesMd ? "column" : "row"}>
        <Grid item>
          <Typography align={matchesMd ? "center" : undefined} variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#B3B3B3", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#000", marginTop: "5em" }}
              >
                Consultation
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff" , maxWidth: "20em" }} variant="body1">
                Our process begins the moment you realize you need a piece of
                technology for your business. whether you already have an idea
                for where to start and what to do, or if you just know you want
                to step things up, our initial consultation will help you
                examine your business holistically to find the best solutions.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identity other potential areas
                for consideration.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identity other potential areas
                for consideration.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Cutting-edge advancements in machine learning like object
                detection and natural language processing allow computers to do
                things previously unimaginable, and our experties and intution
                will help usher you into this new future of possibilities.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={handshake}
              style={{ maxWidth: matchesSm ? 300 : "40em" }}
              width="100%"
              alt="consultation icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#ff7373", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Mockup
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                After we settle on the best path forward and decide on a
                solution to pursue, details like the cost and timeline will be
                finalized.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Then it’s time for us to start on your minimum viable product.
                That’s just a fancy term for a mockup, which doesn’t include
                colors, images, or any other polished design elements, but
                captures the essential layout structure and functionality.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                This helps us understand and refine the solution itself before
                getting distracted by specifics and looks.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={mockup}
              width="100%"
              style={{maxWidth: 1000}}
              alt="mockup icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#39B54A", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Before moving any farther we come back to you with our progress.
                This gives you the freedom to discuss any changes you may want
                or any ideas you may have come up with before any heavy lifting
                has been done.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                We give you an interactive demonstration of the mockups,
                thoroughly explaining the thought process that went into each
                screen and every anticipated feature.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Once you’re completely satisfied with the vision for our
                solution we get down to the nitty gritty, fine-details of
                design.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={review}
              width="100%"
              style={{ maxWidth: matchesSm ? 300 : "40em" }}
              alt="review icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#A67C52", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Using the mockups and notes taken during the consultation as
                guides, we will start ironing out what the final product will
                look like. This also involves using any brand material like
                fonts, colors, and logos to extend the experience you’re already
                familiar with.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                No aspect is superfluous, and care will be taken with every
                decision.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={design}
              width="100%"
              style={{maxWidth: 1000}}
              alt="design icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#39B54A", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                A second round of review is essential to our goal of creating
                exactly what you want, exactly how you want it.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                This time we’ll be going over the finalized designs in another
                fully interactive demonstration. Again this gives you an
                opportunity to tweak things and make sure we get everything
                right the first time.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={review}
              width="100%"
              style={{ maxWidth: matchesSm ? 300 : "40em" }}
              alt="review icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#FBB03B", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Build
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Here’s where we get down to business.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Engineering begins after your approval on the final designs. We
                start by scaffolding out the project on a high level,
                prioritizing some areas over others.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Each area is then developed in order of importance until ready
                to be connected to the next piece.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Typically the backend, behind the scenes operations are
                completed first. Once all the services are in place we can then
                create the front end, user side of things.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Finishing the application doesn’t mean we’re done though,
                because we use extensive testing to guarantee compatibility with
                all intended devices.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Only after our rigorous examinations will we accept a product as
                finished, then pushing it through the production pipeline. This
                produces an optimized, compressed, consumer version of the code
                and assets ready for deployment.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={build}
              width="100%"
              style={{maxWidth: matchesMd ? matchesSm ? 150 : 700 : 1000}}
              alt="build icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#C1272D", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Launch
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                The moment we’ve all been waiting for.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                When construction comes to a close you’re the first one to know.
                We’ll give our final demonstration to show off your shiny new
                software in the wild so you know exactly how it will look to
                your users.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                When you say the word, we press the button and launch your
                project out to the public. We’re there to ensure everything goes
                to plan so you can start reaping the rewards of your
                technological investment immediately.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={launch}
              width="100%"
              style={{maxWidth: matchesSm ? 100 : 200}}
              alt="launch icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#8E45CE", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Maintain
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Our work doesn’t end there.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                After a successful launch we keep in close contact to listen to
                feedback and hear how the project is being received.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                From there on out we make sure your application is kept up to
                date and taking advantage of the best features and practices
                available. When new developments arise or new techniques are
                discovered in future projects, we will implement those
                advancements in your project as part of our routine maintenance.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={maintain}
              width="100%"
              style={{ maxWidth: matchesSm ? 300 : "40em" }}
              alt="maintain icon"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          style={{ backgroundColor: "#29ABE2", height: "90em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems={matchesMd ? "center" : undefined} lg>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ maxWidth: "20em", color: "#000", marginTop: "5em" }}
              >
                Iterate
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                The cycle repeats whenever you come up with a new idea for
                extending your current project, or come up with a brand new
                system entirely.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                By planning for future features and changes we can build and
                evolve your application over time. As new use cases and customer
                needs develop we can respond with continuous integration of new
                content.
              </Typography>
              <Typography paragraph align={matchesMd ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }} variant="body1">
                Our iterative process will keep you current and competitive,
                allowing you to quickly implement changes instead of waiting
                months for a single update.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <img
              src={iterate}
              width="100%"
              style={{ maxWidth: matchesSm ? 300 : "40em" }}
              alt="iterate icon"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
