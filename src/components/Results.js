import * as React from 'react';
import { Container, Button, List, ListItem, ListItemText } from '@mui/material';

function Results(props) {
  
  return ( 
    <div>
        <Container>
            <h3>Recommended Restaurants</h3>
            <List>
                {props.results.map((restaurant) => (
                    <ListItem>
                      <ListItemText
                        primary={restaurant['name']}
                        secondary={
                            <React.Fragment>
                            {restaurant['categories']}
                            <br/>
                            {restaurant['stars']}
                            </React.Fragment>
                        }
                        />
                    </ListItem> 
                ))}
            </List>
            <Button variant="contained" onClick={props.resultsFunction}>New Search</Button>
        </Container>
    </div>
);
}

export default Results;