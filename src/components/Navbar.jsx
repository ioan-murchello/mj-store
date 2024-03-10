import { NavLink } from 'react-router-dom';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import Navlinks from './Navlinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';



const Navbar = () => {
  const dispatch = useDispatch()

  const handleTheme = () => {
    dispatch(toggleTheme())  
  };

  const itemsInCart = useSelector(state => state.cartState.numItemsInCart)

  return (
    <section className='bg-base-200 py-3'>
      <nav className='align-element flex justify-between items-center '>
        <NavLink
          to='/'
          className='hidden lg:block text-4xl btn btn-primary rounded-lg'
        >
          MJ
        </NavLink>
        <div className='dropdown lg:hidden'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <FaBarsStaggered className='w-6 h-6' />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
          >
            <Navlinks />
          </ul>
        </div>
        <div className='nav-links gap-x-6 hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <Navlinks />
          </ul>
        </div>
        <div className='flex gap-x-4'>
          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />
            <BsMoonFill className='swap-on w-4 h-4' />
            <BsSunFill className='swap-off w-4 h-4' />
          </label>
          <NavLink className='btn btn-ghost btn-circle btn-md ml-4' to='/cart'>
            <div className='indicator'>
              <BsCart3 className='w-6 h-6' />
              <span className='badge bagde-sm badge-primary indicator-item rounded-full'>
                {itemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
