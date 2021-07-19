import React from 'react';

import * as Types from './Types';

function List({type = 'fixed', ...props}) {
    const Render = Types[`${type}`] ?? Types.fixed;

    return(
        <Render {...props} />
    )
};

export default List;