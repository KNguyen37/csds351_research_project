import axios from "axios";
import * as React from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';
import InputForm from './components/InputForm.js';
import Results from './components/Results.js';
import './App.css';

function App() {

  const [inputForm, setInputForm] = useState(true);
  const [results, setResults] = useState(false);

  function getData() {
    // axios({
    //     method: "POST",
    //     url: "/search",
    //   })
    //   .then((response) => {
        setResults(true)
        setInputForm(false)
      // })
    }

    function reset() {
      // axios({
      //     method: "GET",
      //     url: "/",
      //   })
      //   .then((response) => {
          setInputForm(true)
          setResults(false)
        // })
      }

  return ( 

      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item md={6}>
            {inputForm && (
            <InputForm 
              postFunction={getData}
            />
            )}
            {results && (
            <Results resultsFunction={reset}/>
            )}
          </Grid>   
        </Grid>  
      </div>
);
}

export default App;