import React from 'react';
import {
    List,
    ListItem,
    Heading
} from "spectacle";

const TypeOfTests = () => {
    return (
        <div>
            <Heading size={6} textColor="secondary" caps>Test Types</Heading>
            <List>
                <ListItem>Unit Tests</ListItem>
                <ListItem>End-to-end tests</ListItem>
                <ListItem>Integration test</ListItem>
                <ListItem>Manual Test</ListItem>
                <ListItem>Smoketests</ListItem>
                <ListItem>Performance Tests</ListItem>
            </List>
        </div>
    );
}

export default TypeOfTests;