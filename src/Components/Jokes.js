import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { PATH_BASE, PATH_CATEGORY_PROGRAMMING, PATH_BLACKLISTFLAGS, PATH_TYPE, PATH_AMOUNT} from '../api';


const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  

export default function Jokes() {

const [state, setState] = React.useState({ misc: false, programming: true, christmas: false });  



const [appState, setAppState] = useState({ jokes: [] })

//setAppState(jokes);

useEffect(() => {
    
  const apiUrl=  `${PATH_BASE}${PATH_CATEGORY_PROGRAMMING}?${PATH_BLACKLISTFLAGS}=nsfw,racist,sexist&
  ${PATH_TYPE}=single&${PATH_AMOUNT}=5`;
  //const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single&amount=5';
  axios.get(apiUrl).then((jokesArray) => {
    const jokes = jokesArray.data.jokes;
    console.log(jokes);
    setAppState({...appState, jokes, ...jokes});
  });
  //eslint-disable-next-line
}, [setAppState]);

const handleChange = (event) => {
    setAppState({ jokes: [] });  
    setState({ ...state, [event.target.name]: event.target.checked });
   
  };

  useEffect(() => {
    
    console.log(state);

    let SELECTEDCATEGORY = "";

    if(state.programming === true && state.misc === false && state.christmas === false)
    SELECTEDCATEGORY = PATH_CATEGORY_PROGRAMMING;
    else if(state.programming === false && state.misc === false && state.christmas === false)
    SELECTEDCATEGORY = PATH_CATEGORY_PROGRAMMING;
    else if(state.programming === true && state.misc === true && state.christmas === false)
    SELECTEDCATEGORY = PATH_CATEGORY_PROGRAMMING + ",Miscellaneous";
    else if(state.programming === false && state.misc === true && state.christmas === false)
    SELECTEDCATEGORY = "/Miscellaneous";
    else if(state.programming === true && state.misc === true && state.christmas === true)
    SELECTEDCATEGORY = PATH_CATEGORY_PROGRAMMING + ",Miscellaneous,Christmas";
    else if(state.programming === false && state.misc === true && state.christmas === true)
    SELECTEDCATEGORY = "/Miscellaneous,Christmas";
    else if(state.programming === false && state.misc === false && state.christmas === true)
    SELECTEDCATEGORY = "/Christmas";
    else if(state.programming === true && state.misc === false && state.christmas === true)
    SELECTEDCATEGORY = PATH_CATEGORY_PROGRAMMING + ",Christmas";
    
    
    
    console.log(SELECTEDCATEGORY);

    const apiUrl=  `${PATH_BASE}${SELECTEDCATEGORY}?${PATH_BLACKLISTFLAGS}=nsfw,racist,sexist&
    ${PATH_TYPE}=single&${PATH_AMOUNT}=5`;
    

  //const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single&amount=5';
  axios.get(apiUrl).then((jokesArray) => {
    const jokes = jokesArray.data.jokes;
    console.log(jokes);
    setAppState({...appState, jokes, ...jokes});
  }).catch(err => {const jokes = err
    console.log(jokes);
    setAppState({...appState, jokes, ...jokes});
  } );
    //eslint-disable-next-line
  }, [state]);

  var appStateVal = true;
  if(appState.jokes !== undefined)
  appStateVal = false;

return (
<div>
    

    <Container component="main" maxWidth="lg">
    SELECT JOKE CATEGORY TO SHOW BELOW:
    <FormGroup row>
     
    <FormControlLabel
            control={<GreenCheckbox checked={state.programming} onChange={handleChange} name="programming" />}
            label="Programming"
        />
    <FormControlLabel
            control={<GreenCheckbox checked={state.misc} onChange={handleChange} name="misc" />}
            label="Misc"
        />    
    <FormControlLabel
            control={<GreenCheckbox checked={state.christmas} onChange={handleChange} name="christmas" />}
            label="Christmas"
        />      
    </FormGroup>
    <Box mt={5}>
       
         </Box>
        <Typography component="h1" variant="h4" align="left" color="textPrimary" gutterBottom>
            Jokes of the day &nbsp;
            </Typography>
            
            {appStateVal ? <Typography component="h1" variant="h6" align="left" color="textPrimary" gutterBottom>
            Error retrieving joke, please try again or select new category/ries &nbsp;
            </Typography> : appState.jokes.map((row) => (

        <p>{row.joke}</p>

        ))}
    
        </Container>
        </div>
)}