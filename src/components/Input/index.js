import React from 'react';

import * as Types from './Types'

function Input({type = '', ...props}) {
    const Render = Types[type] ?? Types.text;

    return <Render {...props} />
}

export default Input;