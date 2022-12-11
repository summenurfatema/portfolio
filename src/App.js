
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Root';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
      <ScrollToTop />
    </div>
  );
}

export default App;
