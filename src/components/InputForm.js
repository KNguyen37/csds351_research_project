  import * as React from 'react';
  import { Container, FormControl, InputLabel, Input, Button } from '@mui/material';
  
  function InputForm(props) {
  
    
    return ( 
      <div>
          <Container>
            <FormControl>
              <InputLabel htmlFor="location">Enter a Restaurant You Enjoy</InputLabel>
              <Input id="location" aria-describedby="Enjoyed Restaurant" />
              <Button variant="contained" onClick={props.postFunction}>Get Recommendations</Button>
            </FormControl>
          </Container>
      </div>
  );
  }
  
  export default InputForm;