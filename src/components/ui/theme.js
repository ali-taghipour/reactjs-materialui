import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = "#0B6189";
const arcOrange = "#FF5733";
const arcGray = "#868686";

export default createMuiTheme({
    palette:{
        common:{
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main: `${arcOrange}`
        }
    },
    typography:{
       tab:{
        fontWeight: "700",
        fontSize: "1rem",
        textTransform: "none"    
       },
       h2:{
        fontFamily:"Raleway",
        fontWeight:700,
        fontSize:"2.5rem",
        color: arcBlue,
        lineHeight: 1.5
       },
       h3:{
           fontFamily: "Posefico",
           color: arcBlue,
           fontSize: "2.5rem"
       },
       h4:{
           fontFamily: "Realway",
           fontSize: "1.75rem",
           color: arcBlue,
           fontWeight: 700
       },
       subtitle1:{
           fontSize: "1.25rem",
           color: arcGray,
           fontWeight: 300
       },
       subtitle2:{
           fontSize: "1.25rem",
           color: "white",
           fontWeight: 300
       },
       body1:{
           fontSize: "1.25rem",
           color: arcGray,
           fontWeight: 300
       },
       caption:{
            fontSize: "1rem",
            fontWeight: 700,
            color: arcGray
       },
       learnMoreButton:{
        borderColor: arcBlue,
        borderRadius: 50,
        color: arcBlue,
        textTransform: "none",
        fontFamily: "Roboto",
        fontWeight: "bold",
        borderWidth: 2
       },
       estimate:{
        color:"white",
        fontSize: "1rem",
        textTransform: "none"
       }
    },
    overrides:{
        MuiInputLabel:{
            root:{
                color: arcBlue,
                fontSize: "1rem"
            }
        },
        MuiInput:{
            root:{
                color: arcGray,
                fontWeight: 300
            },
            underline:{
                "&:before":{
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
});