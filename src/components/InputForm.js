  import * as React from 'react';
  import { Container, FormControl, InputLabel, TextField, Button } from '@mui/material';
  
  function InputForm(props) {
  
    
    return ( 
            <FormControl sx={{ width: '50%' }}>
              <TextField
                id="outlined-multiline-static"
                label="What kind of restaurant would you like to eat at?"
                multiline
                rows={4}
              />
              <Button variant="contained" onClick={props.postFunction}>Get Recommendations</Button>
            </FormControl>
  );
  }
  
  export default InputForm;