import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    background-color: #0E76A8;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    height: 500px;
    width: 500px;
    text-align: center;
    box-shadow: 5px 5px 10px #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 16px;
`;

const Input = styled.input`
    border-radius: 8px;
    font-size: 16px;
    padding: 8px;
    border: 2px solid #0E76A8;
    outline-width: 0;
    text-align: center;
`;

export const Example3Page = () => {
    const MAX_LENGTH = 15;
    const [firstNameInputValue, setFirstNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');

    return (
        <Wrapper>
            <Box>
                <Input
                    type="text"
                    value={firstNameInputValue}
                    onChange={e => setFirstNameInputValue(e.target.value)}
                    maxLength={MAX_LENGTH}
                    className="input-large"
                    id="first-name-input"
                    data-cy="input-first-name"
                />
                <p>
                    You have&nbsp;
                    <span data-cy="first-name-chars-left-count">
                        {MAX_LENGTH - firstNameInputValue.length}
                    </span>
                    &nbsp;characters left
                </p>
                <Input
                    type="text"
                    value={lastNameInputValue}
                    onChange={e => setLastNameInputValue(e.target.value)}
                    maxLength={MAX_LENGTH}
                    className="input-large"
                    id="last-name-input"
                    data-cy="input-last-name"
                />
                <p>
                    You have&nbsp;
                    <span data-cy="last-name-chars-left-count">
                        {MAX_LENGTH - lastNameInputValue.length}
                    </span>
                    &nbsp;characters left
                </p>
            </Box>
        </Wrapper>
    );
}