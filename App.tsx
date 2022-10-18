import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';

import Routes from './src/routes';
import databaseInit from './src/database/databaseInit';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    // updateApp();
  }, []);

  new databaseInit();
  return <Routes />;
}
