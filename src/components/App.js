import React,{useState} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {ThemeProvider} from '@material-ui/styles';
import theme from './ui/theme';
import Header from './ui/header';
import Footer from './ui/footer';
import LandingPage from "./landingPage";
import Services from "./Services";
import CustomSoftware from "./customSoftware";
import MobileApps from "./mobileApps";
import Websites from "./websites";
import Revolution from "./revolution";
import AboutUs from "./aboutUs";
import ContactUs from "./ContactUs";


function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
        <Route exact render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/"/>
        <Route exact render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/services" />
        <Route exact component={Revolution} path="/revolution" />
        <Route exact render={(props) => <AboutUs {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/about" />
        <Route exact render={(props) => <ContactUs {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/contact" />
        <Route exact component={() => (<div>Free Estimate</div>)} path="/estimate" />
        <Route exact render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/customSoftware" /> 
        <Route exact render={(props) => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/mobile" /> 
        <Route exact render={(props) => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} path="/website" /> 
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
   
  );
}

export default App;
