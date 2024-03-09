import { useSelector } from "react-redux"
import {CheckoutForm, Title,CartTotals} from "../components/index"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"

export const loader = (store) => () => {
  const user = store.getState().userState.user
  if(!user){
    toast.warning('You must by logged in to checkout')
    return redirect('/login')
  }
  return null
}

const Checkout = () => {
  const cartTotal = useSelector(state => state.cartState.cartTotal)
  if (cartTotal === 0){
    return <Title text='Your cart is empty'/>
  }
  return <>
  
    <Title text='place your order'/>
    <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
      <CheckoutForm/>
      <CartTotals/>
    </div>
  </>;
}
export default Checkout