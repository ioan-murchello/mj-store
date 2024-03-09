
import { customFetch } from "../utils"
import { Filters, ProductsContainer } from "../components/index"; 
import Pagination from "../components/Pagination";

const url =
  '/products?search=&category=&order=a-z&company=all&price=100000';

const allProductsQuery = (queryParams) => {
  const {search,category,company,sort,price,shipping,page} = queryParams 

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 10000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch.get('/products', { params: queryParams }),
  };
}

export const loader =
  (queryClient) =>
  async ({ request }) => { 
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const res = await queryClient.ensureQueryData(allProductsQuery(params));
      const products = res.data.data;
      const meta = res.data.meta;

      return { products, meta, params };
    } catch (error) {
      console.log(error);
    }
  };

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