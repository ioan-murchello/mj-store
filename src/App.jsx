import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayout,
  Error,
  Register,
  Cart,
  Products,
  SingleProduct,
  Orders,
  Checkout,
  About,
  Login,
  Landing,
} from './pages/index';

import { ErrorElement } from './components/index';

//loaders
import { loader as landingLoader } from './pages/Landing';
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: 'products', element: <Products />, loader: productsLoader },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  { path: '/login', element: <Login />, errorElement: <Error /> },
  { path: '/register', element: <Register />, errorElement: <Error /> },

  { path: '*', element: <Error /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
