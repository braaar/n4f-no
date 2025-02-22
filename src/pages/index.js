import React from 'react';
import '../index.css';
import { Grommet } from 'grommet';

import Landing from '../components/landing/Landing';
import theme from '../styles/theme';

function Index() {
  return (
    <Grommet theme={theme}>
      <Landing />
    </Grommet>
  );
}

export default Index;
