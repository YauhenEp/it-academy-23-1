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

export const Example2Page = () => {
    const MAX_LENGTH = 15;
    const [inputValue, setInputValue] = useState('');

    return (
        <Wrapper>
            <Box>
                <Input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    maxLength={MAX_LENGTH}
                    className="input-large"
                    id="main-input"
                    data-cy="max-char-input"
                />
                <p>
                    You have <span data-cy="chars-left-count">{MAX_LENGTH - inputValue.length}</span> characters left
                </p>
            </Box>
        </Wrapper>
    );
}