import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar } from '../components/index';
import Loading from '../components/Loading';

const HomeLayout = () => {
  const navigate = useNavigation()
  const isLoading = navigate.state === 'loading'

  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
