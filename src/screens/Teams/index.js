import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {Creators} from './redux/reducer';

import { TeamsList, TasksList, TaskInfo } from './components';

import { Container, Divider } from './styles';

function Teams() {
  const dispatch = useDispatch();

  const sync = useCallback(() => {
    dispatch(Creators.syncTeams());
  },[dispatch]);

  useEffect(() => {
    sync();
  }, [sync])

  return (
    <Container>
      <TeamsList />
      <Divider />
      <TasksList />
      <Divider />
      <TaskInfo />
    </Container>
  );
}

export default Teams;
