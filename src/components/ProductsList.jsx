import { Link, useLoaderData } from 'react-router-dom';

import { formatPrice } from '../utils';

const ProductsList = () => {
  const { products } = useLoaderData(); 
  return (
    <div className='pt-12 grid gap-4'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const formattedPrice = formatPrice(price);

        return (
          <Link
            className='grid grid-cols-1 sm:grid-cols-2 p-7 shadow-xl hover:shadow-2xl transition duration-300'
            key={product.id}
            to={`/products/${product.id}`}
          >
            <figure className='px-4 pt-4'>
              <img
                className='rounded-xl h-64 md:h-48 w-full object-cover'
                src={image}
                alt={title}
              />
            </figure>
            <div className='flex flex-col gap-y-4 justify-center items-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{formattedPrice}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
