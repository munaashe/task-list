import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from './screens/home-screen';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;