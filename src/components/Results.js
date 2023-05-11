import * as React from 'react';
import { Container, Button, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from '@mui/material';

function Results(props) {
  
  return ( 
    <div>
        <Container>
            <List>
            <h2>Recommended Restaurants</h2>
                {props.results.map((restaurant) => (
                    <ListItem                         component="a" 
                    href={restaurant['url']}>
                      <ListItemAvatar>
                        <Avatar alt="Business Image" src={restaurant['image']} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={restaurant['name']}
                        secondary={
                            <React.Fragment>
                                <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                {restaurant['categories']}
                                </Typography>
                                <br/>
                                {restaurant['stars']}☆
                                <br/>
                                {restaurant['reviews']} reviews
                            </React.Fragment>
                        }
                        />
                    </ListItem> 
                ))}
            </List>
            <Button variant="contained" onClick={props.resultsFunction}>New Search</Button>
        </Container>
        <br/>
        <br/>
    </div>

);
}

export default Results;