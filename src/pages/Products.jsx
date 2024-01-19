
import { customFetch } from "../utils"
import { Filters, PaginationContainer, ProductsContainer } from "../components/index";


export const loader = async ({request}) => {
   try {
    const res = await customFetch('/products');
    const products = res.data.data
    const meta = res.data.meta

    return {products, meta}
  } catch (error) {
    
    console.log(error)
   } 
}

const Products = () => {
  
  return (
    <>
      <Filters />
      <ProductsContainer/>
      <PaginationContainer />
    </>
  );
}
export default Products