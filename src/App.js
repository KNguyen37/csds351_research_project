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
  const [model_results, setModelResults] = useState(null)

  function getData(body) {
    axios({
        method: "POST",
        url: "/search",
        data: {
          words: body
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setResults(true)
        setInputForm(false)
        setModelResults(response.data.results)
      })
    }

    function reset() {
      setInputForm(true)
      setResults(false)
    }

  return ( 

      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh'}}
        >
            {inputForm && (
            <InputForm 
              postFunction={getData}
            />
            )}
            {results && (
            <Results resultsFunction={reset} results={model_results}/>
            )}  
        </Grid>  
      </div>
);
}

export default App;