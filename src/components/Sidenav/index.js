import React from 'react';

import Option from './Option';

import {AiOutlineTeam, AiFillFolder} from 'react-icons/ai';

import {Container} from './styles';
import { useHistory } from 'react-router-dom';



function Sidenav() {
    const {push} = useHistory();

    const options = [
        {title: 'TEAMS', icon: <AiOutlineTeam />, onClick: () => push('/teams'), path: '/teams'  },
        {title: 'BACKLOG', icon: <AiFillFolder />, onClick: () => push('/backlog'), path: '/backlog'}
    ]

    return(
        <Container>
            <div className='nav-options'>
                {options.map(({icon, title, ...rest}) => <Option {...{title}} {...rest} key={title}>{icon}</Option>)}
            </div>
        </Container>
    )
};

export default Sidenav;