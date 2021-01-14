import React,{useState} from "react";
import {Link} from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContant from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles,useTheme} from "@material-ui/core/styles";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";

import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

const useStyles = makeStyles(theme => ({
    background:{
        width:"100%",
        height: "60em",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`
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
        [theme.breakpoints.down("md")]:{
            marginLeft: 0,
            marginRight: 0
        }
    },
    learnButton:{
        ...theme.typography.learnMoreButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        marginTop: "1em",
        [theme.breakpoints.down("md")]:{
            marginBottom: "2em"
        }
    },
    message:{
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton:{
        ...theme.typography.estimate,
        width: 245,
        height: 45,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]:{
            height: 40,
            width: 225
        }
    }
}));

const ContactUs = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

    const [name,setName] = useState("");

    const [phone,setPhone] = useState("");
    const [phoneHelper,setPhoneHelper] = useState("");

    const [email,setEmail] = useState("");
    const [emailHelper,setEmailHelper] = useState("");

    const [message,setMessage] = useState("");

    const [open,setOpen] = useState(false);

    const onChange = (event) => {
        let valid;

        switch(event.target.id){
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if(!valid){
                    setEmailHelper("invalid email format!!!");
                }
                else{
                    setEmailHelper("");
                }
                break
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if(!valid){
                    setPhoneHelper("invalid email format!!!");
                }
                else{
                    setPhoneHelper("");
                }
                break
            default:
                break
        }


    }

    return(
        <Grid container direction="row">
            <Grid item container direction="column" alignItems="center" style={{marginBottom: matchesMd ? "5em" : 0,marginTop: matchesSm ? "1em" : matchesMd ? "5em" : 0}} lg={4} xl={3} justify="center">
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" style={{lineHeight: 1}} align={matchesMd ? "center" : undefined}>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" style={{color: theme.palette.common.blue}} align={matchesMd ? "center" : undefined}>
                                We’re waiting.
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}} direction="row" spacing={2}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone icon" />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem", verticalAlign: "bottom"}}>
                                    <a href="tel:5555555555" style={{textDecoration: "none", color: "inherit"}}> (555) 555-5555 </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" style={{marginBottom: "2em"}} alignItems="center" spacing={2}>
                            <Grid item>
                                <img src={emailIcon} alt="email icon" />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem", verticalAlign: "bottom"}}>
                                    <a href="mailto:zach@gmail.com" style={{textDecoration: "none", color: "inherit"}}> zach@gmail.com </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{maxWidth: "20em"}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Name" id="name" fullWidth value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>                   
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Phone Number" error={phoneHelper.length !== 0} helperText={phoneHelper} id="phone" fullWidth value={phone} onChange={(event) => onChange(event)} />
                            </Grid>
                            <Grid item>
                                <TextField label="Email" error={emailHelper.length !== 0} helperText={emailHelper} id="email" fullWidth value={email} onChange={(event) => onChange(event)} />
                            </Grid>   
                        </Grid>
                        <Grid item style={{maxWidth: matchesXs ? "100%" : "20em"}}>
                            <TextField id="message" fullWidth multiline InputProps={{disableUnderline: true}} className={classes.message} rows={10} value={message} onChange={(event) => setMessage(event.target.value)} />
                        </Grid>
                        <Grid item container justify="center" style={{marginTop: "2em"}}>
                            <Button onClick={() => setOpen(true)} /*disabled={name.length === 0 || message.length === 0 || phone.length === 0 || email.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}*/ variant="contained" className={classes.sendButton}>
                                Send Messange <img src={airplane} style={{marginLeft: "1em"}} alt="paper airplane" />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog fullScreen={matchesXs} style={{zIndex:1644}} PaperProps={{style:{ paddingTop: matchesXs ? "1em" : "5em",paddingBottom: matchesXs ? "1em" : "5em",paddingRight: matchesXs ? "1em" : matchesSm ? "5em" : matchesMd ? "10em" : "20em",paddingLeft:  matchesXs ? "1em" : matchesSm ? "5em" : matchesMd ? "10em" : "20em"}}} open={open} onClose={() => setOpen(false)}>
                <DialogContant>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Confirmation Message
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid item container direction="column" style={{maxWidth: "20em"}}>
                                <Grid item style={{marginBottom: "0.5em"}}>
                                    <TextField label="Name" id="name" fullWidth value={name} onChange={(event) => setName(event.target.value)} />
                                </Grid>                   
                                <Grid item style={{marginBottom: "0.5em"}}>
                                    <TextField label="Phone Number" error={phoneHelper.length !== 0} helperText={phoneHelper} id="phone" fullWidth value={phone} onChange={(event) => onChange(event)} />
                                </Grid>
                                <Grid item>
                                    <TextField label="Email" error={emailHelper.length !== 0} helperText={emailHelper} id="email" fullWidth value={email} onChange={(event) => onChange(event)} />
                                </Grid>   
                            </Grid>
                            <Grid item style={{maxWidth: "20em"}}>
                                <TextField id="message" fullWidth multiline InputProps={{disableUnderline: true}} className={classes.message} rows={10} value={message} onChange={(event) => setMessage(event.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginTop: "2em"}} direction={matchesSm ? "column" : "row"} alignItems="center">
                            <Grid item>
                                <Button style={{fontWeight: 300}} color="primary" onClick={() => setOpen(false)}>
                                    Cancle
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => setOpen(true)} /*disabled={name.length === 0 || message.length === 0 || phone.length === 0 || email.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}*/ variant="contained" className={classes.sendButton}>
                                    Send Messange <img src={airplane} style={{marginLeft: "1em"}} alt="paper airplane" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContant>
            </Dialog>
            <Grid item container justify={matchesMd ? "center" : undefined} direction={matchesMd ? "column" : "row"} alignItems="center" className={classes.background} lg={8} xl={9} >
                <Grid item style={{marginLeft: matchesMd ?  0 : "3em", textAlign: matchesMd ? "center" : "inherit"}}>
                    <Grid container direction="column">
                        <Typography variant="h2" align={matchesMd ? "center" : undefined}>
                            Simple Software. <br /> Revolutionary Results.
                        </Typography>
                        <Typography style={{fontSize: "1.5rem"}} variant="subtitle2" align={matchesMd ? "center" : undefined}>
                            Take advantage of the <br /> 21th Century.
                        </Typography>
                        <Grid container justify={matchesMd ? "center" : undefined} item>
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
        </Grid>
    )
}

export default ContactUs;