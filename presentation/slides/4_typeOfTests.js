import React from 'react';
import {
    List,
    ListItem,
    Slide
} from "spectacle";

const TypeOfTests = () => {
    return (
        <Slide>
            <List>
                <ListItem>Unit Tests</ListItem>
                <ListItem>End-to-end tests</ListItem>
                <ListItem>Integration test</ListItem>
                <ListItem>Manual Test</ListItem>
                <ListItem>Smoketests</ListItem>
                <ListItem>Performance Tests</ListItem>
            </List>
        </Slide>
    );
}

export default TypeOfTests;