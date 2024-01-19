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

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <SingleProduct /> },
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
