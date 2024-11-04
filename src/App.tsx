import useLenisScroll from './hooks/lenis';
import './index.css';
import HomePage from './pages/home';
import Layout from './layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './pages/aboutus';
import ComponentsPage from './pages/components';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children: [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path : "/components",
        element : <ComponentsPage/>
      },
      {
        path : "/aboutus",
        element : <AboutUs/>
      },


    ]

  },
  {
    path : "/components",
    element : <ComponentsPage/>
  },
])

const App = () => {
useLenisScroll()
  return (
    <div className='grid-background'>
    <RouterProvider router={router}/>
    </div>
  );
};

export default App;
