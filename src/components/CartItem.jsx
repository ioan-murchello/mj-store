import { useDispatch } from 'react-redux';
import { formatPrice, generateAmountOptions } from '../utils';
import { editItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartId }));
  };

  const editItemInCart = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  };

  const { cartId, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <article
      key={cartId}
      className='mb-12 flex flex-col items-center gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'
    >
      <img
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
        src={image}
        alt={title}
      />
      <div className='sm:ml-16'>
        <h3 className='capitalize font-medium'>{title}</h3>
        <h4 className='mt-2 capitalize text-sm'>{company}</h4>
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color:
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-16'>
        <div className='form-control max-w-xs'>
          <label htmlFor='amount' className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            className='mt-2 select select-base select-borderd select-xs'
            name='amount'
            id='amount'
            onChange={editItemInCart}
            value={amount}
          >
            {generateAmountOptions(5)}
          </select>
          <button
            className='mt-2 link link-primary link-hover text-sm'
            onClick={removeItemFromCart}
          >
            remove
          </button>
        </div>
      </div>
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
