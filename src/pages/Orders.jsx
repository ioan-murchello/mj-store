import { redirect, useLoaderData } from "react-router-dom"
import { customFetch } from "../utils"
import{OrdersList, ComplexPaginationContainer, Title} from '../components/index'

const orderQuery = (params,user) => {
  return {
    queryKey:['orders',user.username,params.page ? parseInt(params.page) : 1],
    queryFn: () => customFetch.get('/orders', {
      params,
      headers: {
        Authorization: `Bearer ${user.token}`,
      }
    })
  }
}

export const loader = (store, queryClient) => async({request}) => {
  const user = store.getState().userState.user
  if(!user) {
    alert('You must by logged in to view orders')
    return redirect('/login')
  }
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

  try {
    const res = await queryClient.ensureQueryData(orderQuery(params,user))
    return {orders: res.data.data, meta:res.data.meta}

  } catch (error) {
    console.log(error)
    const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your orders...' 
    alert(errorMessage)
    if(error?.response?.status === 401 || 403) return redirect('/login')
    return null
  }
  
}

const Orders = () => {
  const {meta} = useLoaderData()
  if(meta.pagination.total < 1){
    return <Title text='please make an order'/>
  }
  return (
    <>
      <Title text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}
export default Orders