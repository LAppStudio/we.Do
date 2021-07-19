import React, {Fragment} from 'react';

import {Provider as ReduxProvider} from 'react-redux';

import {store} from './store';

import Routes from './routes';

console.log('USEMOCK', process.env.REACT_APP_USE_MOCK);

function App() {
  return(
    <Fragment>
      <ReduxProvider {...{store}}>
        <Routes />
      </ReduxProvider>
    </Fragment>
  )
};

export default App;