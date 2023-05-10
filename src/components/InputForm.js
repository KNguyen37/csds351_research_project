  import * as React from 'react';
  import { FormControl, TextField, Button } from '@mui/material';
  import { useState } from 'react';

  
  function InputForm(props) {

    const [text, setText] = useState("");

    function handleSubmit() {
      props.postFunction(text)
    }
  
    
    return ( 
            <FormControl sx={{ width: '50%' }}>
              <TextField
                id="outlined-multiline-static"
                label="What kind of restaurant would you like to eat at?"
                name="words"
                multiline
                rows={4}
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <Button variant="contained" onClick={handleSubmit}>Get Recommendations</Button>
            </FormControl>
  );
  }
  
  export default InputForm;