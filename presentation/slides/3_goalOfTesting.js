import React from 'react';
import {
    Heading,
    Slide,
    List,
    ListItem
} from "spectacle";

const GoalOfTesting = () => {
    return (
        <div>
            <Heading size={6} textColor="secondary" caps>Goal Of Testing</Heading>
            <List>
                <ListItem>Writing maintainable software</ListItem>
                <ListItem>Providing fast automated regeression for refactors and small changes to the code</ListItem>
            </List>
        </div>
    );
}

export default GoalOfTesting;