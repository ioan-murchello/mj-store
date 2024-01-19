import { Hero } from '../components/index';
import { customFetch } from '../utils';
import {FeaturedProducts} from '../components/index'

const url = '/products?featured=true';

export const loader = async () => {
  try {
    const res = await customFetch(url);

    if (!res.status === 200) {
      throw new Error('Some error');
    }

    return {products: res.data.data};
  } catch (error) {
    throw new Error(error);
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  );
};
export default Landing;
