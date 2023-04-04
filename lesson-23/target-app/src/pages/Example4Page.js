import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #0E76A8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = styled.div`
    width: 500px;
    box-shadow: 5px 5px 10px #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 16px;
    padding: 16px;
    margin: 16px;
`;

const Heading = styled.div`
    font-weight: bold;
    font-size: 24px;
`;

const ListItem = styled.li`
    list-style-type: none;
    border-bottom: 1px solid black;
    padding: 8px;
    
    ${({ selected }) => selected ? 'background-color: #DDD;' : ''}
`;

export const Example4Page = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
    const [clickHeaderText, setClickHeaderText] = useState('Nothing selected');
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({
        1: false,
        2: false,
        3: false,
    });
    const [dropdownHeaderText, setDropdownHeaderText] = useState('Nothing selected');
    const [hoveredItem, setHoveredItem] = useState('Nothing selected');

    const items = [
        'Option One',
        'Option Two',
        'Option Three',
    ];

    const selectedCount = Object.values(selectedCheckboxes)
        .filter(x => x)
        .length;

    return (
        <Wrapper>
            <Box>
                <Heading>.click() and .dblClick()</Heading>
                <p>Click to highlight, double click to select</p>
                <p>Selected Item:
                    <span data-cy="box-1-selected-name">
                        {clickHeaderText}
                    </span>
                </p>
                <ul
                    data-cy="box-1-items-list"
                    style={{ paddingLeft: 0 }}>
                    {items.map((item, i) => (
                        <ListItem
                            key={i}
                            className="box-1-list-item"
                            onClick={() => setSelectedItemIndex(i)}
                            onDoubleClick={() => setClickHeaderText(item)}
                            selected={i === selectedItemIndex}
                        >{item}</ListItem>
                    ))}
                </ul>
            </Box>
            <Box>
                <Heading>.check() and .uncheck()</Heading>
                <form>
                    <p>
                        <span data-cy="box-2-selected-count">
                            {selectedCount}
                        </span>
                        &nbsp;checkboxes selected
                    </p>
                    <div
                        className="checkboxes"
                        data-cy="box-2-checkboxes">
                        {items.map((item, i) => (
                            <label key={i} style={{ display: 'block' }}>
                                <input
                                    type="checkbox"
                                    checked={selectedCheckboxes[i]}
                                    onChange={() => setSelectedCheckboxes({
                                        ...selectedCheckboxes,
                                        [i]: !selectedCheckboxes[i],
                                    })} />
                                {item}
                            </label>
                        ))}
                    </div>
                </form>
            </Box>
            <Box>
                <Heading>.select()</Heading>
                <p>Selected Item:&nbsp;
                    <span data-cy="box-3-selected-name">
                        {dropdownHeaderText}
                    </span>
                </p>
                <select
                    data-cy="box-3-dropdown"
                    onChange={e => setDropdownHeaderText(e.target.value)}>
                    {items.map((item, i) => (
                        <option
                            key={i}
                            value={item}
                        >{item}</option>
                    ))}
                </select>
            </Box>
            <Box>
                <Heading>.trigger('mouseover')</Heading>
                <p>Selected Item:&nbsp;
                    <span data-cy="box-4-selected-name">
                        {hoveredItem}
                    </span>
                </p>
                <ul
                    style={{ paddingLeft: 0 }}
                    data-cy="box-4-items-list">
                    {items.map((item, i) => (
                        <ListItem
                            key={i}
                            onMouseOver={() => setHoveredItem(item)}
                            selected={item === hoveredItem}
                        >{item}</ListItem>
                    ))}
                </ul>
            </Box>
        </Wrapper>
    );
}