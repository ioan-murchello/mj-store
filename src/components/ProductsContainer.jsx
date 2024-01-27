import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import {BsFillGridFill, BsList} from 'react-icons/bs'
import Loading from "./Loading"; 

const ProductsContainer = () => {
    const {meta} = useLoaderData()

    const param = useNavigation()

    const loading = param.state === 'submitting' 
    const totalProducts = meta.pagination.total
    
    const [layout, setLayout] = useState('grid') 

    const setActiveStyles = pattern => {
        return `text-xl btn btn-circle btn-sm ${
          pattern === layout
            ? 'btn-accent text-accent-content'
            : 'btn-ghost text-based-content'
        }`;
    }
  return (
    <>
      <div className='flex justify-between items-center mt-8 border border-base-400 rounded-3xl p-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-2'>
          <button
            className={setActiveStyles('grid')}
            onClick={() => setLayout('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setActiveStyles('list')}
            onClick={() => setLayout('list')}
          >
            <BsList />
          </button>
        </div>
      </div>

      {loading && <Loading />}
      {totalProducts === 0 ? (
        <h5 className='text-xl mt-4'>
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
}
export default ProductsContainer