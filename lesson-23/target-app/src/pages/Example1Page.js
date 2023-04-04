import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0E76A8;
    color: white;
    font-size: 32px;
`;

export const Example1Page = () => (
    <Wrapper>
        <h1>My Awesome Web Application</h1>
    </Wrapper>
);