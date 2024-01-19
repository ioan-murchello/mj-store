import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import { formatPrice } from "../utils";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
    const {meta} = useLoaderData()

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        {/* search */}
        <FormInput type='search' label='Search product' name='search' size='input-sm'/>
        {/* categories */}
        <FormSelect label='Select category' name='category' defaulValue='' list={meta.categories} size='select-sm'/>
        {/* order */}
        <FormSelect label='sort by' name='order' defaulValue='' list={['a-z','z-a','high','low']} size='select-sm'/>
        {/* companies */}
        <FormSelect label='Select company' name='company' defaulValue='' list={meta.companies} size='select-sm'/>
        {/* price */}
        <FormRange name='price' label='select price' size={'range-sm'}/>
        {/* shipping */}
        <FormCheckbox className='select-sm' label='free shipping' name='shipping' defaultValue={false}/>

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