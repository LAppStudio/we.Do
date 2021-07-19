import React, {useCallback} from 'react';

import styled from 'styled-components';

function TextType({value = '', onChange, placeholder = ''}) {

    const handleChange = useCallback(({target}) => {
        if(onChange) onChange(target?.value);
    },[onChange])

    return <Input onChange={handleChange} {...{value ,placeholder}} />
};


const Input = styled.input`
    padding: 10px;
    text-align: left;
    width: 100%;

    background-color: #fff;
    outline: none;

    border: 1px solid black;
    border-radius: 10px;

    ::placeholder {
        color: #aaa;
        font-weight: bold;
    }

    :active {
        outline: none;
    }
`;


export default TextType;