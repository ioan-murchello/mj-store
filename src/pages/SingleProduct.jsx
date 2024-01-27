
import { Link, useLoaderData } from "react-router-dom"
import { customFetch, formatPrice, generateAmountOptions } from "../utils"
import { useState } from "react"

import { useDispatch } from "react-redux"
import { addItem } from "../features/cart/cartSlice"

export const loader = async ({params}) => {
  try {
    const res = await customFetch(`/products/${params.id}`)
    if(res.status !== 200){
      throw new Error('Could not fetch item details')
    }
    return {product: res.data.data}
  } catch (error) {
    console.log(error)
  }
}

const SingleProduct = () => {
  const {product} = useLoaderData()
  const {colors, company, description, image,price,title} = product.attributes
  const formattedPrice = formatPrice(price)
  const generatedAmount = generateAmountOptions(5);
  const [productColor, setProductColor] = useState(colors[0]) 
  const [amount ,setAmount] = useState(1)

  const handleAmoutn = e => {
    setAmount(parseInt(e.target.value))
  }

  const cartProduct = {
    cartId: product.id + productColor,
    productId: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem({product: cartProduct}))
  }

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className='mg-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
          src={image}
          alt={title}
        />
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className="text-xl text-slate-500 font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formattedPrice}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map(color => {
                return <button className={`w-6 h-6 rounded-full mr-2 ${color === productColor && 'border-2 border-secondary shadow-md'}`} key={color} style={{background: color}} type='button'
                onClick={() => setProductColor(color)}
                ></button>
              })}
            </div>
            {/* AMOUNT */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select className="select seelct-secondary select-bordered select-md" id="amout" value={amount} onChange={handleAmoutn}>
                {generatedAmount} 
              </select>
            </div>
            {/* CART BTN */}
            <div className="mt-10">
              <div className="btn btn-accent rounded-xl" onClick={addToCart}>
                Add to bag
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct