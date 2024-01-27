import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
    const {meta, params} = useLoaderData()
    const{search,company,order,category,shipping,price} = params
    
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search */}
      <FormInput
        type='search'
        label='Search product'
        name='search'
        defaultValue={search}
        size='input-sm'
      />
      {/* categories */}
      <FormSelect
        label='Select category'
        name='category'
        defaulValue={category}
        list={meta.categories}
        size='select-sm'
      />
      {/* order */}
      <FormSelect
        label='sort by'
        name='order'
        defaulValue={order}
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
      />
      {/* companies */}
      <FormSelect
        label='Select company'
        name='company'
        defaulValue={company}
        list={meta.companies}
        size='select-sm'
      />
      {/* price */}
      <FormRange
        name='price'
        label='select price'
        price={price}
        size={'range-sm'}
      />
      {/* shipping */}
      <FormCheckbox
        className='select-sm'
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
      />

      {/* buttons */}
      <button className='btn btn-accent btn-sm rounded-lg' type='submit'>
        search
      </button>
      <Link className='btn btn-info btn-sm rounded-lg' to='/products'>
        reset
      </Link>
    </Form>
  );
}
export default Filters