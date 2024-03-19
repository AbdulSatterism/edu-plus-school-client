import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';


const queryClient = new QueryClient()

function App() {

  return (
    <div className='max-w-screen-xl mx-auto bg-white'>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>

          </RouterProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
