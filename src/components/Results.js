import * as React from 'react';
import { Container, Button, List, ListItem, ListItemText } from '@mui/material';

function Results(props) {

  
  return ( 
    <div>
        <Container>
            <h3>Recommended Restaurants</h3>
            <List>
                <ListItem>
                    <ListItemText>Dewey's Pizza</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Vero Pizza Napoletana</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Crust</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>...</ListItemText>
                </ListItem>
            </List>
            <Button variant="contained" onClick={props.resultsFunction}>New Search</Button>
        </Container>
    </div>
);
}

export default Results;