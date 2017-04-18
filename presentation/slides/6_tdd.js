import React from 'react';
import {
    Heading,
    Slide,
    Text
    } from "spectacle";

const Tdd = () => {
    return (
        <div>
            <Heading size={6} textColor="secondary" caps>TDD - Test Driven Development</Heading>
            <Text>Test-driven development (TDD) (Beck 2003; Astels 2003), is an evolutionary approach to development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring.</Text>
        </div>
    );
}

export default Tdd;