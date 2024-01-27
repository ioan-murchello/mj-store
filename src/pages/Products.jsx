
import { customFetch } from "../utils"
import { Filters, ProductsContainer } from "../components/index"; 
import Pagination from "../components/Pagination";

const url =
  '/products?search=&category=Chairs&order=a-z&company=all&price=100000"';

export const loader = async ({request}) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  
   try {
    const res = await customFetch('/products',{params});
    const products = res.data.data
    const meta = res.data.meta

    return {products, meta, params}
  } catch (error) {
    
    console.log(error)
   } 
}

const Products = () => {
  
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <Pagination/>
    </div>
  );
}
export default Products