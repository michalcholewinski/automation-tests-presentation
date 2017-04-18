import React from 'react';
import {
    Heading,
    Slide,
    List,
    ListItem
} from "spectacle";

const GoalOfTesting = () => {
    return (
        <Slide>
            <Heading size={6} textColor="primary" caps>Goal Of Testing</Heading>
            <List>
                <ListItem>Writing maintainable software</ListItem>
                <ListItem>Providing fast automated regeression for refactors and small changes to the code</ListItem>
            </List>
        </Slide>
    );
}

export default GoalOfTesting;