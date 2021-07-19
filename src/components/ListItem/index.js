import React from 'react';

import * as Types from './Types';

function ListItem({type = '', ...props}) {
    const Render = Types[`${type}`] ?? Types.team;
    
    return(
        <Render {...props} />
    )
};

export default ListItem;