import React, {useCallback, useEffect, useRef, useState} from 'react';

import {Container} from './styles';

import Input from '../Input';

/*
    fieldValues: {<key>: <value>, ...},
    fieldKeys: [
        {key: <itemKey>, type: [text/checkbox]}
    ]  
*/

function Forms({fieldValues = {}, fieldKeys = [], onSubmit}) {
    const [forms,setForms] = useState({});

    const handleChange = (key, value) => {
        setForms((old) => ({...old, [key]: value}));
    } 

    const handleSubmit = useCallback(() => {
        if(onSubmit) onSubmit(forms);
    },[onSubmit, forms]);

    useEffect(() => {
        setForms(fieldValues);
    },[fieldValues]);

    return(
        <Container>
            {fieldKeys.map(({type, key}) => (
                <div className='field-row' key={`${key}`}>
                    <Input {...{type}} onChange={(value) => handleChange(key, value)} value={forms[key] ?? ''} />                    
                </div>
            ))}
            <Input type='button' title='Submit' onClick={handleSubmit} />
        </Container>
    )
}

export default Forms;