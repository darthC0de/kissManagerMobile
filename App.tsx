import React from 'react';

import Routes from './src/routes';
import databaseInit from './src/database/databaseInit';

export default function App() {
  new databaseInit
  return (
    <Routes />
  );
}
